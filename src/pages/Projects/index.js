import React from "react";
import { Carousel } from "3d-react-carousal";



let slides = [
  <a href="https://super-coders.netlify.app/">
    <img src="https://i.postimg.cc/WNDyJCwm/supercoders.png" alt="1" />
  </a>,
  <a href="https://habitat-tracker.netlify.app/">
    <img
      src="https://i.postimg.cc/wjjS7vBF/Screenshot-2022-03-27-at-18-41-48.png"
      alt="2"
    />
  </a>,
  <a href="https://ultimate-quiz-game.netlify.app/">
    <img
      className="projectImage"
      src="https://i.postimg.cc/LRFbCC9X/Screenshot-2022-03-27-at-18-45-35.png"
      alt="3"
    />
  </a>,
];



function Projects() {
  return (
    <section id="projects" className="projectsContainer">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="realProjectsContainer">
        <div className="projectsTop">
          <h1 className="projectsTitle">My Projects</h1>
          <p className="projectsPara">
            Here are some of my most recent projects! Click on any of the projects to visit the site or on the github icon to view its repository!
          </p>
          <br></br>
          <br></br>
          <br></br>
          <Carousel slides={slides} autoplay={true} interval={2500} />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}

export default Projects;
