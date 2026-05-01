import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import ProjectDetail from "./pages/ProjectDetail";
import AllProjects from "./pages/AllProjects";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 2,
        background: "transparent",
        zIndex: 200,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          background: "var(--accent)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
