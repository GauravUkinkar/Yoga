import React from "react";
import Hero from "../../component/Hero-section/Hero";
import About from "../../component/About-section/About";
import Our_Offering from "../../component/Offering/Our_Offering";
import Services from "../../component/Service-section/Services";
import Work from "../../component/Work-section/Work";
import Pricing from "../../component/Pricing-section/Pricing";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Our_Offering />
      <Services />
      <Work />
      <Pricing />

    </>
  );
};

export default Home;
