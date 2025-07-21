import React from "react";
import "./Work.scss";
import img3 from "../../assets/imagenew.webp";
import newimg from "../../assets/work.png";
import newimg2 from "../../assets/work2.png";
import { MdOutlineCheckCircle } from "react-icons/md";
const Work = () => {
  return (
    <>
      <div className="work-parent parent">
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
            <div className="left">
              <div className="content">
                <div className="box1">
                  <div className="left-c">
                    {" "}
                    <h3>PCC-ICF & EMCC<br></br> Certified</h3>
                    <p>
                     Internationally accredited in professional and ethical coaching.
                    </p>
                  </div>
                  <div className="right-i">
                    <MdOutlineCheckCircle />
                  </div>
                </div>
                 <div className="box2">
                  <div className="left-c">
                    {" "}
                    <h3>12+ Years Yoga <br></br>Expertise</h3>
                    <p>
                     Experienced in teaching traditional, transformative yoga.
                    </p>
                  </div>
                  <div className="right-i">
                    <MdOutlineCheckCircle />
                  </div>
                </div>
               
                <div className="box3">
                  <div className="left-c">
                    {" "}
                    <h3>Integrative Vedic<br></br> Approach</h3>
                    <p>
                     Merging ancient wisdom with modern coaching tools.
                    </p>
                  </div>
                  <div className="right-i">
                    <MdOutlineCheckCircle />
                  </div>
                </div>
                <img className="left-img" src={newimg} alt="Background Images" />
              </div>
              
            </div>
            <div className="middle">
              <img src={img3} alt="New Images" />
            </div>
            <div className="right">
          <div className="content">
                <div className="box1">
                  <div className="left-c">
                    {" "}
                    <h3>Coach Training <br></br>Faculty</h3>
                    <p>
                     Mentor and faculty at Master My Life Institute.
                    </p>
                  </div>
                  <div className="right-i">
                    <MdOutlineCheckCircle />
                  </div>
                </div>
                 <div className="box2">
                  <div className="left-c">
                    {" "}
                    <h3>Trusted by Top <br></br>Platforms</h3>
                    <p>
                    Coach for BetterUp, Orgro, and LagomWorks.
                    </p>
                  </div>
                  <div className="right-i">
                    <MdOutlineCheckCircle />
                  </div>
                </div>
               
                <div className="box3">
                  <div className="left-c">
                    {" "}
                    <h3>Warm & Results-<br></br>Focused</h3>
                    <p>
                      Empathetic style with real, lasting impact.
                    </p>
                  </div>
                  <div className="right-i">
                    <MdOutlineCheckCircle />
                  </div>
                </div>
                <img className="left-img" src={newimg2} alt="Background Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
