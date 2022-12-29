import React from "react";

const Payment = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1> Checkout </h1>
      <div className="row mt-5">
        <div className="col-lg-8 col-md-6 mb-3">
          <big className=""> Payment </big> <hr />
        </div>
        <div className="col-lg-4 col-md-6 p-3 mb-3 border">
          <big className=""> Order Summary </big> <hr />
          <p> Plan <span> </span> </p>
          <p> Duration <span></span> </p> <hr/>
          <h2> Total <span> </span> </h2>
        </div>
      </div>
    </div>
  );
};

export default Payment;
