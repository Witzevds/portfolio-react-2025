import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/" || location.pathname === "/projects";

  return (
    <nav className={`navbar${scrolled ? " is-scrolled" : ""}`}>
      <Link to="/" className="navbar-logo">
        <img src="/images/logo.svg" alt="Witze logo" className="logo-img" />
        <span className="navbar-logo-mark">
          Witze<span className="accent">.</span>
        </span>
      </Link>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className={`navbar-hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        {isHome ? (
          <>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Work</a>
            </li>
            <li>
              <a href="/#blog">Writing</a>
            </li>
          </>
        ) : (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        <li>
          <a href="mailto:witzevds@gmail.com" className="navbar-cta">
            <span className="cta-dot" aria-hidden="true" />
            Get in touch
            <span className="cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
