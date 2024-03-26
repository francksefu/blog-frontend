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
      
    </div>
  );
}

export default ListBlog;