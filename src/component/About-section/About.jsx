import React from "react";
import "./About.scss";
import aboutImg from "../../assets/about.webp";
import aboutImg2 from "../../assets/about-img.png";
import aboutImg3 from "../../assets/leaf.png";
const About = ({setPopup}) => {
  return (
    <>
      <div className="about-parent parent" id="about">
        <div className="about-cont cont">
          <div className="left-about-box">
            <div className="img-group">
              <img
                className="background-img"
                src={aboutImg2}
                alt="About Images"
              />
              <img className="leaf-img" src={aboutImg3} alt="About Image" />
              <img src={aboutImg} alt="About Image" />
            </div>
          </div>
          <div className="right-about-box">
            <div className="sec-indicator">ABOUT US</div>
            <h2>
              Meet Ranu - The Coach,<br></br> The Yogi, The Seeker
            </h2>
            <p>
              With over a decade of experience in both executive coaching and
              yogic practice, I bring a unique blend of professional
              transformation and inner balance to every session. As a certified
              PCC (Professional Certified Coach – ICF), EMCC Senior
              Practitioner, and RYT-500 Yoga Acharya, I guide individuals on
              journeys of deep self-inquiry, emotional clarity, and mindful
              evolution.
            </p>
            <div className="bottom-box">
              <div className="line"></div>
              <div className="content">
                Whether you’re seeking impact, balance, or growth this is your
                path to a clearer mind, stronger body, and aligned soul.
              </div>
            </div>
            <div className="btn" onClick={() => setPopup(true)}>Get Started</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
