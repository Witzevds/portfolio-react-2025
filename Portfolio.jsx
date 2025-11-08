import React, { useState } from 'react';

// Sample data - replace with your own data
const portfolioData = {
  about: {
    name: "Witze",
    title: "Web Developer & AI Innovator",
    image: "https://via.placeholder.com/300x300", // Replace with your photo URL
    description: "Web Development & Interactive Media student at Arteveldehogeschool. Specializing in Drupal development and AI integrations. DrupalCon Vienna 2025 speaker with innovative Figma-to-Drupal workflow."
  },
  skills: [
    { name: "Drupal", image: "https://via.placeholder.com/80x80?text=Drupal" },
    { name: "React", image: "https://via.placeholder.com/80x80?text=React" },
    { name: "PHP", image: "https://via.placeholder.com/80x80?text=PHP" },
    { name: "CSS", image: "https://via.placeholder.com/80x80?text=CSS" },
    { name: "JavaScript", image: "https://via.placeholder.com/80x80?text=JS" },
    { name: "AI Integration", image: "https://via.placeholder.com/80x80?text=AI" }
  ],
  projects: [
    {
      id: 1,
      title: "Figma-to-Drupal AI Workflow",
      image: "https://via.placeholder.com/400x250",
      description: "Innovative workflow for automatic conversion of Figma designs to Drupal components using AI.",
      hasDetailPage: true
    },
    {
      id: 2,
      title: "Design Museum Gent Marketing",
      image: "https://via.placeholder.com/400x250",
      description: "Marketing strategy project for Design Museum Gent with focus on digital transformation.",
      hasDetailPage: false
    },
    {
      id: 3,
      title: "Calibrate Internship Project",
      image: "https://via.placeholder.com/400x250",
      description: "AI integration projects during internship at Calibrate with Drupal development.",
      hasDetailPage: true
    }
  ],
  blogs: [
    {
      id: 1,
      title: "Nestlé Skillathon Experience",
      description: "My experience at the Nestlé Skillathon event and the lessons I learned about innovation and collaboration.",
      fullContent: "Full blog content here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "DrupalCon Vienna 2025 Highlights",
      description: "A retrospective on my DrupalCon Vienna experience, where my work was featured during the keynote.",
      fullContent: "Full blog content here... Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      title: "From Development to Product Management",
      description: "My career path and how I'm making the transition from developer to product manager.",
      fullContent: "Full blog content here... Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
};

const Portfolio = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colors = isDarkMode ? {
    bg: '#000000',
    bgSecondary: '#0a0a0a',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    border: '#1a1a1a',
    accent: '#2d5016',
  } : {
    bg: '#ffffff',
    bgSecondary: '#f5f5f5',
    text: '#000000',
    textSecondary: '#666666',
    border: '#e0e0e0',
    accent: '#2d5016',
  };

  return (
    <div style={{...styles.container, backgroundColor: colors.bg, color: colors.text}}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{...styles.themeToggle, backgroundColor: colors.bgSecondary, color: colors.text, borderColor: colors.border}}
          className="theme-toggle"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <div style={styles.heroContent}>
          <div style={styles.heroLeft}>
            <div style={styles.nameWrapper}>
              <h1 style={{...styles.name, color: colors.text}}>{portfolioData.about.name}</h1>
              <div style={{...styles.greenLine, backgroundColor: colors.accent}}></div>
            </div>
            <p style={{...styles.title, color: colors.accent}}>{portfolioData.about.title}</p>
            <p style={{...styles.description, color: colors.textSecondary}}>{portfolioData.about.description}</p>
          </div>
          <div style={styles.heroRight}>
            <img 
              src={portfolioData.about.image} 
              alt={portfolioData.about.name}
              style={{...styles.profileImage, borderColor: colors.border}}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={styles.section}>
        <h2 style={{...styles.sectionTitle, color: colors.text}}>
          Skills
          <div style={{...styles.titleUnderline, backgroundColor: colors.accent}}></div>
        </h2>
        <div style={styles.skillsGrid}>
          {portfolioData.skills.map((skill, index) => (
            <div key={index} style={{...styles.skillCard, backgroundColor: colors.bgSecondary, borderColor: colors.border}} className="skill-card">
              <img 
                src={skill.image} 
                alt={skill.name}
                style={styles.skillImage}
              />
              <p style={{...styles.skillName, color: colors.text}}>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2 style={{...styles.sectionTitle, color: colors.text}}>
          Projects
          <div style={{...styles.titleUnderline, backgroundColor: colors.accent}}></div>
        </h2>
        <div style={styles.projectsGrid}>
          {portfolioData.projects.map((project) => (
            <div key={project.id} style={{...styles.projectCard, backgroundColor: colors.bgSecondary, borderColor: colors.border}} className="project-card">
              <img 
                src={project.image} 
                alt={project.title}
                style={styles.projectImage}
              />
              <div style={styles.projectInfo}>
                <h3 style={{...styles.projectTitle, color: colors.text}}>{project.title}</h3>
                <p style={{...styles.projectDescription, color: colors.textSecondary}}>{project.description}</p>
                {project.hasDetailPage && (
                  <button 
                    style={{...styles.button, color: colors.accent, borderColor: colors.accent}} 
                    className="btn"
                    onClick={() => setSelectedBlog(project)}
                  >
                    View Project →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section style={styles.section}>
        <h2 style={{...styles.sectionTitle, color: colors.text}}>
          Blog
          <div style={{...styles.titleUnderline, backgroundColor: colors.accent}}></div>
        </h2>
        <div style={styles.blogsGrid}>
          {portfolioData.blogs.map((blog) => (
            <div key={blog.id} style={{...styles.blogCard, backgroundColor: colors.bgSecondary, borderColor: colors.border}} className="blog-card">
              <h3 style={{...styles.blogTitle, color: colors.text}}>{blog.title}</h3>
              <p style={{...styles.blogDescription, color: colors.textSecondary}}>{blog.description}</p>
              <button 
                style={{...styles.button, color: colors.accent, borderColor: colors.accent}}
                className="btn"
                onClick={() => setSelectedBlog(blog)}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Blog/Project Modal */}
      {selectedBlog && (
        <div style={styles.modal} onClick={() => setSelectedBlog(null)}>
          <div style={{...styles.modalContent, backgroundColor: colors.bgSecondary, borderColor: colors.border}} onClick={(e) => e.stopPropagation()}>
            <button 
              style={{...styles.closeButton, color: colors.text}}
              onClick={() => setSelectedBlog(null)}
            >
              ✕
            </button>
            <h2 style={{...styles.modalTitle, color: colors.text}}>{selectedBlog.title}</h2>
            <div style={{...styles.modalDivider, backgroundColor: colors.accent}}></div>
            <p style={{...styles.modalText, color: colors.textSecondary}}>{selectedBlog.fullContent || selectedBlog.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: '"Space Grotesk", "Inter", -apple-system, sans-serif',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  
  // Theme Toggle
  themeToggle: {
    position: 'fixed',
    top: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '1px solid',
    fontSize: '1.5rem',
    cursor: 'pointer',
    zIndex: 999,
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Hero Section
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '40px 20px',
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    gap: '80px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  heroLeft: {
    flex: 1,
    minWidth: '320px',
  },
  nameWrapper: {
    position: 'relative',
    marginBottom: '20px',
  },
  name: {
    fontSize: 'clamp(3.5rem, 10vw, 7rem)',
    fontWeight: '700',
    margin: 0,
    letterSpacing: '-0.03em',
    color: '#ffffff',
  },
  greenLine: {
    height: '4px',
    width: '80px',
    backgroundColor: '#2d5016',
    marginTop: '15px',
  },
  title: {
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    color: '#2d5016',
    marginBottom: '25px',
    fontWeight: '500',
  },
  description: {
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    lineHeight: '1.8',
    color: '#a0a0a0',
    maxWidth: '600px',
  },
  heroRight: {
    flex: '0 0 auto',
  },
  profileImage: {
    width: '280px',
    height: '280px',
    borderRadius: '4px',
    objectFit: 'cover',
    border: '2px solid #1a1a1a',
  },
  
  // Section Styles
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 20px',
  },
  sectionTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '700',
    marginBottom: '60px',
    letterSpacing: '-0.02em',
    position: 'relative',
    display: 'inline-block',
  },
  titleUnderline: {
    height: '3px',
    width: '60px',
    backgroundColor: '#2d5016',
    marginTop: '10px',
  },
  
  // Skills Grid
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  },
  skillCard: {
    backgroundColor: '#0a0a0a',
    border: '1px solid #1a1a1a',
    padding: '40px 20px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  skillImage: {
    width: '60px',
    height: '60px',
    marginBottom: '20px',
    objectFit: 'contain',
    opacity: '0.9',
  },
  skillName: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#ffffff',
    margin: 0,
  },
  
  // Projects Grid
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
  },
  projectCard: {
    backgroundColor: '#0a0a0a',
    border: '1px solid #1a1a1a',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
  projectImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    display: 'block',
  },
  projectInfo: {
    padding: '30px',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#ffffff',
  },
  projectDescription: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#a0a0a0',
    marginBottom: '25px',
  },
  
  // Blogs Grid
  blogsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
  },
  blogCard: {
    backgroundColor: '#0a0a0a',
    border: '1px solid #1a1a1a',
    padding: '40px',
    transition: 'all 0.3s ease',
  },
  blogTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#ffffff',
  },
  blogDescription: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#a0a0a0',
    marginBottom: '25px',
  },
  
  // Button
  button: {
    backgroundColor: 'transparent',
    color: '#2d5016',
    border: '1px solid #2d5016',
    padding: '12px 30px',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  },
  
  // Modal
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#0a0a0a',
    border: '1px solid #1a1a1a',
    padding: '60px',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '85vh',
    overflow: 'auto',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#ffffff',
    transition: 'color 0.3s ease',
    padding: '5px 10px',
  },
  modalTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  modalDivider: {
    height: '2px',
    width: '60px',
    backgroundColor: '#2d5016',
    marginBottom: '30px',
  },
  modalText: {
    fontSize: '1.1rem',
    lineHeight: '1.9',
    color: '#a0a0a0',
  },
};

// Add Google Font and hover effects
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #0a0a0a;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #2d5016;
  }
  
  .theme-toggle:hover {
    transform: rotate(180deg) scale(1.1);
  }
  
  .skill-card:hover {
    border-color: #2d5016 !important;
    transform: translateY(-4px);
  }
  
  .project-card:hover {
    border-color: #2d5016 !important;
    transform: translateY(-4px);
  }
  
  .blog-card:hover {
    border-color: #2d5016 !important;
    transform: translateY(-4px);
  }
  
  .btn:hover {
    background-color: #2d5016 !important;
    color: #ffffff !important;
  }
  
  @media (max-width: 768px) {
    .hero-content {
      text-align: center;
    }
    
    .modal-content {
      padding: 40px 30px;
    }
    
    .theme-toggle {
      top: 20px;
      right: 20px;
      width: 45px;
      height: 45px;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Portfolio;
