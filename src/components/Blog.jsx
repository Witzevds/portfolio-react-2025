import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = ({ blogs }) => {
  return (
    <section className="section" id="blog">
      <div className="reveal">
        <div className="section-eyebrow">Field notes</div>
        <h2 className="section-title">
          Writing<span className="accent">.</span>
        </h2>
      </div>
      <div className="blogs-grid">
        {blogs.map((blog, idx) => (
          <Link
            to={`/blog/${blog.slug}`}
            key={blog.id}
            className="blog-card reveal"
          >
            <div className="blog-card-meta">
              <span className="blog-date">{blog.date}</span>
              <span>{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="blog-card-title">{blog.title}</h3>
            <p className="blog-card-description">{blog.description}</p>
            <span className="blog-card-link">
              Read article
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
