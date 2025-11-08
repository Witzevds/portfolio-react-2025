import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { portfolioData } from '../data/portfolioData';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Find the blog data
    const blogData = portfolioData.blogs.find(b => b.slug === slug);
    setBlog(blogData);

    // Load the markdown file
    if (blogData) {
      fetch(`/blogs/${blogData.markdownFile}`)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.error('Error loading blog:', error));
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-content">
          <h1>Blog not found</h1>
          <Link to="/" className="back-link">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-content">
        <Link to="/" className="back-link">← Back to home</Link>
        
        <article className="blog-article">
          <header className="blog-header">
            <h1 className="blog-post-title">{blog.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">{blog.date}</span>
            </div>
            <div className="title-divider"></div>
          </header>
          
          <div className="blog-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
