import React from "react";
import "./Lightbox.css";

const Lightbox = ({ src, alt, onClose }) => {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="lightbox-img" />
        <button className="lightbox-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
