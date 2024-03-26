import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/post/postSlice";
import ListBlog from "./ListBlog";

const Content = () => {

  
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts())
  }, []);

  const blogs = useSelector((state) => state.post.blogs);
  const loading = useSelector((state) => state.post.isLoading);

  if (loading) {
    return <h1>Loading ...</h1>
  }

  const listBooks = blogs.map((blog) => 
    <ListBlog blog={blog} />
  );
  
  return(
    <div className="container-fluid p-3 chocolat">
      <div className="row">
        <div className="col-md-3"> </div>
        <div className="col-md-6">
          {listBooks}
        </div>
        <div className="col-md-3"> </div>
      </div>
      <div className="row">
        <div className="col-md-9"> </div>
        <div className="col-md-3 mt-3">
          <button className="btn btn-light">
            See more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Content;