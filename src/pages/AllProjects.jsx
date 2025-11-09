import React from "react";
import Projects from "../components/Projects";
import { portfolioData } from "../data/portfolioData";

const AllProjects = () => {
  return (
    <div className="section">
      <Projects projects={portfolioData.projects} />
    </div>
  );
};

export default AllProjects;
