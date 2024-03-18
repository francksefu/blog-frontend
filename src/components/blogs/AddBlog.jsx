import { useState } from "react";
import Paragraph from "./Paragraph";
import { v4 as uuidv4 } from 'uuid';

const AddBlog = () => {
  const handleRemoveParagraph = (e) => {
    paragraph.filter((oneparagraph) => oneparagraph.id !== e.id)
  }
  const [paragraph, setParagraph] = useState([{content: (<Paragraph />), id: uuidv4()}])
  
  const handleAddParaph = () => {
    setParagraph([...paragraph, {content: (<Paragraph />), id: uuidv4()}])
  }

  return(
    <div className="container-fluid p-3 fond-white text-light">
      <div className="row mt-3">
        <div className="col-md-2"> </div>
        <form  className="p-4 col-md-8">
          <div  className="mb-3">
            <label htmlFor="title"  className="form-label">Title</label>
            <input type="text"  className="form-control" id="title" placeholder="Title for blog" />
          </div>
          <div id="pragraph">
            {paragraph.map((oneparagraph) => (
                <div className="border-bottom mb-2 p-2">
                  {oneparagraph.content}
                  <button className="btn btn-danger" onClick={() => setParagraph(paragraph.filter((onepara) => onepara.id !== oneparagraph.id))}> delete </button>
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