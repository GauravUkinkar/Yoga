import React, { useState } from "react";
import "./Header.scss";
import img1 from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
const Header = ({ setPopup }) => {
  const [navBar, setnavBar] = useState(false);
  const location = useLocation();
  const togglenavs = () => {
    setnavBar(!navBar);
  };

  const navlinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Choose us",
      path: "#chooseus",
    },
    {
      name: "Services",
      path: "#services",
    },
    {
      name: "Testimonial",
      path: "#testimonial",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];

  return (
    <>
      <div className="header-parent parent bg-img-cover">
        <div className="header-cont cont">
          <a href="/" className="logo">
            <img src={img1} alt="Website Logo" />
          </a>
          <div className="menu">
            {navlinks.map((item, index) => (
              <a key={index} href={item.path}>
                {" "}
                {item.name}{" "}
              </a>
            ))}
          </div>
          <div className="btn" onClick={() => setPopup(true)}>
            Contact
          </div>

          <div class="mobile_nav">
            <div class="hamburger">
              <Hamburger toggled={navBar} toggle={togglenavs} />
            </div>

            <div class={navBar ? "nav_list active" : "nav_list"}>
              {navlinks.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  onClick={() => setnavBar(false)}
                  className={
                    location.pathname === item.path ? "active link" : "link"
                  }
                >
                  {" "}
                  {item.name}{" "}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
