import React from "react";
import "./About.scss";
import aboutImg from "../../assets/about.webp";
import aboutImg2 from "../../assets/about-img.png";
import aboutImg3 from "../../assets/leaf.png";
const About = ({ setPopup }) => {
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
              I’m Ranu Mishra—a professional yoga coach, certified PCC (ICF),
              EMCC Senior Practitioner, and Yoga Acharya (RYT-500) with a
              passion for personal evolution. For over a decade, I’ve guided
              individuals on paths of breath, balance, and deeper
              self-awareness—whether in group yoga sessions, one-on-one
              coaching, or reflective workshops rooted in vedic inquiry.
            </p>
            <p>
              My journey weaves through the structured world of executive
              leadership and the quiet discipline of daily sadhana. As a faculty
              coach and mind mastery mentor, I don’t just teach yoga—I hold
              space for clarity, healing, and inner growth. Whether you're a
              professional navigating change or a seeker exploring stillness, my
              offerings are designed to help you evolve from the inside out.
            </p>
            <div className="bottom-box">
              <div className="line"></div>
              <div className="content">
                If you're ready to find balance, build strength, and live with
                purpose—this is where it starts.
              </div>
            </div>
            <div className="btn" onClick={() => setPopup(true)}>
              Get Started
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
