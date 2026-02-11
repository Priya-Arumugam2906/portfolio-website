import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div className="hero container" id="home">
      <div className="hero-badge">Open to Opportunities</div>

      <img src={profile_img} alt="Priya - Frontend Developer" />

      <h1>
        I'm <span>Priya</span>, a Frontend Developer
      </h1>

      <p>
        B.Tech IT graduate with hands-on experience in React, JavaScript, HTML,
        and CSS. I enjoy transforming ideas into functional digital experiences
        and continuously improving my development skills. Currently seeking an
        opportunity to begin my career as a frontend developer.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>

        <a href="/Priya-Frontend-Developer-Resume.pdf" target="_blank" className="hero-resume">
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
