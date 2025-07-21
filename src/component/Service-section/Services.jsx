import React from "react";
import "./Services.scss";
import img1 from "../../assets/card1.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
const Services = () => {
  return (
    <>
      <div className="service-parent parent">
        <div className="service-cont cont">
          <div className="content-group">
            <div className="sec-indicator">OUR SERVICES</div>
            <h2>Mindful Coaching Grounded in Experience & Presence</h2>
            <p>Empowering change with over 20 years of inner work</p>
          </div>
          <div className="card-menu">
            <div className="card">
              <img src={img1} alt="Service Image" />
              <div className="heading">Lorem, ipsum dolor.</div>
              <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quo soluta suscipit fugiat a molestiae repellendus adipisci earum fugit neque!</div>
              <div className="btn"><FaArrowRightLong /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
