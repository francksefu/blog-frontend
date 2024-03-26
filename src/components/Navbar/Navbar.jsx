import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getdescrition } from "../redux/users/descriptionSlice";

const Navbar = () => {
  
  const resourceOwner = useSelector((state) => state.user.resourceOwner);
  const accessToken = useSelector((state) => state.user.accessToken)
  const [showDetail, setShowDetail] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (resourceOwner) {
      dispatch(getdescrition({access: accessToken}));
      console.log(accessToken)
    }
  }, [dispatch]);

  const name = useSelector((state) => state.description.name);
  const handleShowUsermenu = () => {
    if (showDetail) {
      document.querySelector('#usermenu').style.width = '0px';
      document.querySelector('#usermenu').style.display = 'none';
      setShowDetail(false);
    } else {
      document.querySelector('#usermenu').style.display = 'block';
      document.querySelector('#usermenu').style.width = '100%';
      setShowDetail(true);
    }
   
  }

  const handleLogOut = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("resourceOwner");
    localStorage.removeItem("accessToken");
    location.reload();
  }
  return (
    <div className="container-fluid bg-transparent text-white position-fixed">
      <nav className="d-flex justify-content-between p-2">
        <h4 className="">Home</h4>
        
        <ul className="d-flex flex-row bd-highlight mb-3">
          <li className="ps-3 pe-3">
            <Link to="/">Home</Link>
          </li>
          <li className="ps-3 pe-3">
            {!resourceOwner? (<Link to="/loginregister"> Login </Link>) : (<Link to="/blog"> Add blog </Link>)}
          </li>
          <li className="ps-3 pe-3">
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
        {resourceOwner && (
          <div className="cursor bg-transparent p-0" id="showusermenu">
            <div onClick={handleShowUsermenu}>
            <h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
            </h1>
            {name}
            </div>
            
           
            
            <div className="bg-light p-3" id="usermenu" >
              <ul className="pt-2 pb-2">
                <li className="pt-3 pb-3 border-bottom">
                  <Link to="/userblogs" className="text-dark">Your profil</Link>
                </li>
                <li className="pt-3 pb-3 border-bottom">
                  <Link to="/blog" className="text-dark">Add blog</Link>
                </li>
                <li className="pt-3 pb-3 border-bottom">
                  <div className="text-dark" onClick={handleLogOut}>Log out</div>
                </li>
              </ul>
            </div>
           
          </div>
        )}
      
      </nav>
    </div>
  );
}

export default Navbar;