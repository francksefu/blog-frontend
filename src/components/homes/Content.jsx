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
    <div key={blog.id}>
      <ListBlog blog={blog} />
    </div>
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
          
        </div>
      </div>
      
    </div>
  );
}

export default Content;