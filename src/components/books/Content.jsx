import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/post/postSlice";

const Content = () => {
    const bookjs = localStorage.getItem('book');
    const book = JSON.parse(bookjs);
    const id = book.id;
    let loading = useSelector((state) => state.post.isLoading);
    let dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPost(id));
    }, [dispatch]);
    const blog = useSelector((state) => state.post.blog);
    if (loading) {
      return <h1>Loading ...</h1>
    }
    if (!(blog.paragraphs)) {
      return <h1>Wait ...</h1>;
    }
    return(
      <div className="container-fluid fond-white p-3 ">
        <div className="row mt-3">
          <div className="col-md-2 mt-3"> </div>
          <div className="col-md-8 shadow bg-light mt-3">
            <div className="estonia-regular">
              <h1 className="mt-3 mb-3">{blog.title}</h1>
              <div className="p-3 border border-1">
                {blog.paragraphs.map((paragraph) => (
                  <div key={paragraph.id} className="mt-2 mb-3">
                    <h6 className="estonia-regular text-center">{paragraph.title}</h6>
                    <p>
                      {paragraph.content}
                    </p>
                  </div>
                ))}
              </div>
             
              author : {blog.user.email}
            </div>
            <div className="d-flex flex-row bd-highlight justify-content-center">
              <div className="p-2 bd-highlight">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hearts bg-transparent" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"/>
                </svg>
                <small>100</small>
              </div>
              <div className="p-2 bd-highlight">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
              </svg>
                <small> {blog.comments.length}</small>
              </div>
            </div>
          </div>
          <div className="col-md-2"> </div>
        </div>
        
      </div>
    );
  }
  
  export default Content;