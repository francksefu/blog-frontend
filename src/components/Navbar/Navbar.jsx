import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getdescrition } from "../redux/users/descriptionSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  
  const resourceOwner = useSelector((state) => state.user.resourceOwner);
  const accessToken = useSelector((state) => state.user.accessToken)
  const [showDetail, setShowDetail] = useState(false);
  let navigate = useNavigate();
  
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

  const handleMenuMobile = () => {
    if(showDetail) {
      document.querySelector('#menu-mobile').style.display = 'none';
      document.querySelector('#cross').style.display = 'none';
      document.querySelector('#pate').style.display = 'block';
      setShowDetail(false);
    } else {
      document.querySelector('#menu-mobile').style.display = 'block';
      document.querySelector('#cross').style.display = 'block';
      document.querySelector('#pate').style.display = 'none';
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
      <div id="desk">
      <nav className="d-flex justify-content-between p-2">
        <h4 className=""><Link to="/">ReaderWriter</Link></h4>
       
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
      <div id="mobile">
        <nav className="d-flex justify-content-between p-2 " >
          <h4 className=""><Link to="/">ReaderWriter</Link></h4>
          <div>
          <h1 className="h-nav pb-2 text-white chocolat" id="pate" onClick={handleMenuMobile}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </h1>
          <h1 className="pb-2 pt-2 text-white chocolat" id="cross" onClick={handleMenuMobile}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </h1>
          <div id="menu-mobile" className="chocolat">
            <ul className=" mb-3">
              <li className="pt-3 pb-3 border-bottom">
                <Link to="/">Home</Link>
              </li>
              
                {!resourceOwner&& (
                  <li className="pt-3 pb-3 border-bottom">
                    <Link to="/loginregister"> Login </Link>
                  </li>
                ) }
              
              <li className="pt-3 pb-3 border-bottom">
                <Link to="/authors">Authors</Link>
              </li>
            </ul>
            {resourceOwner && (
              <>
                <h1 className="ps-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                  </svg>
                </h1>
                <strong className="ps-3"> {name} </strong>
                <ul className="pt-2 pb-2">
                  <li className="pt-3 pb-3 border-bottom">
                    <Link to="/userblogs" className="text-light">Your profil</Link>
                  </li>
                  <li className="pt-3 pb-3 border-bottom">
                    <Link to="/blog" className="text-light">Add blog</Link>
                  </li>
                  <li className="pt-3 pb-3 border-bottom">
                    <div className="text-light" onClick={handleLogOut}>Log out</div>
                  </li>
                </ul>
              </>
            )}
            
          </div>
          
          </div>
        </nav>
      </div>
      
    </div>
  );
}

export default Navbar;