import React from "react";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import "./Projects.scss";

const Projects = React.forwardRef((props, projectsRef: any) => {
  return (
    <div className="projects-container" ref={projectsRef}>
      <h2 className="section-heading">Projects I’ve worked on</h2>
      <div className="projects-list-wrapper">
        <ProjectCarousel />
      </div>
    </div>
  );
});

export default Projects;
