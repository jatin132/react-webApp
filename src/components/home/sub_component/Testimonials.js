import React from "react";
import "./home.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container text-center">
        <br />
        <h2 className="heading"> TESTIMONIALS </h2>
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                <br />
                something nice about you and your services.”
              </p>
              <h6 className="font-weight-bold "> Operations Manager </h6>
              <p className="name"> Seema Patel </p>
            </div>
            <div class="carousel-item">
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                <br />
                something nice about you and your services.”
              </p>
              <h6 className="font-weight-bold"> Operations Manager </h6>
              <p className="name"> Seema Patel </p>
            </div>
            <div class="carousel-item">
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                <br />
                something nice about you and your services.”
              </p>
              <h6 className="font-weight-bold"> Operations Manager </h6>
              <p className="name"> Seema Patel </p>
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
