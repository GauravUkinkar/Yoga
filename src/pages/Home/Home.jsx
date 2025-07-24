import React from "react";
import Hero from "../../component/Hero-section/Hero";
import About from "../../component/About-section/About";
import Our_Offering from "../../component/Offering/Our_Offering";
import Services from "../../component/Service-section/Services";
import Work from "../../component/Work-section/Work";
import Pricing from "../../component/Pricing-section/Pricing";
import Testimonial from "../../component/Testimonial/Testimonial";
import Accordian from "../../component/Accordian/Accordian";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      {/* <Testimonial /> */}
      <About />
      <Our_Offering />
      {/* <Pricing /> */}
      {/* <Accordian /> */}
      <Footer />

    </>
  );
};

export default Home;
