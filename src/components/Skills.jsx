import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  return (
    <section className="section">
      <h2 className="section-title">
        Skills
        <div className="title-underline"></div>
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img 
              src={skill.image} 
              alt={skill.name}
              className="skill-image"
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
