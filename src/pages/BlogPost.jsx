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
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState(null);
  const [toc, setToc] = useState([]);
  const headerIdMap = useRef({});

  useEffect(() => {
    const blogData = portfolioData.blogs.find((b) => b.slug === slug);
    setBlog(blogData);
    if (blogData) {
      fetch(`/blogs/${blogData.markdownFile}`)
        .then((response) => response.text())
        .then((text) => {
          setContent(text);
          // Parse headers (# en ##)
          const lines = text.split("\n");
          let tocHeaders = [];
          lines.forEach((line, idx) => {
            if (line.startsWith("## ")) {
              const raw = line.slice(3).trim();
              const id = slugify(raw + "-" + (idx + 1));
              tocHeaders.push({ level: 2, text: raw, id, line: idx + 1 });
              headerIdMap.current[raw + "-" + (idx + 1)] = id;
            }
          });
          setToc(tocHeaders);
        })
        .catch((error) => console.error("Error loading blog:", error));
    }
    headerIdMap.current = {};
  }, [slug]);

  const renderers = {
    h2: ({ node, ...props }) => {
      const text = childrenToString(props.children);
      const line =
        node &&
        node.position &&
        node.position.start &&
        node.position.start.line;
      const id =
        headerIdMap.current[text + "-" + line] || slugify(text + "-" + line);
      return <h2 id={id}>{props.children}</h2>;
    },
    h3: ({ node, ...props }) => {
      const text = childrenToString(props.children);
      const line =
        node &&
        node.position &&
        node.position.start &&
        node.position.start.line;
      const id =
        headerIdMap.current[text + "-" + line] || slugify(text + "-" + line);
      return <h3 id={id}>{props.children}</h3>;
    },
  };

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
