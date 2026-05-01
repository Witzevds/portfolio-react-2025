import React from "react";
import "./Skills.css";

const Skills = ({ skills }) => {
  const loop = [...skills, ...skills];

  return (
    <section className="skills-section" aria-label="Skills">
      <div className="skills-eyebrow-row reveal">
        <div className="section-eyebrow">Toolbox</div>
      </div>

      <div className="skills-marquee">
        <div className="skills-track">
          {loop.map((skill, index) => (
            <div className="skill-item" key={`a-${index}`}>
              <img src={skill.image} alt="" className="skill-image" />
              <span className="skill-name">{skill.name}</span>
              <span className="skill-divider" aria-hidden="true" />
            </div>
          ))}
        </div>
        <div className="skills-track" aria-hidden="true">
          {loop.map((skill, index) => (
            <div className="skill-item" key={`b-${index}`}>
              <img src={skill.image} alt="" className="skill-image" />
              <span className="skill-name">{skill.name}</span>
              <span className="skill-divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
