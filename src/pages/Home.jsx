import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import { portfolioData } from "../data/portfolioData";
import useReveal from "../hooks/useReveal";

const Home = () => {
  useReveal();

  return (
    <div className="app">
      <Hero data={portfolioData.about} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects.slice(0, 3)} />

      <div className="section all-projects-cta reveal">
        <Link to="/projects" className="btn-ghost">
          See all projects
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <Journey journey={portfolioData.journey} />

      <Blog blogs={portfolioData.blogs} />

      <section className="section reveal" id="featured-video">
        <div className="section-eyebrow">Talk · 2025</div>
        <h2 className="section-title">
          On stage<span className="accent">.</span>
        </h2>
        <div className="youtube-responsive">
          <iframe
            src="https://www.youtube.com/embed/WbwgyyWzKvA"
            title="DrupalCon Vienna 2025 — DriesNote feature"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
