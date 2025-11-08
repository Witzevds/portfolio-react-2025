import React from "react";
import "./Hero.css";

const Hero = ({ data }) => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-left">
          <div className="name-wrapper">
            <h1 className="name">{data.name}</h1>
            <div className="green-line"></div>
          </div>
          <p className="title">{data.title}</p>
          <p className="description">{data.description}</p>
          {data.links && data.links.length > 0 && (
            <div className="hero-links">
              {data.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                  title={link.name}
                >
                  <img
                    src={link.image}
                    alt={link.name}
                    className="hero-link-icon"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="hero-right">
          <img src={data.image} alt={data.name} className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
