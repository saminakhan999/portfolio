import React from "react";


function Experience() {
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
        <span className="workbutton">Titanium</span>
        <span className="workbutton">futureproof</span>
        <div></div>
      </div>
      <div id="tutor">
        Titanium Tutors | Mathematics Tutor | June 2018 – January 2022 <br></br>
        - Plan and develop lessons to provide Mathematics tuition to students
        <br></br>- Monitor and communicate student progression and goals to
        students and parents <br></br>- Utilise strong time management &
        organisation skills to manage tuition schedule alongside studies
      </div>
      <br></br><br></br><br></br>
      <div id="futureproof">
        Futureproof | Tech Trainee | January 2022 – Present <br></br>
        - 13-week bootcamp covering the main areas of web development including JavaScript, HTML/CSS, Databases, and Python and applying these skills to various projects every week
      </div>
    </section>
  );
}

export default Experience;
