import React from "react";
import "./MyWork.css";
import arrow_icon from "../../assets/arrow_icon.svg";
import youtube_img from "../../assets/youtube_img.png";
import food_img from "../../assets/food_img.png";
import weather_img from "../../assets/weather_img.png";
import university_img from "../../assets/university_img.png";
import travel_img from "../../assets/travel_img.png";

const MyWork = () => {
  const projectData = [
    {
      w_name: "YouTube Clone",
      w_tech: "React | YouTube API | Router",
      w_img: youtube_img,
      live: "https://priya-react-youtube-clone.netlify.app",
      code: "https://github.com/Priya-Arumugam2906/react-youtube-clone",
    },
    {
      w_name: "Food Delivery App",
      w_tech: "React | Context API | Responsive UI",
      w_img: food_img,
      live: "https://priya-food-delivery-app.netlify.app",
      code: "https://github.com/Priya-Arumugam2906/food-delivery-app",
    },
    {
      w_name: "Weather App",
      w_tech: "React | REST API | Dynamic Data",
      w_img: weather_img,
      live: "https://priya-react-weather-app.netlify.app",
      code: "https://github.com/Priya-Arumugam2906/react-weather-app",
    },
    {
      w_name: "University Website",
      w_tech: "HTML | CSS | Responsive Design",
      w_img: university_img,
      live: "https://priya-university-website.netlify.app",
      code: "https://github.com/Priya-Arumugam2906/university-website",
    },
    {
      w_name: "Travel Website",
      w_tech: "HTML | CSS | JavaScript",
      w_img: travel_img,
      live: "https://priya-travel-website.netlify.app",
      code: "https://github.com/Priya-Arumugam2906/travel-website",
    },
  ];

  return (
    <div className="mywork container" id="work">
      <div className="mywork-title">
        <h1>Recent Projects</h1>
        <div className="title-underline"></div>
      </div>

      <div className="mywork-container">
        {projectData.map((work, index) => {
          return (
            <div key={index} className="project-card">
              <img src={work.w_img} alt={work.w_name} />
              <h3>{work.w_name}</h3>
              <p>{work.w_tech}</p>

              <div className="project-links">
                <a href={work.live} target="_blank" rel="noopener noreferrer">
                  Live Preview
                </a>

                <a href={work.code} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mywork-showmore">
        <p>Explore More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
