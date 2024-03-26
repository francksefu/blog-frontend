import Image4 from '../images/livre4.png';
import Image5 from '../images/livre6h.png';

const Comment = () => {
  return(
    <div className="container-fluid fond-white text-white p-3">
      <h4 className="some">Tell us your thinking about this article ...</h4>
      <div className="row">
        <div className="col-md-5">
          <form className="p-3">
            <div className="mt-3">
              <label for="email" className="form-label">Email address</label>
              <input type="email" required className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3 mt-3">
              <label for="name" className="form-label">Your name or your nick name</label>
              <input type="text" required className="form-control" id="name" placeholder=" first name" />
            </div>
            <div className="mb-3 mt-3">
              <label for="content" className="form-label">write your comment now</label>
              <textarea className="form-control" required id="content" rows="3"></textarea>
            </div>
            <button className="btn btn-primary bleu"> Send </button>
          </form>
        </div>
        <div className="col-md-1"> </div>
        <div className="col-md-5 row p-1">
          <img
            className="img-fluid col-md-5 shadow p-0"
            src={Image4}
            alt="book picture"
          />
          <img
            className="img-fluid col-md-5 shadow p-0 renverse"
            src={Image5}
            alt="book picture"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Comment;