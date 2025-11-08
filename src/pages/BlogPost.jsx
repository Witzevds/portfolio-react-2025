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

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState(null);
  const [toc, setToc] = useState([]);
  const headerIdMap = useRef({});
  // Scroll naar anchor als er een hash is
  useEffect(() => {
    if (location.hash) {
      // Timeout zodat de DOM klaar is
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [location, content]);

  useEffect(() => {
    const blogData = portfolioData.blogs.find((b) => b.slug === slug);
    setBlog(blogData);
    if (blogData) {
      fetch(`/blogs/${blogData.markdownFile}`)
        .then((response) => response.text())
        .then((text) => {
          setContent(text);
          // Parse headers (## en ###)
          const lines = text.split("\n");
          let tocHeaders = [];
          let headerCounts = {};
          lines.forEach((line, idx) => {
            const match = line.match(/^(#{2,3})\s+(.*)/);
            if (match) {
              const level = match[1].length;
              const raw = match[2].trim();
              const baseId = raw
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
              headerCounts[baseId] = (headerCounts[baseId] || 0) + 1;
              const id =
                headerCounts[baseId] > 1
                  ? `${baseId}-${headerCounts[baseId]}`
                  : baseId;
              tocHeaders.push({ level, text: raw, id });
              headerIdMap.current[raw + idx] = id;
            }
          });
          setToc(tocHeaders);
        })
        .catch((error) => console.error("Error loading blog:", error));
    }
    headerIdMap.current = {};
  }, [slug]);

  if (!blog) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-content">
          <h1>Blog not found</h1>
          <a href="/" className="back-link">
            ← Back to home
          </a>
        </div>
      </div>
    );
  }

  // Geen custom renderers meer nodig, react-markdown-toc regelt id's

  // Custom renderer: voeg unieke id's toe aan headers
  let headerIndex = 0;
  function slugify(text) {
    return text
      .toString()
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
  const renderers = {
    h2: ({ node, ...props }) => {
      const text = childrenToString(props.children);
      const id = headerIdMap.current[text + headerIndex] || slugify(text);
      headerIndex++;
      return <h2 id={id}>{props.children}</h2>;
    },
    h3: ({ node, ...props }) => {
      const text = childrenToString(props.children);
      const id = headerIdMap.current[text + headerIndex] || slugify(text);
      headerIndex++;
      return <h3 id={id}>{props.children}</h3>;
    },
  };

  return (
    <div className="blog-post-container">
      {toc.length > 0 && (
        <aside className="blog-toc">
          <div className="toc-title">Inhoud</div>
          <ul>
            {toc.map((h, idx) => (
              <li key={h.id} className={h.level === 2 ? "toc-h2" : "toc-h3"}>
                <a
                  href={`#${h.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(h.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <h1 className="blog-post-title">{blog.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">{blog.date}</span>
            </div>
            <div className="title-divider"></div>
          </header>
          <div className="blog-body">
            <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
