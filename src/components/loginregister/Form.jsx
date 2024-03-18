import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Form = () => {
  const [registerForm, setRegisterForm] = useState(false)
  
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