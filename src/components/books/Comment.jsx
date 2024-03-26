import { useState } from 'react';
import Image4 from '../images/livre4.png';
import Image5 from '../images/livre6h.png';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../redux/post/commentSlice';

const Comment = () => {
  const bookjs = localStorage.getItem('book');
  const book = JSON.parse(bookjs);
  const [comment, setComment] = useState({name: '', email: '', content: '', post_id: book.id});
  let loading = useSelector((state) => state.comment.isLoading);
  let dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(comment))
    .then(() => {
      setMessage('send with success');
     location.reload();
    })
    .catch((err) => {
      console.error('Comment Error:', err);
      setMessage('Comment Error: '+ err);
    });
  }

  if (loading) {
    return <h1>Loading ...</h1>
  }

  return(
    <div className="container-fluid fond-white text-white p-3">
      <h4 className="some">Tell us your thinking about this article ...</h4>
      <div className="row">
        <div className="col-md-5">
          <form className="p-3">
            <div className="mt-3">
              <label for="email" className="form-label">Email address</label>
              <input type="email"
                required
                className="form-control"
                placeholder="name@example.com"
                onChange={(e) => {
                  setComment({...comment, email: e.target.value})
                }}
              />
            </div>
            <div className="mb-3 mt-3">
              <label for="name" className="form-label">Your name or your nick name</label>
              <input type="text"
                required className="form-control"
                id="name"
                placeholder=" first name"
                onChange={(e) => {
                  setComment({...comment, name: e.target.value});
                }}
              />
            </div>
            <div className="mb-3 mt-3">
              <label for="content" className="form-label">write your comment now</label>
              <textarea
                className="form-control"
                required
                id="content"
                rows="3"
                onChange={(e) => {
                  setComment({...comment, content: e.target.value});
                }}
              ></textarea>
            </div>
            {message}
            <button type="submit" onClick={handleSubmit} className="btn btn-primary bleu"> Send </button>
          </form>
        </div>
        <div className="col-md-1"> </div>
        <div className="col-md-5 row ">
          <img
            className="img-fluid col-md-5 shadow p-0 hide-mobile"
            src={Image4}
            alt="book picture"
          />
          <img
            className="img-fluid col-md-5 shadow p-0 renverse mt-2"
            src={Image5}
            alt="book picture"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Comment;