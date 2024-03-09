import React from "react";
// import TitleIcon from "../../../assets/title-icon.svg";
import "./LandingSection.scss";

// const { ReactComponent } = require("react-svg-loader");
const TitleIcon = require("../../../assets/title-icon.svg").default;

export default function LandingSection(props: any) {
  return (
    <div className="landing-section">
      <div className="heading-container">
        <img className="title-icon" src={TitleIcon} alt=""></img>
        <div className="line1">Hey there! I’m Vinita Mathew.</div>
        <div className="line2">
          I develop websites that are responsive, accessible and efficient.
        </div>
      </div>
      <div className="details-container">
        <div className="detail-buttons">
          <button className="work-button" onClick={props.workClick}>
            View my work
          </button>
          <button className="contact-button" onClick={props.contactClick}>
            Contact
          </button>
        </div>
        <div className="description">
          I'm a React developer who loves to make things look good and work
          well. <b>I'm currently at TCS</b>, but I'm always looking for new
          challenges. If you have a project that needs some front-end love, give
          me a shout!
        </div>
      </div>
    </div>
  );
}
