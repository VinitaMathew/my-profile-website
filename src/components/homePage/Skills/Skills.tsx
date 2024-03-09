import React from "react";
import { skillsData } from "./SkillsData";
import "./Skills.scss";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="section-heading">Skills and Services</h2>
        <ul className="skills-wrapper">
            {skillsData.map((skill,index)=>{
                return (
                  <li key={index} className="skill-item">
                    <img src={skill.image} alt="" className="image"/>
                    <div className="title">{skill.title}</div>
                  </li>
                );
            })}
        </ul>
    </div>
  );
}
