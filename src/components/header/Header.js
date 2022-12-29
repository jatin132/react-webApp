import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import userImg from "../../images/user_image.png";

const Header = () => {
  const navStyles = ({isActive}) => {
    return {
      color: isActive ? "#8CBCDB" : "#ffffff",
    };
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-5 p-3">
      <NavLink className="navbar-brand" to="/">
        JAMES CONSULTING
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link p-3" id="hover-link" to="/about" style={navStyles}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link p-3" id="hover-link" to="/projects" style={navStyles}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link p-3" id="hover-link" to="/services" style={navStyles}>
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link p-3" id="hover-link" to="/plans-and-pricing" style={navStyles}>
              Plans & Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link p-3" id="hover-link" to="/contact" style={navStyles}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item ml-3"> 
          <button className="btn-account p-1">
            <NavLink className="nav-link" id="hover-link" to="/sign-up" style={navStyles}>
              SignUp
            </NavLink>
            </button>
          </li>
          <li className="nav-item ml-3">
            <button className="btn-account">
            <NavLink className="nav-link" id="hover-link" to="/login" style={navStyles}>
              Log In
              <img src={userImg} alt="User Image" className="userImage ml-2" />
            </NavLink>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
