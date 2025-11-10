
import React from "react";
import Projects from "../components/Projects";
import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <div className="section">
      <div style={{ marginBottom: 24 }}>
        <Link to="/" className="back-link">
          ← Back to home
        </Link>
      </div>
      <Projects projects={portfolioData.projects} />
    </div>
  );
};

export default AllProjects;
