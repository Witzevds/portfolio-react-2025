import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { portfolioData } from "../data/portfolioData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectDetail.css";
import useReveal from "../hooks/useReveal";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects.find(
    (p) => String(p.id) === String(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useReveal();

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project not found</h1>
        <Link to="/" className="back-link">
          ← Back to home
        </Link>
      </div>
    );
  }

  const prose = project.longDescription || project.description;

  return (
    <div className="app project-detail">
      <div className="project-detail-back">
        <Link to="/" className="back-link reveal">
          ← Back to home
        </Link>
      </div>

      <header className="project-hero reveal">
        <span className="project-hero-eyebrow">Case study</span>
        <h1 className="project-hero-title">{project.title}</h1>
        <p className="project-hero-summary">{project.description}</p>
        <div className="project-facts">
          <div className="project-fact">
            <span className="project-fact-label">Role</span>
            <span className="project-fact-value">Design × Development</span>
          </div>
          <div className="project-fact">
            <span className="project-fact-label">Stack</span>
            <span className="project-fact-value">
              {project.skills && project.skills.slice(0, 2).join(" · ")}
            </span>
          </div>
          <div className="project-fact">
            <span className="project-fact-label">Status</span>
            <span className="project-fact-value">
              {project.liveUrl ? "Live" : "Shipped"}
            </span>
          </div>
          {project.liveUrl && (
            <div className="project-fact">
              <span className="project-fact-label">Visit</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-fact-link"
              >
                {project.liveUrl
                  .replace(/^https?:\/\//, "")
                  .replace(/\/$/, "")}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
      </header>

      <div className="project-cover reveal">
        <img
          src={project.image}
          alt={project.title}
          className="project-cover-img"
        />
      </div>

      <div className="project-body">
        <div className="project-body-prose reveal">
          <ReactMarkdown>{prose}</ReactMarkdown>
        </div>

        <aside className="project-side">
          {(project.liveUrl || project.repoUrl) && (
            <div className="project-side-block reveal">
              <div className="project-side-label">Links</div>
              <div className="project-side-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-side-link is-primary"
                  >
                    <span className="project-side-link-label">
                      Live site
                      <span className="project-side-link-host">
                        {project.liveUrl
                          .replace(/^https?:\/\//, "")
                          .replace(/\/$/, "")}
                      </span>
                    </span>
                    <span className="project-side-link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-side-link"
                  >
                    <span className="project-side-link-label">
                      Source code
                      <span className="project-side-link-host">
                        {project.repoUrl
                          .replace(/^https?:\/\/(www\.)?/, "")
                          .replace(/\/$/, "")}
                      </span>
                    </span>
                    <span className="project-side-link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </div>
          )}

          {project.skills && project.skills.length > 0 && (
            <div className="project-side-block reveal">
              <div className="project-side-label">Tech & skills</div>
              <ul className="project-skills-list">
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="project-side-block reveal">
            <div className="project-side-label">Next up</div>
            <Link to="/projects" className="back-link" style={{ color: "var(--accent)" }}>
              All projects →
            </Link>
          </div>
        </aside>
      </div>

      {project.images && project.images.length > 0 && (
        <div className="project-gallery reveal">
          <h3>Project gallery</h3>
          <Carousel
            showThumbs={true}
            infiniteLoop={true}
            showStatus={false}
            useKeyboardArrows={true}
            dynamicHeight={false}
          >
            {project.images.map((img, idx) => (
              <div key={idx}>
                <img src={img} alt={`${project.title} ${idx + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
