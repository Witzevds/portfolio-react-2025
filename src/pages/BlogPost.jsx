import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { portfolioData } from "../data/portfolioData";
import "./BlogPost.css";

// Helper om een slug/id te maken van header tekst
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function childrenToString(children) {
  if (Array.isArray(children)) {
    return children
      .map((child) => (typeof child === "string" ? child : ""))
      .join(" ");
  }
  return typeof children === "string" ? children : "";
}

const BlogPost = () => {
  // ...existing code (useParams, useState, useEffect, etc.)...
  // Plaats hier de bestaande hooks en logica

  // ...headerIdMap, toc, blog, content, renderers, etc...

  return (
    <div>
      <div className="blog-post-container">
        {toc && toc.length > 0 && (
          <aside className="blog-toc">
            <div className="toc-title">Inhoud</div>
            <ul>
              {toc
                .filter((h) => h.level === 1 || h.level === 2)
                .map((h, idx) => (
                  <li
                    key={h.id}
                    className={h.level === 1 ? "toc-h1" : "toc-h2"}
                  >
                    <a
                      href={`#${h.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(h.id);
                        if (el) {
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                        window.history.pushState(null, "", `#${h.id}`);
                      }}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
            </ul>
          </aside>
        )}
        <div className="blog-post-content">
          <a href="/" className="back-link">
            ← Back to home
          </a>
          <article className="blog-article">
            <header className="blog-header">
              <h1 className="blog-post-title">{blog && blog.title}</h1>
              <div className="blog-meta">
                <span className="blog-date">{blog && blog.date}</span>
              </div>
              <div className="title-divider"></div>
            </header>
            <div className="blog-body">
              <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
      <div className="featured-video-section">
        <h2>Featured Video</h2>
        <div className="youtube-responsive">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=WbwgyyWzKvA&t=1s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
