import React from 'react';
import { NavLink } from 'react-router-dom';

export const FillForm = () => {

  const formStyle = {
    border : "1px solid #072136"
  }

  return (
    <div className="container mt-5 mb-5">
      <h1> PROJECT MANAGEMENT </h1>
      <p className="mb-5">
        Check out our availability and book the date and time that works for you
      </p>
      <div className="row">
        <div className="col-lg-8 col-md-6 mb-3">
        <big className=""> Select a Date </big> <hr/>
        <p> Tell us a bit about yourself </p>
        <div className="pay-form p-3">
        <form action="" className=''>
          <div className='row'>
            <div className="col-lg-6 mb-3">
              <input type="text" placeholder='Email' className='form-control text-dark' style={formStyle} />
            </div>
            <div className="col-lg-6 mb-3">
              <input type="text" placeholder='Password' className='form-control text-dark' style={formStyle} />
            </div>
            <div className="col-lg-6 mb-3">
              <input type="text" placeholder='Phone Number' className='form-control text-dark' style={formStyle} />
            </div>
            <div className="col-lg-6 mb-3">
              <input type="text" placeholder='Short Message' className='form-control text-dark' style={formStyle} />
            </div>
          </div>
        </form>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
        <big className=""> Booking Summary </big> <hr/>
        <h6>  </h6>
        <p> Terry A Francois Boulevard </p>
        <p> KIM BAILEY </p>
        <p>  </p>
        <hr/>
        <p> Payment Details </p>
        <p> Total <span className='ml-5'> $220 </span> </p>
        <button className="book-now-next p-2 mt- px-5" type='submit'>
          <NavLink to="/services/book-now/fill-form/pay-now" className="text-white bookNowText"> Pay Now </NavLink>
        </button>
        </div>
      </div>
    </div>
  );
}

export default FillForm;
