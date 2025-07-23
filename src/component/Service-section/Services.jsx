import React from "react";
import "./Services.scss";
import img1 from "../../assets/card1.jpg";
import left_leaf from "../../assets/services_left_shape.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Services = () => {
  const carddata = [
    {
      id: 1,
      img: img1,
      link: "#",
      heading: "Transformative Coaching",
      desc: "Executive, Life, Leadership Coaching",
    },
    {
      id: 2,
      img: img1,
      link: "#",
      heading: "Mind Mastery (Coaching + Positive Intelligence)",
      desc: "Train your mind to shift from self-sabotage to self-mastery.",
    },
    {
      id: 3,
      img: img1,
      link: "#",
      heading: "Yoga, Wellness & Healing",
      desc: "Hatha Yoga, Pranayama, Meditation (Group/Private)",
    },
    {
      id: 4,
      img: img1,
      link: "#",
      heading: "Coach Training & Mentorship",
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
          <div className="card-menu">
            {carddata.map((card) => (
              <div className="card">
                <img src={card.img} alt="Service Image" />
                <div className="heading">{card.heading}</div>
                <div className="desc">{card.desc}</div>
                <Link to={card.link}>
                  <div className="btn">
                    <FaArrowRightLong />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
