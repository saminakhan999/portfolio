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
            sequence={[
              "Hi there! I'm Samina and I'm training to become a Fullstack Developer with futureproof",
              1000,
              "",
            ]}
            wrapper="h1"
            repeat={Infinity}
          />
          <p className="welcomePara">
            I'm a recent MSci Mathematics Graduate from King's College London who is now exploring the exciting world of Technology! My goal is to join an exciting project with a company whose goal is to make a person's life as easy and efficient as possible and use both my analytical and problem-solving skills to advance this company whilst furthering my programming knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}


export default Welcome;
