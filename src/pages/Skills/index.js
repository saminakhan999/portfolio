import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1024: { items: 4 },
  1024: { items: 5 }
};

const items = [
  <img
    className="item icon"
    src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
  ></img>,
  <img
    className="item icon"
    src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
  ></img>,
  <img
    className="item icon"
    src="https://iconape.com/wp-content/png_logo_vector/jest-logo.png"
  ></img>,
  <img
    className="item icon"
    src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
  ></img>,
  <img
    className="item icon"
    src="https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png"
  ></img>,
  <img
    className="item icon"
    src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png"
  ></img>,
  <img
    className="item icon"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
  ></img>,
  <img
    className="item icon"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png"
  ></img>,
  <img
    className="item icon"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png"
  ></img>,
  <img
    className="item icon"
    src="https://cdn.iconscout.com/icon/free/png-256/django-2-282855.png"
  ></img>,
  <img
    className="item icon"
    src="https://www.pngitem.com/pimgs/m/159-1595977_flask-python-logo-hd-png-download.png"
  ></img>,
  <img
    className="item icon"
    src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
  ></img>,
  <img
    className="item icon"
    src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png"
  ></img>,
  <img
    className="item icon"
    src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png"
  ></img>,
  <img
    className="item icon"
    src="https://cdn.iconscout.com/icon/free/png-256/heroku-225989.png"
  ></img>,
];



function Skills() {
  return (
    <section id="skills">
      <div className="skillsContainer">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="skillsIntro">
          <h1 className="skillsTitle">Technical Skills</h1>
          <p className="skillsPara">
            Here are the different technologies that I've used throughout my
            projects!
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="allSkills">
            <AliceCarousel
                autoPlay
                infinite
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"/>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}

export default Skills
