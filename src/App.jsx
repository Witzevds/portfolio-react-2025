import React from "react";
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

function AppContent() {
  const location = useLocation();
  const isBlogDetail = location.pathname.startsWith("/blog/");
  return (
    <>
      {!isBlogDetail && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
