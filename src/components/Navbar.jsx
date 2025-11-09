import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" className="logo-img" />
        </Link>
      </div>
      <ul className="navbar-links">
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
    </nav>
  );
};

export default Navbar;
