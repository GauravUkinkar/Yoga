import React from "react";
import "./Pricing.scss";
import mindbody from "../../assets/price1.jpg";
import coaching from "../../assets/coaching.jpg";
import yoga from "../../assets/yoga.jpg";
import { Link } from "react-router-dom";
const Pricing = () => {
  const carddata = [
    {
      id: 1,
      img: mindbody,
      heading: "Mind-Body Practice (Yoga + Meditation)",
      desc: " Group sessions focused on balance, flexibility, and breath Starting at ₹3,000/month",
      link: "#",
    },
    {
      id: 2,
      img: coaching,
      heading: "Executive Coaching<br> (1-on-1)",
      desc: "Leadership coaching tailored to your growth journey Starting at ₹20,000/month",
      link: "#",
    },
    {
      id: 3,
      img: yoga,
      heading: "Coach Mentorship<br> Track",
      desc: " Structured guidance for ICF aspirants with evaluation support Starting at ₹25,000/month",
      link: "#",
    },
  ];
  return (
    <>
      <div className="pricing-parent parent">
        <div className="pricing-cont cont">
          <div className="content-group">
            <div className="sec-indicator">WHAT WE OFFER</div>
            <h2>Programs & Pricing</h2>
            <p>Choose a Path That Supports Your Growth</p>
          </div>

          <div className="box-menu">
            {carddata.map((card) => (
              <div className="card" key={card.id}>
                <img src={card.img} alt="Mind-Body Practice" />
                <div className="heading">
                  {card.heading.split("<br>").map((text, index) => (
                    <React.Fragment key={index}>
                      {text}
                      <br />
                    </React.Fragment>
                  ))}
                </div>

                <div className="desc">{card.desc}</div>
                <Link to={card.link}>
                  <div className="btn">Enroll Now</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
