import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const PagesLink = () => {
  return (
    <div className="px-5 mt-5">
      <div className="row text-center">
        <div className="col-lg-4 more-things border mb-3">
          <h2 className="big-heading"> SERVICES </h2>
          <p className="mt-5 mb-5">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button className="more-info-btn font-weight-bold mb-5">
            <NavLink className="pages-link" to="/services">
              More Info
            </NavLink>
          </button>
        </div>
        <div className="col-lg-4 more-things border mb-3">
          <h2 className="big-heading"> PROJECTS </h2>
          <p className="mt-5 mb-5">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button className="more-info-btn font-weight-bold mb-5">
            <NavLink className="pages-link" to="/projects">
              More Info
            </NavLink>
          </button>
        </div>
        <div className="col-lg-4 more-things border mb-3">
          <h2 className="big-heading"> CLIENTS </h2>
          <p className="mt-5 mb-5">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button className="more-info-btn font-weight-bold mb-5">
            <NavLink className="pages-link">
              More Info
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PagesLink;
