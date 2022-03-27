import React from "react";
import TypeAnimation from "react-type-animation";

function Welcome() {
  return (
    <section id="welcome">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="welcomeContainer">
        <div className="welcomeTextContainer">
          <TypeAnimation
            className="welcomeTitle"
            cursor={false}
            sequence={["Hi there! I'm Samina and I'm training to become a Fullstack Developer with futureproof", 1000, ""]}
            wrapper="h1"
            repeat={Infinity}
          />
    
          <p className="welcomePara">
            This page is currently under construction but check back on the 30th
            March to see the finished product!
          </p>
        </div>
      </div>
    </section>
  );
}


export default Welcome;
