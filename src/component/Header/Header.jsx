import React from "react";
import "./Header.scss";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header-parent parent bg-img-cover">
        <div className="header-cont cont">
          <div className="logo">
            <img src={img1} alt="Website Logo" />
          </div>
          <div className="menu">
            <Link to="#">Home </Link>
            <Link to="#">About</Link>
            <Link to="#">Work</Link>
            <Link to="#">Services</Link>
            <Link to="#">Pricing</Link>
            <Link to="#">Testimonial</Link>

            <Link to="#">Blogs</Link>
          </div>
          <div className="btn">Contact</div>
        </div>
      </div>
    </>
  );
};

export default Header;
