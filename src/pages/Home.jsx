import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="app">
      <Hero data={portfolioData.about} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects.slice(0, 3)} />
      <div style={{ textAlign: "center", marginTop: 32 }}>
        <Link to="/projects" className="btn">
          More Projects
        </Link>
      </div>
      <Blog blogs={portfolioData.blogs} />
      <div
        className="featured-video-section"
        style={{ marginTop: 40, textAlign: "center" }}
      >
        <h2>Featured Video</h2>
        <div
          className="youtube-responsive"
          style={{ maxWidth: 560, margin: "0 auto" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WbwgyyWzKvA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
