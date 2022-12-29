import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {

  let navigate = useNavigate();  

  const submitHandler = (e) => {
    e.preventDefault();
    let path = "/";
    navigate(path);
  }

  return (
    <div className="signup">
      <div className="col-lg-5 col-md-8 col-sm-10 col-10">
        <form action="" className="signup_form" onSubmit={submitHandler}>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <input
                type="text"
                id="name"
                required
                minLength="5"
                className="form-control mt-3"
                placeholder="Username"
              />
            </div>
            <div className="col-lg-12 col-sm-12">
              <input
                type="password"
                id="name"
                required
                minLength="6"
                className="form-control mt-3"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
              <button type="submit" className="btn-block signupBtn">
                  Login
              </button>
            </div>
            <div className="col-md-12 text-center mt-3">
              <p className="text-dark">
                Don't have an Account |
                <NavLink className="loginLink text-primary" to="/sign-up">
                  Create New
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;