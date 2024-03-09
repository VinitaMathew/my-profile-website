import React from "react";
import LandingSection from "./LandingSection/LandingSection";
import Projects from "./Projects/Projects";
import IndustryProjects from "./IndustryProjects/IndustryProjects";
import Skills from "./Skills/Skills";
import "./HomePage.scss";
import WorkExperience from "./WorkExperience/WorkExperience";
import Contact from "./Contact/Contact";

export default function HomePage(props: any) {
  return (
    <div className="home-page">
      <LandingSection
        workClick={props.workClick}
        contactClick={props.contactClick}
      />
      <Projects ref={props.projectRef} />
      <WorkExperience />
      <IndustryProjects />
      <Skills />
      <Contact ref={props.contactRef} />
    </div>
  );
}
