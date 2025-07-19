import React from "react";
import "./Our_offering.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Our_Offering = () => {
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
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
            >
              <SwiperSlide>
                <div className="img-boxs">
                    <div className="overlay"></div>
                    <div className="content">
                        <div className="number">01</div>
                        <div className="heading">Lorem, ipsum dolor.</div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                        <div className="btn">fd</div>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-boxs"></div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-boxs"></div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-boxs"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Our_Offering;
