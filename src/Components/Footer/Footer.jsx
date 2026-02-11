import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer container">

      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-logo">Priya</h2>
          <p>
            Frontend Developer focused on building responsive and user-friendly web experiences.
          </p>
        </div>
        <div className="footer-right">
          <a href="https://github.com/Priya-Arumugam2906" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/priya-frontend-developer" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="/Priya-Frontend-Developer-Resume.pdf" download>
            Download Resume
          </a>
        </div>

      </div>
      <div className="footer-bottom-center">
        © {new Date().getFullYear()} Priya. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
