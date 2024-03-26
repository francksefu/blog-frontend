import { useNavigate } from "react-router-dom";

const ListBlog = ({blog}) => {
  let navigate = useNavigate();
  const handleBook = (book) => {
    localStorage.setItem('book', JSON.stringify(book));
    navigate("/book")
  }
  return(
    <div key={blog.id} className="border cursor border-1 p-3 mt-2 row shadow bg-light estonia-regular rounded">
      <div className="col-md-4">
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg>
        </h1>
        <h6 className="font-n">author : {blog.user.email}</h6>
      </div>
      
      <div className="col-md-6" onClick={() => { handleBook(blog);}}>
        <h5 className="font-s">{blog.title}</h5>
        <p className="p-3">{blog.paragraphs[0].content.slice(0, 150) + '...'}</p>
      </div>

      <div className="d-flex flex-row bd-highlight justify-content-center border-top">
              
        <div className="p-2 bd-highlight">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
          </svg>
          <small> {blog.comments.length}</small>
        </div>
      </div>
      
    </div>
  );
}

export default ListBlog;