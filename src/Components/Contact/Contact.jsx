import React from "react";
import "./Contact.css";

import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "14beb8a5-f630-4284-bf10-99a1784619ca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Message Sent Successfully");
      event.target.reset();
    }
  };

  return (
    <div className="contact container" id='contact'>

      <div className="contact-title">
        <h1>Let's Connect</h1>
        <div className="title-underline"></div>
      </div>

      <div className="contact-section">

        <div className="contact-left">
          <h1>Let’s Work Together</h1>

          <p>
            I am currently seeking Frontend Developer opportunities where I can apply my skills, contribute to real-world projects, and continue growing as a developer. If you are looking for a dedicated candidate with a solid foundation in modern web technologies, I would be happy to connect.

          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email icon" />
              <p>riyapriya2906@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="phone icon" />
              <p>+91 8754234469</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="location icon" />
              <p> Chennai,Tamiladu</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Email Address</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea name="message" rows="6" placeholder="Tell me about your project or opportunity"></textarea>

          <button type='submit' className="contact-submit">
            Get In Touch
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
