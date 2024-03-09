import React from "react";
import "./WorkExperience.scss";
import { calculateExperience } from "../../../utils";

export default function WorkExperience() {
  return (
    <div className="work-container">
      <h2 className="section-heading">Work Experience</h2>
      <div className="work-wrapper">
        <div className="work-heading-section">
          <h4>
            <b>Front End Developer at Tata Consultancy Services</b>
          </h4>
          <span>September 2020 — Present ({calculateExperience()} years)</span>
        </div>
        <div>
          With more than three years of experience as a Front-End React
          Developer at TCS, I have excelled in delivering high-quality code with
          consistent 100% CSI and collaborating effectively with
          cross-functional teams.{" "}
        </div>
        <h4>
          <b>Key highlights of my experience include:</b>
        </h4>
        <ul>
          <li>
            React Expertise: Proficient in React.js, I developed and maintained
            complex web applications using its component-based architecture and
            state management capabilities.
          </li>
          <li>
            Project Management: I actively participated in the software
            development lifecycle, collaborating with UI/UX designers, back-end
            developers, and stakeholders to create pixel-perfect user
            interfaces.
          </li>
          <li>
            Cross-Functional Collaboration: Skilled in working with diverse
            teams, I ensured seamless integration between front-end components
            and back-end infrastructure, communicating technical concepts
            effectively.
          </li>
          <li>
            Performance Optimization: I prioritized performance by implementing
            techniques like code splitting, lazy loading, and caching, resulting
            in faster application loading times and improved user experiences.
          </li>
          <li>
            Responsive Design and Mobile Development: I created responsive web
            applications adaptable to different devices and also utilized React
            Native to build hybrid mobile applications.
          </li>
          <li>
            Continuous Improvement: Committed to professional growth, I stayed
            updated with industry trends, integrating new tools and frameworks
            to enhance productivity and code quality.
          </li>
        </ul>
      </div>
    </div>
  );
}
