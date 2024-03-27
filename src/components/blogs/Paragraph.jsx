import { useState } from "react";

const Paragraph = ({id, access}) => {
  const [titleContent, setTitleContent] = useState({title: '', content: '', id: id, access: access});
  //localStorage.removeItem("localParagraphs")
  const handleContent = () => {
    localStorage.setItem(id, JSON.stringify(titleContent));
  }

  return(
    <div className=" p-3" id="ici">
      <div  className="mb-3">
        <label htmlFor="sub-title"  className="form-label">Sub title</label>
        <input type="text"
          className="form-control"
          placeholder="title for paragraph"
          onChange={(e) => {
            setTitleContent({...titleContent, title: e.target.value})
          }}
          onBlur={handleContent}
        />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="content" className="form-label">Content of your paragraph, write below</label>
        <textarea
          className="form-control"
          rows="3"
          onChange={(e) => {
            setTitleContent({...titleContent, content: e.target.value})
          }}
          onBlur={handleContent}
        ></textarea>
      </div>
      
    </div>
  );
}

export default Paragraph;