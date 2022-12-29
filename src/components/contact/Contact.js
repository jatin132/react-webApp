import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./contact.css";

const Contact = () => {

  const submitForm = () => {
    console.log("successss");
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body text-white text-center">
            <h4 class="modal-title text-white">Thankyou for contacting us.</h4>
            <h2 className="mt-3 mb-5"> We are connecting to you soon. </h2>
            <button
              type="button"
              class="btn close-btn btn-block"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>;
  };

  return (
    <div className="contact-bg">
      <h1 className="text-center"> CONTACT </h1>
      <form action="">
        <div className="row mt-5">
          <div className="col-md-6">
            <label htmlFor="fname"> First Name </label>
            <input type="text" className="form-control" required style={{border : "1px solid white", color: "#AFE0F9"}}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="lname"> Last Name </label>
            <input type="text" className="form-control" required style={{border : "1px solid white", color: "#AFE0F9"}}/>
          </div>

          <div className="col-md-6 mt-3 ">
            <label htmlFor="email"> Email </label>
            <input type="text" className="form-control" required style={{border : "1px solid white", color: "#AFE0F9"}}/>
          </div>
          <div className="col-md-6 mt-3 ">
            <label htmlFor="subject"> Subject </label>
            <input type="text" className="form-control" required style={{border : "1px solid white", color: "#AFE0F9"}}/>
          </div>

          <div className="col-md-12 mt-3 ">
            <label htmlFor="subject"> Message </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="form-control inputArea"
              style={{ backgroundColor: "#0C3C60", color: "#AFE0F9" }}
            ></textarea>
          </div>

          <div className="container">
            <div className="mt-5">
              <button
                className="submit btn-block"
                type="submit"
                data-toggle="modal"
                data-target="#myModal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
