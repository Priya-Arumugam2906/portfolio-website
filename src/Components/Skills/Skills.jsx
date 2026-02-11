import React from "react";
import "./Skills.css";
import arrow_icon from "../../assets/arrow_icon.svg";

const Skills = () => {
  const skillsData = [
    {
      s_no: "01",
      s_name: "Frontend Development",
      s_desc:
        "Developing interactive user interfaces using React JS and modern JavaScript while following component-based architecture and clean coding practices.",
    },
    {
      s_no: "02",
      s_name: "Responsive Web Design",
      s_desc:
         "Building responsive web interfaces using CSS Grid, Flexbox, and media queries to ensure applications adapt smoothly across desktop, tablet, and mobile devices.",
    },
    {
      s_no: "03",
      s_name: "API Integration",
      s_desc:
        "Developing dynamic web applications by integrating REST APIs to deliver real-time data and interactive user experiences.",
    },
  ];

  return (
    <div className="skills container" id="skills">
      <div className="skills-title">
        <h1>Skills</h1>
        <div className="title-underline"></div>
      </div>

      <div className="skills-container">
        {skillsData.map((skills, index) => {
          return (
            <div key={index} className="skills-format">
              <h3>{skills.s_no}</h3>
              <h2>{skills.s_name}</h2>
              <p>{skills.s_desc}</p>

              <div className="skills-readmore">
                <p>Learn More</p>
                <img src={arrow_icon} alt="arrow icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
