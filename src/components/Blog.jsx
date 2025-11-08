import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({ blogs }) => {
  return (
    <section className="section">
      <h2 className="section-title">
        Blog
        <div className="title-underline"></div>
      </h2>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-date">{blog.date}</div>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
            <Link to={`/blog/${blog.slug}`} className="btn">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
