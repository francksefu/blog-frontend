import Book1 from '../images/livreh2.png';
import Book2 from '../images/livreh3.png';
import Book3 from '../images/livreh5.png';
const Hearder = ({classname= 'container-fluid fond-white p-3 text-light'}) => {
  return(
    <div className={classname}>
      <div className="row mt-3">
        <div className="col-md-5 row mt-3">
          <img
            className="img-fluid col-md-5 shadow p-0 mt-3"
            src={Book1}
            alt="book picture"
          />

          <img
            className="img-fluid col-md-5 renverse shadow p-0 hide-mobile"
            src={Book2}
            alt="book picture"
          />
        </div>
        <div className="col-md-1"> </div>
        <div className="col-md-5 mt-3">
          <h1 className="some">Here you can write a blog, or share with us everything you want,</h1>
          <h1 className="some">like the resume of your last book</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 p-3 mt-3">
          <h3 className="some">
            Are you a writer?
          </h3>
          <h3 className="some">
            Or a man  who just like read?
          </h3>
          <p className="text-light border-start p-3">
            Below you can find different article of other peoples,
            and if you want you can write something too
          </p>
        </div>
        <div className="col-md-3"> </div>
        <div className="col-md-3">
          <img
            className="img-fluid renverse-1 shadow p-0"
            src={Book3}
            alt="book picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Hearder;