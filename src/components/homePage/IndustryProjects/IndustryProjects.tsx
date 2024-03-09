import React, { useState } from "react";
import { IndustryProjectsData } from "./IndustryProjectsData";
import IndustryProjectsPopUp from "./IndustryProjectsPopUp/IndustryProjectsPopUp";
import "./IndustryProjects.scss";

const arrowImg = require("../../../assets/arrow-right-black.png");

export default function IndustryProjects() {
  const [modalProps, setModalProps] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setModalProps({
      body: (
        <div
          className="popup-content"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      ),
      handleCancelBtnClick: () => setIsPopupOpen(false),
    });
    setIsPopupOpen(true);
  };

  return (
    <div className="industry-projects-container">
      <h2 className="section-heading">
        Projects under Non-Disclosure Agreement
      </h2>
      <ul className="industry-projects-list">
        {IndustryProjectsData.map((project, index) => {
          return (
            <li
              key={index}
              className="project-item"
              onClick={() => handleProjectClick(project)}
            >
              <img alt="" src={project.image} className="project-thumbnail" />
              <div className="content-wrapper">
                <div className="title">{project.title}</div>
                <button className="project-button">
                  <img alt="open project details" src={arrowImg}></img>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <IndustryProjectsPopUp isModalOpened={isPopupOpen} {...modalProps} />
    </div>
  );
}
