import React from "react";
import { useParams, Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects.find(
    (p) => String(p.id) === String(id)
  );

  if (!project) {
    return (
      <div className="project-detail-container">
        <h1>Project not found</h1>
        <Link to="/">← Back to home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <Link to="/" className="back-link">
        ← Back to home
      </Link>
      <div className="project-main-info">
        <img
          src={project.image}
          alt={project.title}
          className="project-main-image"
        />
        <div className="project-main-text">
          <h1>{project.title}</h1>
          <p>{project.longDescription || project.description}</p>
          <div className="project-skills">
            <h3>Skills learned</h3>
            <ul>
              {project.skills &&
                project.skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
      {project.images && project.images.length > 0 && (
        <div className="project-carousel">
          <h3>Project Gallery</h3>
          <Carousel
            showThumbs={true}
            infiniteLoop={true}
            showStatus={false}
            useKeyboardArrows={true}
            dynamicHeight={false}
          >
            {project.images.map((img, idx) => (
              <div key={idx}>
                <img src={img} alt={`Project ${project.title} ${idx + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
