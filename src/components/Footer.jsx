import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-cta reveal">
        <span className="footer-cta-eyebrow">Let's build something</span>
        <h2 className="footer-cta-title">
          Got an idea<span className="accent">?</span>
          <br /> Let's make it real.
        </h2>
        <a
          href="https://www.linkedin.com/in/witze-van-der-straeten-705731193/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-cta-link"
        >
          Reach out on LinkedIn
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {year} · Witze van der Straeten</span>
        <div className="footer-bottom-links">
          <a
            href="https://www.linkedin.com/in/witze-van-der-straeten-705731193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:witzevds@gmail.com">Email</a>
          <span>Built with React · Vite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
