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
const Our_Offering = () => {
  const carddata = [
    {
      id: 1,
      number: "01",
      img: card1,
      url: "#",
      heading: "Embodied Awareness Coaching",
      desc: "Rediscover clarity and confidence by connecting with your body’s intelligence. This offering blends somatic practices with intuitive coaching to help you listen, feel, and lead from within.",
    },
    {
      id: 2,
      number: "02",
      img: card2,
      url: "#",
      heading: "Yoga for Inner Stability",
      desc: "Cultivate balance, focus, and peace through breath-centered movement. This session guides you to move gently, release tension, and center your nervous system—on and off the mat.",
    },
    {
      id: 3,
      number: "03",
      img: card3,
      url: "#",
      heading: "Mindful Leadership Mentoring",
      desc: "Lead with integrity and presence. This coaching path supports aspiring and active leaders to embody calm confidence, cultivate emotional intelligence, and take aligned action rooted in self-awareness.",
    },
    {
      id: 4,
      number: "04",
      img: card4,
      url: "#",
      heading: "Stress Release & Nervous System Reset",
      desc: "Let go of chronic stress and restore your inner calm. Through breathwork, grounding movement, and guided relaxation, this session helps reset your nervous system for clarity and resilience.",
    },
    {
      id: 5,
      number: "05",
      img: card5,
      url: "#",
      heading: "Sacred Self-Connection Practice",
      desc: "Come home to yourself. This gentle offering blends meditative movement, reflection, and intention setting to deepen your self-trust and reconnect with your inner wisdom.",
    },
  ];
  return (
    <>
      <div className="our-offering-parent parent">
        <div className="our-offering-cont cont">
          <div className="content-group">
            <div className="sec-indicator">SIGNATURE OFFERINGS</div>
            <h2>Services Rooted in Presence, Wisdom & Transformation</h2>
            <p>
              Each offering is crafted to support your journey—whether you’re
              stepping into leadership, deepening self-awareness, or seeking
              inner alignment. These practices combine ancient wisdom with
              modern insight to bring meaningful, lasting transformation.
            </p>
          </div>
          <div className="slider-group">
           <Swiper
  slidesPerView={2}
  spaceBetween={20}
  pagination={{ clickable: true }}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  modules={[Pagination, Autoplay]} 
  className="mySwiper"
>
              {carddata.map((card) => (
                <SwiperSlide key={card.id}>
                  <div
                    className="img-boxs bg-img-cover"
                    style={{ backgroundImage: `url(${card.img})` }}
                  >
                    <div className="overlay"></div>
                    <div className="content-box">
                      <div className="number">{card.number}</div>
                      <div className="heading">{card.heading}</div>
                      <p>{card.desc}</p>
                      <Link to={card.link}>
                        <div className="btn">
                          <FaArrowRightLong />
                        </div>
                      </Link>
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

export default Our_Offering;
