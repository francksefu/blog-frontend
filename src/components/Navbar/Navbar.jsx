import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="container-fluid bg-transparent text-white position-fixed">
      <nav className="d-flex justify-content-between p-2">
        <h4 className="">Home</h4>
        
        <ul className="d-flex flex-row bd-highlight mb-3">
          <li className="ps-3 pe-3">
            <Link to="/">Home</Link>
          </li>
          <li className="ps-3 pe-3">
            <Link to="/loginregister"> Login </Link>
          </li>
          <li className="ps-3 pe-3">
            <Link to="/">Authors</Link>
          </li>
        </ul>
        <div className="cursor">
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </h1>
          Your name
          <div className="bg-light p-3">
            <ul className="mt-2 mb-2">
              <li className="pt-3 pb-3 border-bottom">
                <Link to="/" className="text-dark">Your profile</Link>
              </li>
              <li className="pt-3 pb-3 border-bottom">
                <Link to="/" className="text-dark">Your blogs</Link>
              </li>
              <li className="pt-3 pb-3 border-bottom">
                <Link to="/" className="text-dark">Add blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;