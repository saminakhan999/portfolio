import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://i.postimg.cc/WNDyJCwm/supercoders.png" },
  {
    url: "https://i.postimg.cc/wjjS7vBF/Screenshot-2022-03-27-at-18-41-48.png",
  },
  {
    url: "https://i.postimg.cc/LRFbCC9X/Screenshot-2022-03-27-at-18-45-35.png",
  },
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
            Here are some of my most recent projects! Click on each one to view
            a demo of the site or on the github icon to view its repository!
          </p>
        </div>
        <div className="slider">
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
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
    </section>
  );
}

export default Projects;
