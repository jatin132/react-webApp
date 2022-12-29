import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Services";
import Plans from "../components/plans_and_pricing/Plans";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BookNow from "../components/services/BookNow";
import PayNow from "../components/services/PayNow";
import { FillForm } from "../components/services/FillForm";
import Payment from "../components/plans_and_pricing/Payment";
import Account from "./Account";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plans-and-pricing" element={<Plans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/book-now" element={<BookNow />} />
          {/* <Account /> */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="services//book-now/fill-form" element={<FillForm />} />
          <Route
            path="/services/book-now/fill-form/pay-now"
            element={<PayNow />}
          />
          <Route
            path="/plans-and-pricing/select-plan/payment"
            element={<Payment />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Pages;
