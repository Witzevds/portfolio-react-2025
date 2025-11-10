import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div
        className={`navbar-hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {!(location.pathname.startsWith("/project/") || location.pathname.startsWith("/blog/")) && (
        <ul
          className={`navbar-links${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projecten</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
