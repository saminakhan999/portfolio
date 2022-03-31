import React, {useState} from "react";



function Experience() {
    const [showTutor, setShowTutor] = useState(false);
    const onClickTutor = () => {
      setShowTutor(true)
      setShowCode(false)};
    const [showCode, setShowCode] = useState(false);
    const onClickCode = () => {
      setShowCode(true)
      setShowTutor(false);
    };
  return (
    <section id="experience" className="experienceContainer">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="realExperienceContainer">
        <div className="experienceTop">
          <h1 className="experienceTitle">My Work Experience</h1>
          {/* <p className="experiencePara">Coming soon</p> */}
        </div>
      </div>
      <span className="workbutton" onClick={onClickTutor}>
        Titanium
      </span>
      <span className="workbutton" onClick={onClickCode}>
        futureproof
      </span>
      <div></div>
      <br></br>
      <br></br>
      <br></br>
      {showTutor ? (
        <span id="tutor">
          Titanium Tutors | Mathematics Tutor | June 2018 – January 2022
          <br></br>- Plan and develop lessons to provide Mathematics tuition to
          students
          <br></br>- Monitor and communicate student progression and goals to
          students and parents <br></br>- Utilise strong time management &
          organisation skills to manage tuition schedule alongside studies
        </span>
      ) : showCode ? (
        <div id="futureproof">
          Futureproof | Tech Trainee | January 2022 – Present <br></br>- 13-week
          bootcamp covering the main areas of web development including
          JavaScript, HTML/CSS, Databases, and Python and applying these skills
          to various projects every week
        </div>
      ) : null}
    </section>
  );
}

export default Experience;
