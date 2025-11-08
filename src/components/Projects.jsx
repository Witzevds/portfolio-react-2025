import React from "react";
import "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">
        Projects
        <div className="title-underline"></div>
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.hasDetailPage && (
                <button className="btn">View Project →</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
