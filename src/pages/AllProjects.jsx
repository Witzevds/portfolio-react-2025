import React from "react";
import { Link } from "react-router-dom";
import Projects from "../components/Projects";
import { portfolioData } from "../data/portfolioData";
import useReveal from "../hooks/useReveal";

const AllProjects = () => {
  useReveal();

  return (
    <div className="app">
      <div className="section">
        <div className="reveal" style={{ marginTop: 60, marginBottom: 24 }}>
          <Link to="/" className="back-link">
            ← Back to home
          </Link>
        </div>
        <Projects projects={portfolioData.projects} />
      </div>
    </div>
  );
};

export default AllProjects;
