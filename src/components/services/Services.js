import React, { createContext } from "react";
import { NavLink } from "react-router-dom";
import service1 from "../../images/service-1.webp";
import service2 from "../../images/service-2.webp";
import service3 from "../../images/service-3.webp";
import BookNow from "./BookNow";
import "./services.css";

const Services = () => {
  const ProvidedService = createContext();
  const Timing = createContext();
  const Price = createContext();

  const services = [
    {
      img: service1,
      serviceName: "PROJECT MANAGEMENT",
      time: "1 hr",
      fees: "$220",
      btn: "Book Now",
    },
    {
      img: service2,
      serviceName: "OPERATIONAL CONSULTING",
      time: "1 hr",
      fees: "$170",
      btn: "Book Now",
    },
    {
      img: service3,
      serviceName: "CORPORATE STRATEGY",
      time: "1 hr",
      fees: "$150",
      btn: "Book Now",
    },
  ];

  return (
    <div className="">
      <div className="container mb-5">
        <h1 className="heading text-center"> SERVICES </h1>
      </div>
      <div className="container mb-5">
        <div className="row mt-5 p-3">
          {services.map((item, idx) => {
            return (
              <>
                <ProvidedService.Provider value={item.serviceName}>
                  <Timing.Provider value={item.time}>
                    <Price.Provider value={item.fees}>
                      <div className="col-md-6 mb-3" key={idx}>
                        <img
                          src={item.img}
                          alt="Services"
                          className="img-fluid col-lg-12 col-12 p-0"
                        />
                      </div>
                      <div className="col-md-6 border mb-3 p-3">
                        <h2 className="mt-5">{item.serviceName} </h2>
                        <h6 className="">{item.time} </h6>
                        <h6 className="">{item.fees} </h6>
                        <button className="mt-5 book_service">
                          <NavLink to="/services/book-now" className="bookNowText text-white"> Book Now </NavLink>
                        </button>
                      </div>
                    </Price.Provider>
                  </Timing.Provider>
                </ProvidedService.Provider>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
// export { ProvidedService, Timing, Price };  