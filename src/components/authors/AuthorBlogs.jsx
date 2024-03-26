import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../redux/post/postSlice";
import ListBlog from "../homes/ListBlog";
import Navbar from "../Navbar/Navbar";
import Foot from "../../Foot";

const AuthorBlogs = () => {
  let dispatch = useDispatch();
  let user_id = JSON.parse(localStorage.getItem("bloguser"));
  let loading = useSelector((state) => state.post.isLoading);
  const blogs = useSelector((state) => state.post.blogs);
  useEffect(() => {
    dispatch(getUserPosts(user_id))
  }, [dispatch]);
  if(loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  let listBooks = blogs.map((blog) => 
    <ListBlog blog={blog} />
  );

  if (blogs.length == 0) {
    listBooks = (
      <div className="mt-3 mb-3 p-3">
        <h1 className="mt-3 mb-3 p-3">No blog yet</h1>
      </div>
    )
  } else {
    listBooks = blogs.map((blog) => 
    <ListBlog blog={blog} />
  );
  }
  return(
    <>
      <Navbar />
      <div className="container-fluid fond-white p-3">
        <div className="row mt-3">
          <div className="col-md-3 mt-3"> </div>
          <div className="col-md-6 mt-3">
            {listBooks}
          </div>
          <div className="col-md-3"> </div>
        </div>
      </div>
      <Foot />
    </>
  );
}

export default AuthorBlogs;