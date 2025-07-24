import React, { useState } from "react";
import "./Header.scss";
import img1 from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
const Header = ({setPopup}) => {
  const [navBar, setnavBar] = useState(false);
const location = useLocation()
  const togglenavs = () => {
    setnavBar(!navBar);
  };

  const navlinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "#",
    },
    {
      name: "Work",
      path: "#",
    },
    {
      name: "Services",
      path: "#",
    },
    {
      name: "Testimonial",
      path: "#",
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
          <div className="logo">
            <img src={img1} alt="Website Logo" />
          </div>
          <div className="menu">
            {navlinks.map((item, index) => (
              <Link key={index} to={item.path}>
                {" "}
                {item.name}{" "}
              </Link>
            ))}
          </div>
          <div className="btn" onClick={()=>setPopup(true)} >Contact</div>

          <div class="mobile_nav">
            <div class="hamburger">
              <Hamburger toggled={navBar} toggle={togglenavs} />
            </div>

            <div class={navBar ? "nav_list active" : "nav_list"}>
              {navlinks.map((item, index) => (
                <Link key={index} to={item.path}  className={location.pathname === item.path ? "active link" : "link"}  >
                  {" "}
                  {item.name}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
