
import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div className="about container" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <div className="title-underline"></div>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Priya professional portrait" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Frontend Developer starting my career with a B.Tech in
              Information Technology and a strong interest in modern web
              technologies. Prior to this transition, I gained over six years of
              professional experience in a structured work environment,
              strengthening my analytical thinking and problem-solving
              abilities.
            </p>

            <p>
              I have built a solid foundation in React, JavaScript, HTML, and
              CSS through hands-on projects, with a focus on responsive design
              and clean user interfaces. I am eager to begin my career in
              frontend development, contribute to meaningful projects, and
              continue growing as a developer.
            </p>

            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "95%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript (ES6+)</p>
                <hr style={{ width: "85%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>Bootstrap & APIs</p>
                <hr style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>B.Tech</h1>
          <p>Information Technology</p>
        </div>

        <div className="about-achievement">
          <h1>Certified</h1>
          <p>Frontend Development</p>
        </div>

        <div className="about-achievement">
          <h1>6+ Years</h1>
          <p>Work Experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
