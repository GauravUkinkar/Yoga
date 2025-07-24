import React from "react";
import "./Work.scss";
import img3 from "../../assets/imagenew.webp";
import newimg from "../../assets/work.png";
import newimg2 from "../../assets/work2.png";
import { MdOutlineCheckCircle } from "react-icons/md";
import leaf from "../../assets/our_specialties_right_shape.png";

const Work = () => {
  return (
    <>
      <div className="work-parent parent" id="chooseus">
        <img className="leaf-img" src={leaf} alt="" />
        <div className="work-cont cont">
          <div className="content-group">
            <div className="sec-indicator">WHY WORK WITH ME</div>
            <h2>Why Choose Ranu as Your Coach or Yoga Mentor?</h2>
            <p>
              With global coaching credentials, decades of self-inquiry, and a
              heart-centered approach, Ranu offers a rare blend of ancient
              wisdom and modern methods — creating a safe, transformative space
              for deep personal growth.
            </p>
          </div>
          <div className="group-new">
            <div class="left">
              <div class="section">
                <div class="content">
                  <h4 class="heading">Vinyasa Yoga</h4>
                  <p>Dolor reaellendus temorius maiores alia</p>
                </div>
                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <h4 class="heading">Vinyasa Yoga</h4>
                  <p>Dolor reaellendus temorius maiores alia</p>
                </div>

                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <h4 class="heading">Vinyasa Yoga</h4>
                  <p>Dolor reaellendus temorius maiores alia</p>
                </div>

                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>

              <img src={newimg} alt="" className="line" />
            </div>
            <div className="middle">
              <img src={img3} alt="New Images" />
            </div>
            <div class="right">
              <div class="section">
                <div class="content">
                  <h4 class="heading">Vinyasa Yoga</h4>
                  <p>Dolor reaellendus temorius maiores alia</p>
                </div>

                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <h4 class="heading">Vinyasa Yoga</h4>
                  <p>Dolor reaellendus temorius maiores alia</p>
                </div>

                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <h4 class="heading">Vinyasa Yoga</h4>
                  <p>Dolor reaellendus temorius maiores alia</p>
                </div>

                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>

              <img src={newimg2} alt="" className="line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
