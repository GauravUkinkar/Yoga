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
      heading: "Private & Group Yoga Sessions",
      desc: "Hatha Yoga classes tailored to your pace, with a focus on breath, alignment, and strength.",
    },
    {
      id: 2,
      img: img1,
      link: "#",
      heading: "Pranayama & Meditation Classes",
      desc: " Online sessions to help you build inner stillness, clarity, and emotional balance.",
    },
    {
      id: 3,
      img: img1,
      link: "#",
      heading: "Mind Mastery & Self-Inquiry",
      desc: " Guided journeys that blend vedic reflection with tools to build awareness, resilience, and focus.",
    },
    {
      id: 4,
      img: img1,
      link: "#",
      heading: "Holistic Wellness Guidance",
      desc: "Support for lifestyle shifts—covering daily routines, nutrition, and mindful habits.",
    },
  ];

  return (
    <>
      <div className="service-parent parent" id="services">
        <img className="left-leaf" src={left_leaf} alt="" />
        <div className="service-cont cont">
          <div className="content-group">
            <div className="sec-indicator">Offerings Rooted in Practice</div>
            <h2>Yoga for Life, Designed for You</h2>
            <p>
              {" "}
              Each offering is created with care—guided by years of practice and
              a deep understanding of the body, breath, and inner self. Whether
              you’re just beginning or seeking to deepen your journey, there’s a
              space for you here.
            </p>
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
