import React from "react";
import "./Contact.scss";

const GmailIcon = require("../../../assets/gmail.png");
const LinkedinIcon = require("../../../assets/linkedin.png");

const Contact = React.forwardRef((props, contactRef: any) => {
  return (
    <div className="contact-container" ref={contactRef}>
      <h2 className="section-heading">Contact Me</h2>
      <div className="contact-wrapper">
        I'm excited to connect with you and explore potential collaborations or
        discuss any questions you may have. Please feel free to reach out to me
        using the contact information provided below:
        <div className="links">
          <div className="links-wrapper">
            <img src={GmailIcon} alt=""></img>
            <a href="mailto:vinitamathew2010@gmail.com">
              vinitamathew2010@gmail.com
            </a>
          </div>
          <div className="links-wrapper">
            <img src={LinkedinIcon} alt=""></img>
            <a
              href="https://www.linkedin.com/in/vinita-mathew-6b3255187/"
              target="_blank"
            >
              Vinita Mathew
            </a>
          </div>
        </div>
        <div>
          Whether you have a project in mind, need assistance with front-end
          development, or simply want to connect with a React expert, I am here
          to help. Feel free to contact me using your preferred method, and I
          will get back to you as soon as possible.
        </div>
      </div>
    </div>
  );
});

export default Contact;
