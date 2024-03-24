import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/users/usersSlice";
import { useNavigate } from "react-router-dom";

const Register = ({handleClick}) => {
  const resourceOwner = useSelector((state) => state.user.resourceOwner);
  const loading = useSelector((state) => state.user.loading);
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [dataregister, setdataregister] = useState({
    name: '', description: '', email: '', password: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: dataregister.name,
      email: dataregister.email,
      password: dataregister.password
    }
    dispatch(registerUser(obj))
    .then(() => {
      navigate('/');
    })
    .catch((err) => {
      console.error('Register Error:', err);
      navigate('/login');
    });
    setdataregister({...dataregister, name: '', description: '', email: '', password: ''});
  }

  if (loading)  {
    return (
      <h1>Loading ...</h1>
    );
  }
  
  if(resourceOwner) {
    return(
      <div className="mt-3 p-3">
        <p className="border-start p-2">
          Now it's possible to write article!
          Welcome {resourceOwner.email}
          Has you can see the navigation bar change for you,
          We are happy to be here with you!
        </p>
      </div>
    );
  }

  return(
    <div>
      <form className="p-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your names</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            required
            value={dataregister.name}
            onChange={(e) => setdataregister({...dataregister, name: e.target.value})}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="content" className="form-label">How can you describe your self? write below</label>
          <textarea
            className="form-control"
            rows="3"
            required
            value={dataregister.description}
            onChange={(e) => setdataregister({...dataregister, description: e.target.value})}
          >
          </textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="email@example.com"
            required
            value={dataregister.email}
            onChange={(e) => setdataregister({...dataregister, email: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            value={dataregister.password}
            onChange={(e) => setdataregister({...dataregister, password: e.target.value})}
          />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign up</button><br />
        Already have an account ? don't worry
        <button className="btn btn-primary" onClick={handleClick}>go to login</button>
      </form>
    </div>
  );
}

export default Register;