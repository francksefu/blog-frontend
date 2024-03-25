import { useState } from "react";
import Paragraph from "./Paragraph";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { createParagraph, createPost } from "../redux/post/postSlice";

const AddBlog = () => {
  const accessToken = useSelector((state) => state.user.accessToken);
  let dispatch = useDispatch();
  const [titlePost, setTitlePost] = useState('');
  const [message, setMessage] = useState('');
  let iniid = uuidv4();
  const [paragraph, setParagraph] = useState([{content: (<Paragraph id={iniid} access={accessToken} />), id: iniid}])
  
  const handleAddParaph = () => {
    let id = uuidv4();
    setParagraph([...paragraph, {content: (<Paragraph id={id} access={accessToken} />), id: id}])
  }
  const tab = [];
  const handleSubmit = async(e) => {
    e.preventDefault();
    paragraph.map((para) => {
      tab.push(JSON.parse(localStorage.getItem(para.id)))
    })
    const obj = {title: titlePost, paragraphs: tab, access: accessToken}
    await dispatch(createPost(obj))
    .then(() => {
      setTitlePost('');
    })
    .catch((err) => {
      console.error('Post Error:', err);
      setMessage('Post Error: '+ err)
    });
    for(let i = 0; i < tab.length; i++) {
      await dispatch(createParagraph(tab[i]))
      .then(() => {
        localStorage.removeItem(tab[i].id)
      })
      .catch((err) => {
        console.error('Post Error:', err);
        setMessage('Post Error: '+ err)
      });
    }
    document.getElementById('title').value = '';
    setParagraph([]);
  }

  return(
    <div className="container-fluid p-3 fond-white text-light">
      <div className="row mt-3">
        <div className="col-md-2"> </div>
        <form  className="p-4 col-md-8">
          <div  className="mb-3">
            <label htmlFor="title"  className="form-label">Title</label>
            <input type="text" id="title" className="form-control" onChange={(e) => {setTitlePost(e.target.value)}} placeholder="Title for blog" />
          </div>
          <div id="pragraph">
            {paragraph.map((oneparagraph) => (
                <div className="border-bottom mb-2 p-2" key={oneparagraph.id}>
                  {oneparagraph.content} <br />
                  
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setParagraph(paragraph.filter((onepara) => onepara.id !== oneparagraph.id));
                      localStorage.removeItem(oneparagraph.id)
                    }}> delete </button>
                </div>
              ))
            }
          </div>
          <div className="btn btn-light jaune mb-3" onClick={handleAddParaph}>Add paragraph</div><br />
          
          
          <button type="submit" onClick={handleSubmit}  className="btn btn-primary">Add blog</button><br/>
          
        </form>
        <div className="col-md-2"> </div>
      </div>
      
    </div>
  );
}

export default AddBlog;