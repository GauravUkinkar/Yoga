import React from "react";
import "./Services.scss";
import img1 from "../../assets/card1.jpg";
import left_leaf from "../../assets/services_left_shape.png";
import ser from "../../assets/front-view-man-outside-yoga-position.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Services = () => {
  const carddata = [
    {
      id: 1,
      img: img1,
      link: "#",
      heading: "Coaching",
      desc: "Executive, Life, Leadership Coaching.",
    },
    {
      id: 2,
      img: img1,
      link: "#",
      heading: "Mind Mastery ",
      desc: "Train your mind to  self-mastery.",
    },
    {
      id: 3,
      img: img1,
      link: "#",
      heading: "Yoga & Wellness",
      desc: "Hatha Yoga, Pranayama, Meditation.",
    },
    {
      id: 4,
      img: img1,
      link: "#",
      heading: "Coach &  Training",
      desc: "Aspiring coach development (MML Faculty).",
    },
  ];

  return (
    <>
      <div className="service-parent parent" id="services">
        <img className="left-leaf" src={left_leaf} alt="" />
        <div className="service-cont cont">
          <div className="content-group">
            <div className="sec-indicator">OUR SERVICES</div>
            <h2>Mindful Coaching Grounded in Experience & Presence</h2>
            <p>Empowering change with over 20 years of inner work</p>
          </div>
          <div class="card-wrap">
            <Swiper
              slidesPerView={2}
              centeredSlides={false}
              spaceBetween={30}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {carddata.map((item) => (
                <SwiperSlide>
                  <div className="card-menu">
                    <img className="top-card" src={ser} alt="" />
                    <div className="bottom-card">
                      <h3>{item.heading}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
