import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = ({ setPopup }) => {
  return (
    <>
      <div className="footer-parent parent bg-img-cover">
        {/* <img className="img-foot" src={imgf} alt="" /> */}
        <div className="footer-cont cont">
          <div className="top-footer">
            <div className="sec-indicator ">Start Your Journey With Me</div>
            <h2 className="heading">
              Reach out to explore, inquire, or say hello.{" "}
            </h2>
            <div className="btn" onClick={() => setPopup(true)}>
              Contact Now
            </div>
          </div>
          <div className="middel-footer">
            <div className="logo">
              <img src={logo} alt="Site Logo" />
            </div>
            <div className="about">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                vitae.
              </p>
              <div className="icon-group">
                <div className="icon">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            <div className="list">
              <h4>Quick Links</h4>
              <div className="link-list">
                <a href="/">Home</a>
                <a href="#chooseus">Choose us </a>
                <a href="#services">Services</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#about">About</a>
                <a href="/blogs">Blog</a>
              </div>
            </div>
            <div className="contact">
              <h4>Contact Us</h4>
              <a href="#" className="icon">
                <IoCallSharp />
                <span>+9090909090</span>
              </a>
              <a href="#" className="icon">
                <IoIosMail />
                <span>info@gmail.com</span>
              </a>
              <a href="#" className="icon">
                <FaMapMarkerAlt />
                <span>Lorem ipsum dolor sit amet.</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <p>Copyright 2025, All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
