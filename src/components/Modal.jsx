import React from 'react';
import './Modal.css';

const Modal = ({ blog, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <h2 className="modal-title">{blog.title}</h2>
        <div className="modal-divider"></div>
        <p className="modal-text">{blog.fullContent}</p>
      </div>
    </div>
  );
};

export default Modal;
