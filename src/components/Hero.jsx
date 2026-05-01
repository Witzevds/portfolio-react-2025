import React from "react";
import "./Hero.css";

const Hero = ({ data }) => {
  return (
    <section className="hero" id="about">
      <div className="hero-grid">
        <div className="hero-left reveal">
          <div className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Available for projects · 2026
          </div>

          <h1 className="hero-name">
            {data.name}
            <span className="accent-period">.</span>
          </h1>

          <div className="hero-tagline">{data.title}</div>

          <p className="hero-description">{data.description}</p>

          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.6 7.4H22l-6 4.5 2.4 7.4L12 16.9l-6.4 4.4L8 13.9l-6-4.5h7.4z" />
            </svg>
            Featured · DrupalCon Vienna 2025 — DriesNote
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View work
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/witze-van-der-straeten-705731193/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Get in touch
            </a>
          </div>

          {data.links && data.links.length > 0 && (
            <div className="hero-links">
              {data.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                  aria-label={link.name}
                  title={link.name}
                >
                  <img
                    src={link.image}
                    alt=""
                    className="hero-link-icon"
                  />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="hero-right reveal">
          <div className="hero-photo-frame">
            <span className="hero-photo-marker tl">[ 01 / Witze ]</span>
            <img src={data.image} alt={data.name} />
            <span className="hero-photo-tag">Witze · Ghent</span>
            <span className="hero-photo-marker br">Web × AI</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">Scroll</div>
    </section>
  );
};

export default Hero;
