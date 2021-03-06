import React from "react";
import { Carousel } from "3d-react-carousal";



let slides = [
  <a href="https://super-coders.netlify.app/">
    <img
      src="https://i.postimg.cc/WNDyJCwm/supercoders.png"
      alt="1"
    />
    <a href="https://github.com/saminakhan999/super-coders">
      <img
        className="github"
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      />
    </a>
  </a>,
  <a href="https://habitat-tracker.netlify.app/">
    <img

      src="https://i.postimg.cc/wjjS7vBF/Screenshot-2022-03-27-at-18-41-48.png"
      alt="2"
    />
    <a href="https://github.com/MongoDon-tBother/habitat">
      <img
        className="github"
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      />
    </a>
  </a>,
  <a href="https://ultimate-quiz-game.netlify.app/">
    <img

      src="https://i.postimg.cc/LRFbCC9X/Screenshot-2022-03-27-at-18-45-35.png"
      alt="3"
    />
    <a href="https://github.com/u-s-c-l/i-t-t-w-s-d">
      <img
        className="github"
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      />
    </a>
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
            Here are some of my most recent projects! Click on any of the
            projects to visit the site or on the github icon to view its
            repository!
          </p>
          <br></br>
          <br></br>
          <br></br>
            <Carousel slides={slides} autoplay={true} interval={3000} />
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
