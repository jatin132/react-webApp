import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navStyles = ({ isActive }) => {
    return {
      color: isActive ? "#8CBCDB" : "#ffffff",
    };
  };

  return (
    <div className="footer">
      <div className="row pt-5 mb-3">
        <div className="col-md-4 px-5">
          <h3 className="font-weight-light"> JAMES CONSULTING </h3>
          <ul className="px-4">
            <li className="mt-5">
              500 Terry Francois <br /> Street San Francisco, CA 94158 <br />
              Mail: info@mysite.com <br /> Tel: 123-456-7890
            </li>
          </ul>
        </div>
        <div className="col-md-4 text-left">
          <ul className="navigation-footer">
            <li className="nav-item">
              <h3 className="font-weight-light"> MENU </h3>
            </li>
            <li className="nav-item mt-4">
              <NavLink className="nav-link" to="/about" style={navStyles}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" style={navStyles}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" style={navStyles}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/plans-and-pricing"
                style={navStyles}
              >
                Plans & Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" style={navStyles}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="navigation-footer">
            <li className="nav-item">
              <h3 className="font-weight-light"> SOCIAL </h3>
            </li>
            <li className="nav-item row px-4 mt-4">
              <a href="" className="nav-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="" className="nav-link">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="mt-5 px-4">
              <p> &#169; 2035 by JAMES CONSULTING.</p>
            </li>
          </ul>
        </div>
      </div> <br/>
    </div>
  );
};

export default Footer;
