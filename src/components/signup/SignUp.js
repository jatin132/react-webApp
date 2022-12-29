import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    let path = "/";
    navigate(path);
  }

  return (
    <div className="signup">
      <div className="col-lg-5 col-md-8 col-sm-10 col-10 signup_form">
        <form action="" className="" onSubmit={submitHandler}>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-12">
              <input
                type="text"
                required
                minLength="3"
                className="form-control mt-3"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input
                type="text"
                required
                minLength="3"
                className="form-control mt-3"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <input
                type="text"
                required
                minLength="5"
                className="form-control mt-3"
                placeholder="UserName"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input
                type="email"
                required
                className="form-control mt-3"
                placeholder="abc@example.com"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <input
                type="password"
                required
                minLength="6"
                className="form-control mt-3"
                placeholder="Password"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input
                type="password"
                required
                minLength="6"
                className="form-control mt-3"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <button type="submit" className="btn-block signupBtn">
                Sign Up
              </button>
            </div>
            <div className="col-md-12 text-center mt-3">
              <p className="text-dark">
                Already have an Account |
                <NavLink className="loginLink text-primary" to="/login">
                  Login
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
