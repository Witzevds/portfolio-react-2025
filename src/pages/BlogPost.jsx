import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { portfolioData } from "../data/portfolioData";
import "./BlogPost.css";

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

function getReadingTime(text) {
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  return Math.max(1, Math.round(words / 200));
}

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const headerIdMap = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const blogData = portfolioData.blogs.find((b) => b.slug === slug);
    setBlog(blogData);
    if (!blogData) return;

    fetch(`/blogs/${blogData.markdownFile}`)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
        const lines = text.split("\n");
        const tocHeaders = [];
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
  }, [slug]);

  // Scroll-spy: track which heading the reader is currently under
  useEffect(() => {
    if (!toc.length) return;

    const onScroll = () => {
      const offset = 140; // sticky navbar height + breathing room
      let current = toc[0].id;
      for (const h of toc) {
        const el = document.getElementById(h.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset < 0) current = h.id;
        else break;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc, content]);

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

  const readingTime = getReadingTime(content);

  return (
    <div className="app blog-post">
      <div className="blog-post-container">
        {toc && toc.length > 0 && (
          <aside className="blog-toc" aria-label="Table of contents">
            <div className="toc-title">On this page</div>
            <ul>
              {toc.map((h) => (
                <li
                  key={h.id}
                  className={activeId === h.id ? "is-active" : ""}
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
          <Link to="/" className="back-link" style={{ marginBottom: 32, display: "inline-flex" }}>
            ← Back to home
          </Link>
          <article className="blog-article">
            <header className="blog-header">
              <div className="blog-header-eyebrow">Field notes</div>
              <h1 className="blog-post-title">{blog && blog.title}</h1>
              <div className="blog-meta">
                <span className="blog-date">{blog && blog.date}</span>
                <span>{readingTime} min read</span>
              </div>
            </header>
            <div className="blog-body">
              <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
