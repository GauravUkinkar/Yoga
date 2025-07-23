import React from "react";
import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import test1 from "../../assets/test.png";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import img_flo from "../../assets/about-img.png";
const Testimonial = () => {
  const carddata = [
    {
      id: 1,
      img: test1,
      desc: "I was constantly overwhelmed and anxious. Since joining these sessions, I feel calmer, more present, and finally connected to my body.",
      name: "Pooja S.",
    },
    {
      id: 2,
      img: test1,
      desc: "This yoga journey helped me heal my chronic back pain. The breathwork and slow movement brought my body back into balance.",
      name: "Ravi K.",
    },
    {
      id: 3,
      img: test1,
      desc: "The classes have taught me to slow down and really listen to myself. It's a beautiful blend of physical practice and inner peace.",
      name: "Meera N.",
    },
    {
      id: 4,
      img: test1,
      desc: "After years of struggling with sleep, I now wake up refreshed and clear-headed. The guided relaxation is truly magical.",
      name: "Vikram D.",
    },
    {
      id: 5,
      img: test1,
      desc: "Each session feels like a sacred pause. I’ve learned to trust myself and move with more ease and intention in every part of life.",
      name: "Sneha T.",
    },
  ];

  return (
    <>
      <div className="testimonial-parent parent">
        <img className="flower" src={img_flo} alt="" />
        <div className="testimonial-cont cont">
          <div className="content-group">
            <div className="sec-indicator">Happy Customers!</div>
            <h2>What Our Clients are Saying</h2>
          </div>
          <div className="slider-group">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={false}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 250000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              {carddata.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="content-box">
                    <div className="icon">
                      <FaQuoteLeft />
                    </div>
                    <p>{card.desc}</p>
                    <div className="icons">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                    <div className="name">{card.name}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <img className="flower2" src={img_flo} alt="" />
      </div>
    </>
  );
};

export default Testimonial;
