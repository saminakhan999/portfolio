import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";

function Contact() {
  return (
    <section id="contact" className="contactContainer">
      <br></br>
      <br></br>

      <div className="realContactContainer">
        <div className="contactTop">
          <h1 className="contactTitle">Contact Me</h1>
          <p className="contactPara">
            Thank you so much for visiting my page! Please feel free to contact
            me about anything, I look forward to hearing from you!
          </p>
          <br></br>
          <br></br>
          <br></br>
          <h1>
            Connect with me on Linkedin!
            <a href="https://www.linkedin.com/in/samina-khan1997/">
              <img
                className="contactIcon"
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              ></img>
            </a>
          </h1>
          <br></br>
          <h1>
            Check out my projects on Github!
            <a href="https://github.com/saminakhan999">
              <img
                className="contactIcon"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
            </a>
          </h1>
          <br></br>
          <h1>
            Feel free to drop me an email!
            <a href="mailto:samina.khan9999@gmail.com? subject=HTML link">
              <img
                className="contactIcon"
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              ></img>
            </a>
          </h1>
          <br></br>
          <br></br>
          <h1>Take my business card!</h1>
        </div>
      </div>
    </section>
  );
}

export default Contact;
