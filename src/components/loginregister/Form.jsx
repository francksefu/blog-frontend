import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import { getdescrition } from "../redux/users/descriptionSlice";
import { useEffect } from "react";

const Form = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const resourceOwner = useSelector((state) => state.user.resourceOwner);
  const name = useSelector((state) => state.description.name);
  
  if(resourceOwner) {
    return(
      <div className="container-fluid fond-white text-white p-3">
        <div className="row mt-3 p-3">
          <div className="col-md-3"> </div>
          <div className="mt-3 p-3 col-md-6">
            <h2 className="some mb-3">Welcome {name} !</h2>
            <p className="border-start p-2">
              Now it's possible to write article!
              Welcome <b style={{color: 'black'}}>{name + ' .'}</b>
              Has you can see the navigation bar change for you,
              We are happy to be here with you!
              
            </p>
          </div>
          <div className="col-md-3"> </div>
        </div>
        
      </div>
    );
  }
  
  return(
    <>
      <div className="container-fluid fond-white text-white p-3">
        <div className="row mt-3">
          <div className="col-md-3"> </div>
          <div className="col-md-6">
            {registerForm ? (<Register handleClick={() => setRegisterForm(false)}/>) : (<Login handleClick={() => setRegisterForm(true)}/>)}
          </div>
          <div className="col-md-3"> </div>
        </div>
      </div>
        
    </>
  );
}

export default Form;