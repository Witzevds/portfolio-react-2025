import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Witze van der Straeten</span>
        <span className="footer-divider">|</span>
        <a
          href="https://www.linkedin.com/in/witze-van-der-straeten-705731193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
