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
      desc: "Practicing with Ranu transformed the way I experience my breath and body. Her calm presence and deep wisdom made every session feel like coming home to myself.",
      name: "Neha, Senior Consultant",
    },
    {
      id: 2,
      img: test1,
      desc: "I joined to learn yoga, but ended up learning so much more about myself. Ranu’s sessions go beyond the mat—they bring real clarity and peace.",
      name: "Arvind, Entrepreneur",
    },
    {
      id: 3,
      img: test1,
      desc: "Her guidance helped me reconnect with my inner strength during a difficult phase. The mindfulness tools she shares are something I carry into every day.",
      name: "Sonal, Leadership Coach",
    },
  ];

  return (
    <>
      <div className="testimonial-parent parent" id="testimonial">
        <img className="flower" src={img_flo} alt="" />
        <div className="testimonial-cont cont">
          <div className="content-group">
            <div className="sec-indicator"> Reflections from the Journey</div>
            <h2>Words from Fellow Seekers</h2>
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
