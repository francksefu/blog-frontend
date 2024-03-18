const Register = ({handleClick}) => {
  return(
    <div>
      <form className="p-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Email address</label>
          <input type="name" className="form-control" id="name" placeholder="name" />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="content" className="form-label">How can you describe your self? write below</label>
          <textarea className="form-control" id="content" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="email@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
            <label className="form-check-label" htmlFor="dropdownCheck2">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button><br />
        Already have an account ? don't worry
        <button className="btn btn-primary" onClick={handleClick}>go to login</button>
      </form>
    </div>
  );
}

export default Register;