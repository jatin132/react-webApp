import React from "react";
import { NavLink } from "react-router-dom";
import "./plans.css";

const Plans = () => {
  const plans = [
    {
      planName: "Management 101",
      price: "1200",
      desc: "Actualize your business model and boost your KPIs",
      validity: "Valid for 3 months",
      btn: "Select",
    },
    {
      planName: "Financial Strategy",
      price: "1450",
      desc: "Add value and maximize your competitive advantage",
      validity: "Valid for 6 months",
      btn: "Select",
    },
    {
      planName: "Data and Digital Sol",
      price: "2500",
      desc: "Harness the power of technology to upgrade work",
      validity: "Valid for 12 months",
      btn: "Select",
    },
  ];

  return (
    <div className="">
      <div className="container mb-5 text-center">
        <h1 className="heading"> GROWTH AND INNOVATION PLANS </h1>
        <p>
          We help businesses improve their performance through innovation in
          products, services, and strategy.
        </p>
      </div>
      <div className="container mb-5">
        <div className="row mt-5 p-3">
          {plans.map((item, idx) => {
            return (
              <div className="col-lg-3 mb-3 border plans py-5 px-4 text-center" key={idx}>
                <h6 className="">{item.planName} </h6>
                <h1 className="mt-5">
                  <sup> $ </sup>
                  {item.price}
                </h1>
                <small> {item.desc} </small> <br /> <br /> <br />
                <small> {item.validity} </small>
                <button className="mt-5 select_plan btn-block">
                  <NavLink
                    to="/plans-and-pricing/select-plan/payment"
                    className="select text-white"
                  >
                    Select
                  </NavLink>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
