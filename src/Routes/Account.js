import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../components/signup/SignUp";
import Login from "../components/login/Login";
import Pages from "./Pages";

const Account = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Account;
