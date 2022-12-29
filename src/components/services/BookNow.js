import React, { useContext, useState } from "react";
import { Calendar } from "react-calendar";
import { NavLink } from "react-router-dom";
import "./services.css";
import 'react-calendar/dist/Calendar.css';
import { Price, ProvidedService, Timing } from "./Services";

const BookNow = () => {

  const [date, setDate] = useState(new Date());
  // const serviceName = useContext(ProvidedService);
  // const time = useContext(Timing);
  // const fees = useContext(Price);
  const serviceName = "Project management";
  const time = "1 hr";
  const fees = "$220";

  const onChange = (date) => {
    setDate(date);
  }

  const timing = [
    {
      time: "10:00 am",
    },
    {
      time: "10:30 am",
    },
    {
      time: "11:00 am",
    },
    {
      time: "11:30 am",
    },
    {
      time: "12:00 pm",
    },
    {
      time: "12:30 am",
    },
    {
      time: "01:00 pm",
    },
    {
      time: "01:30 pm",
    },
    {
      time: "02:00 pm",
    },
    {
      time: "02:30 pm",
    },
    {
      time: "03:00 pm",
    },
    {
      time: "03:30 pm",
    },
    {
      time: "04:00 pm",
    },
    {
      time: "04:30 pm",
    },
    {
      time: "05:00 pm",
    },
  ];

  return (
    <div className="container mt-5 mb-5">
      <h1> PROJECT MANAGEMENT </h1>
      <p className="mb-5">
        Check out our availability and book the date and time that works for you
      </p>
      <div className="row">
        <div className="col-lg-4 col-md-12 p-3 mb-3">
        <big className=""> Select a Date </big> <hr/>
        <Calendar onChange={onChange} value={date} className="p-3" />
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
        <big className=""> Select a Time </big> <hr/>
          {timing.map((item, index) => {
            return <button className="text-center p-2 px-3 timing" key={index}> {item.time} </button>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 p- mb-3">
        <big className=""> Booking Summary </big> <hr/>
        <h6> {serviceName} </h6>
        {date.toLocaleDateString()}
        <p> Terry A Francois Boulevard </p>
        <p> KIM BAILEY </p>
        <p> {time} </p>
        <p> {fees } </p>
        <button className="book-now-next p-2 mt-5 px-5">
          <NavLink to="/services/book-now/fill-form" className="text-white bookNowText"> Next </NavLink>
        </button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
