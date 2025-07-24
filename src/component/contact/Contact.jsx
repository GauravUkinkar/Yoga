import React from "react";
import "./Contact.scss";

const Contact = ({setPopup}) => {
  return (
    <>
      <div class="contact_parent parent">
        <div class="overlay" onClick={()=>setPopup(false)} ></div>

        <div class="contact_cont cont">
          <form action="">
            <p className="sec-indicator"> GET IN TOUCH </p>
            <h3>Send us a Message</h3>
            <p>
              Guia voluptas sit aspernatur aut odit aut fugit, sed quia
              exercitationem ullam corporis laboriosam
            </p>

            <div class="form_section">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name"  />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Contact Number" />
              <textarea name="" id="" placeholder="Message"  ></textarea>
              <button className="btn" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
