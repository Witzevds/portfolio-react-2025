import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = ({ projects, startIndex = 0 }) => {
  return (
    <section className="section" id="projects">
      <div className="reveal">
        <div className="section-eyebrow">Selected work</div>
        <h2 className="section-title">
          Projects<span className="accent">.</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => {
          const number = String(startIndex + idx + 1).padStart(2, "0");
          return (
            <article className="project-card reveal" key={project.id}>
              <div className="project-image-wrap">
                <span className="project-num">{number} / Case</span>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-meta">
                {project.skills && project.skills.length > 0 && (
                  <div className="project-tags">
                    {project.skills.slice(0, 4).map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  {project.hasDetailPage && (
                    <Link
                      to={`/project/${project.id}`}
                      className="project-link"
                    >
                      Read case study
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-live"
                    >
                      Visit live site
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
