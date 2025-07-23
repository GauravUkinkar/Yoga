import React from "react";
import "./Services.scss";
import img1 from "../../assets/card1.jpg";
import left_leaf from "../../assets/services_left_shape.png";
import ser from "../../assets/front-view-man-outside-yoga-position.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Services = () => {
  const carddata = [
    {
      id: 1,
      img: img1,
      link: "#",
      heading: "Coaching",
      desc: "Executive, Life, Leadership Coaching",
    },
    {
      id: 2,
      img: img1,
      link: "#",
      heading: "Mind Mastery ",
      desc: "Train your mind to shift from self-sabotage to self-mastery.",
    },
    {
      id: 3,
      img: img1,
      link: "#",
      heading: "Yoga & Wellness",
      desc: "Hatha Yoga, Pranayama, Meditation (Group/Private)",
    },
    {
      id: 4,
      img: img1,
      link: "#",
      heading: "Coach &  Training",
      desc: "Aspiring coach development (MML Faculty)",
    },
  ];
  return (
    <>
      <div className="service-parent parent">
        <img className="left-leaf" src={left_leaf} alt="" />
        <div className="service-cont cont">
          <div className="content-group">
            <div className="sec-indicator">OUR SERVICES</div>
            <h2>Mindful Coaching Grounded in Experience & Presence</h2>
            <p>Empowering change with over 20 years of inner work</p>
          </div>
          <div class="card-wrap">
            {carddata.map((item) => (
              <div className="card-menu">
                <img className="top-card" src={ser} alt="" />
                <div className="bottom-card">
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
