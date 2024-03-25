import { useState } from "react";
import Paragraph from "./Paragraph";
import { v4 as uuidv4 } from 'uuid';

const AddBlog = () => {
  const [titlePost, setTitlePost] = useState('');
  let iniid = uuidv4();
  const [paragraph, setParagraph] = useState([{content: (<Paragraph id={iniid} post={titlePost} />), id: iniid}])
  
  const handleAddParaph = () => {
    let id = uuidv4();
    setParagraph([...paragraph, {content: (<Paragraph id={id} post={titlePost} />), id: id}])
  }

  return(
    <div className="container-fluid p-3 fond-white text-light">
      <div className="row mt-3">
        <div className="col-md-2"> </div>
        <form  className="p-4 col-md-8">
          <div  className="mb-3">
            <label htmlFor="title"  className="form-label">Title</label>
            <input type="text"  className="form-control" onChange={(e) => {setTitlePost(e.target.value)}} placeholder="Title for blog" />
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
          
          
          <button type="submit"  className="btn btn-primary">Add blog</button><br/>
          
        </form>
        <div className="col-md-2"> </div>
      </div>
      
    </div>
  );
}

export default AddBlog;