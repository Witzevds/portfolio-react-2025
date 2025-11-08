import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Navbar from "./components/Navbar";
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
      </Routes>
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
