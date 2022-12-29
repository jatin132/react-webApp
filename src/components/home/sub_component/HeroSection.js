import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const HeroSection = () => {
  return (
    <div className="homebg">
      <br />
      <div className="hero_section text-center">
        <h5 className="font-weight-bold developing">
          Developing Innovative Strategies
        </h5>
        <h1 className="font-weight-bold mt-4 big-heading display-4">
          ACHIEVING GROWTH
        </h1>
        <button className="book font-weight-bold">
          <NavLink className="book-link" to="/services">
            Book a Consultation
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
