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
            <div className="sec-indicator">Why This Practice Works</div>
            <h2>Experience That Grounds Every Session</h2>
            <p>
              With years of immersive training and lived practice, each session
              is thoughtfully crafted to support your mind, body, and inner
              journey. Ranu blends yogic depth, presence, and compassionate
              guidance to help you grow—on and off the mat.
            </p>
          </div>
          <div className="group-new">
            <div class="left">
              <div class="section">
                <div class="content">
                  <h4 class="heading">Over a Decade of Yogic Practice</h4>
                  <p>
                    Teaching since 2011, rooted in traditional Hatha Yoga with a
                    modern understanding of body and mind.
                  </p>
                </div>
                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <h4 class="heading">Certified Yoga Acharya (RYT-500)</h4>
                  <p>
                    {" "}
                    Internationally accredited through Sivananda Yoga Vedanta
                    Centres—bringing authentic lineage to your practice.
                  </p>
                </div>

                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <h4 class="heading">Holistic Focus Beyond Asanas</h4>
                  <p>
                    Sessions integrate asana, breathwork, mindfulness, and
                    lifestyle guidance for total well-being
                  </p>
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
                  <h4 class="heading">Grounded in Self-Inquiry</h4>
                  <p>
                    Inspired by vedic philosophy, each class is a space for
                    reflection, clarity, and conscious evolution.
                  </p>
                </div>

                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <h4 class="heading">For Professionals & Seekers Alike</h4>
                  <p>
                    Tailored sessions for individuals in leadership or
                    transition, supporting focus, resilience, and balance.
                  </p>
                </div>

                <div class="icon">
                  <MdOutlineCheckCircle />
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <h4 class="heading">
                    Compassionate and Intuitive Teaching Style
                  </h4>
                  <p>
                    Known for creating safe, trust-filled spaces where each
                    student feels seen, supported, and empowered.
                  </p>
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
