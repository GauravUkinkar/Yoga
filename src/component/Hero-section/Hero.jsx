import React, { useState, useEffect } from "react";
import img2 from "../../assets/hero.webp";
import { FaArrowDownLong, FaLinkedinIn } from "react-icons/fa6";
import "./Hero.scss";
import img3 from "../../assets/banner-l-top.png";
import img4 from "../../assets/banner-l-top2.png";
import img5 from "../../assets/banner-r-bottom.png";
import img6 from "../../assets/banner-r-bottom2.png";
import { ImFacebook } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
// Custom hook for looping typing effect
function useLoopingTypingEffect(
  text,
  typingSpeed = 100,
  pause = 1500,
  deletingSpeed = 50
) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text) return;
    let timeout;
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), pause / 2);
    }
    return () => clearTimeout(timeout);
  }, [text, typingSpeed, deletingSpeed, pause, isDeleting, index]);

  useEffect(() => {
    setDisplayed("");
    setIsDeleting(false);
    setIndex(0);
  }, [text]);

  return displayed;
}

const Hero = () => {
  const typedText = useLoopingTypingEffect("Yoga & Coaching.", 60, 1200, 30);

  return (
    <>
      <div className="hero-parent parent">
        <div className="overlay"></div>
        <div className="img-group-left">
          <img className="left-img" src={img3} alt="backgorund image" />
          <img src={img4} alt="Background Image" />
        </div>
        <div className="img-group-right">
          <img className="right-img" src={img5} alt="backgorund image" />
          <img className="right-img2" src={img6} alt="Background Image" />
        </div>
        <div className="social-icons">
          <a href="#" target="_blank">
            <ImFacebook />
          </a>
          <a href="#" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="#" target="_blank">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="hero-cont cont">
          <div className="left">
            <p className="sec-indicator">START A HAPPY LIFE</p>
            <h1>
              Empowering Mind, Body & Leadership Through{" "}
              <span>{typedText}</span>
            </h1>
            <p>
              A soulful journey of transformation guided by evidence-based
              coaching and the ancient wisdom of yoga.
            </p>
            <div className="btn">Book a Free Consultation</div>
            <div className="icon">
              <FaArrowDownLong />
            </div>
          </div>
          <div className="right">
            <img src={img2} alt="Hero Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
