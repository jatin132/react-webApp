import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Pages from "./Routes/Pages";

const App = () => {
  return (
    <>
    <Pages/>
    </>
  );
};

export default App;
