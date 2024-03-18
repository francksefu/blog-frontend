const Paragraph = () => {

  return(
    <div className=" p-3" id="ici">
      <div  className="mb-3">
        <label htmlFor="sub-title"  className="form-label">Sub title</label>
        <input type="text"  className="form-control" id="sub-title" placeholder="title for paragraph" />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="content" className="form-label">How can you describe your self? write below</label>
        <textarea className="form-control" id="content" rows="3"></textarea>
      </div>
      
    </div>
  );
}

export default Paragraph;