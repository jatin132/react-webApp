import React from "react";
import AboutUs from "./sub_component/AboutUs";
import HeroSection from "./sub_component/HeroSection";
import PagesLink from "./sub_component/PagesLink";
import Testimonials from "./sub_component/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <PagesLink/>
      <AboutUs/>
      <Testimonials/>
    </>
  );
};

export default Home;
