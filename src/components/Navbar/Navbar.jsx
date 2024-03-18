import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="container-fluid bg-dark text-white">
      <nav className="row p-2">
        <h4 className="col-3">Home</h4>
        <div className="col-2"></div>
        <ul className="col-6 d-flex flex-row bd-highlight mb-3">
          <li className="ps-3 pe-3">
            <Link to="/">Home</Link>
          </li>
          <li className="ps-3 pe-3">
            <Link to="/"> Add article </Link>
          </li>
          <li className="ps-3 pe-3">
            <Link to="/">Authors</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;