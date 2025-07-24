import React from "react";
import "./Our_offering.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img_leave from "../../assets/services_left_shape.png";

const Our_Offering = () => {
  const carddata = [
    {
      id: 1,
      number: "01",
      img: card1,
      url: "/blogs",
      heading: "Embodied Awareness Coaching ",
    },
    {
      id: 2,
      number: "02",
      img: card2,
      url: "/blogs",

      heading: "Yoga for Inner Stability",
    },
    {
      id: 3,
      number: "03",
      img: card3,
      url: "/blogs",

      heading: "Mindful Leadership Mentoring",
    },
    {
      id: 4,
      number: "04",
      img: card4,
      url: "/blogs",

      heading: "Stress Release & Nervous System Reset",
    },
    {
      id: 5,
      number: "05",
      img: card5,
      url: "/blogs",

      heading: "Sacred Self-Connection Practice",
    },
  ];

  return (
    <>
      <div className="our-offering-parent parent">
        <img className="leave" src={img_leave} alt="" />
        <div className="our-offering-cont cont">
          <div className="content-group">
            <div className="sec-indicator">BLOGS</div>
            <h2>Services Rooted in Presence, Wisdom & Transformation</h2>
            <p>
              Each offering is crafted to support your journey—whether you’re
              stepping into leadership, deepening self-awareness, or seeking
              inner alignment.
            </p>
          </div>
          <div className="slider-group">
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
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {carddata.map((card) => (
                <SwiperSlide key={card.id}>
                  <Link to={card.url}>
                    <div
                      className="img-boxs bg-img-cover"
                      style={{ backgroundImage: `url(${card.img})` }}
                    >
                      <div className="overlay"></div>
                      <div className="content-box">
                        <div className="label">Yoga</div>
                        <div className="heading">{card.heading}</div>
                        <div className="arrow">
                          <FaArrowRightLong />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Our_Offering;
