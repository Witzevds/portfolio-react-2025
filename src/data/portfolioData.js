export const portfolioData = {
  about: {
    name: "Witze",
    title: "Web Developer & AI Innovator",
    image: "/images/hero-profile.png",
    description:
      "Web Development & Interactive Media student at Arteveldehogeschool. Specializing in Drupal development and AI integrations. DrupalCon Vienna 2025 speaker with innovative Figma-to-Drupal workflow.",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/witze-van-der-straeten-705731193/",
        image: "/images/linkedin.svg",
      },
    ],
  },
  skills: [
    { name: "Drupal", image: "/icons/drupal.svg" },
    { name: "React", image: "/icons/react.svg" },
    { name: "CSS", image: "/icons/css.svg" },
    { name: "JavaScript", image: "/icons/js.svg" },
    { name: "Ai", image: "/icons/ai.svg" },
    { name: "CraftCMS", image: "/icons/craft.svg" },
    { name: "Laravel", image: "/icons/laravel.svg" },
  ],
  projects: [
    {
      id: 1,
      title: "CraftCMS Website for Sint-Coleta",
      image: "/images/projects/sint-coleta/1.png",
      description:
        "A modern, modular website for a fictional organization, built with CraftCMS and a custom design system.",
      longDescription:
        "This project is a complete CraftCMS website featuring dynamic pages, custom content types, and a consistent visual style. I learned about CraftCMS templating, Twig, content modeling, responsive CSS, design tokens, and how to bridge design and development workflows.",
      skills: [
        "CraftCMS",
        "Twig",
        "Responsive CSS",
        "Design tokens",
        "Git",
        "Database management",
        "DDEV",
      ],
      images: [
        "/images/projects/sint-coleta/2.png",
        "/images/projects/sint-coleta/3.png",
        "/images/projects/sint-coleta/4.png",
        "/images/projects/sint-coleta/5.png",
        "/images/projects/sint-coleta/6.png",
      ],
      hasDetailPage: true,
    },
    {
      id: 2,
      title: "Gentse Luht – Data Visualisatie & API",
      image: "/images/projects/gentse-luht/2.png",
      description:
        "A playful React web app that 'sells' bottled Gentse lucht to raise awareness about air pollution, using real-time API data and creative data visualizations.",
      longDescription:
        "For this assignment, I wanted to combine humor and awareness. I built a webshop that pretends to sell bottled air from Ghent ('luht' in the local accent) to highlight how polluted our air really is. The site fetches live air quality data (AQI) from an external API, compares cities, and visualizes pollution with interactive graphics. I learned to work with React, Vite, APIs, and data visualization libraries, and how to turn a serious topic into something engaging and memorable.",
      skills: [
        "React",
        "Vite",
        "API integratie",
        "Data visualisatie",
        "p5.js",
        "A-Frame",
        "CSS",
        "Creatief concept",
      ],
      images: [
        "/images/projects/gentse-luht/1.png",
        "/images/projects/gentse-luht/3.png",
        "/images/projects/gentse-luht/4.png",
        "/images/projects/gentse-luht/5.png",
        "/images/projects/gentse-luht/6.png",
        "/images/projects/gentse-luht/7.png",
      ],
      hasDetailPage: true,
    },
    {
      id: 3,
      title: "Blackout News",
      image: "/images/projects/blackout-news/1.png",
      description:
        "A moody React news website inspired by the film Nightcrawler, featuring a dark aesthetic and English content. The app fetches real news articles via an API and allows users to search, filter, and bookmark stories.",
      longDescription:
        "For this assignment, I wanted to create a unique and atmospheric news experience. Inspired by the film Nightcrawler, the site uses a dark, cinematic design to immerse users in the world of late-night journalism. The app is built with React and Vite, and fetches real news data from an external API. Users can search for articles, filter by category, and bookmark their favorite stories. I learned how to work with React components, state management, API integration, and custom styling to create a memorable and interactive web app.",
      skills: [
        "React",
        "Vite",
        "CSS",
        "Dark UI design",
        "Component-based architecture",
        "State management",
      ],
      images: [
        "/images/projects/blackout-news/2.png",
        "/images/projects/blackout-news/3.png",
        "/images/projects/blackout-news/4.png",
        "/images/projects/blackout-news/5.png",
        "/images/projects/blackout-news/6.png",
        "/images/projects/blackout-news/7.png",
      ],
      hasDetailPage: true,
    },
  ],
  blogs: [
    {
      id: 9,
      slug: "figma-to-drupal-sdc",
      title: "Generating Drupal Components with Figma and AI",
      description:
        "How to automatically convert Figma components into working Drupal UI Patterns using Copilot and MCP.",
      date: "June 2025",
      markdownFile: "figma-to-drupal-sdc.md",
    },
    {
      id: 5,
      slug: "nestle-skillathon-day-1-reflection",
      title: "Day 1: The Power of Marketing, Innovation & Entrepreneurship",
      description:
        "A reflection on building culture brands in an era where being heard meaningfully has never been harder.",
      date: "November 2025",
      markdownFile: "nestle-skillathon-day-1.md",
    },
    {
      id: 6,
      slug: "nestle-skillathon-day-2",
      title: "Day 2: AI Won't Steal Your Job (But Someone Using AI Might)",
      description:
        "Digital Innovation, Data Strategy, and Why Being Human Still Matters at Nestlé.",
      date: "November 2025",
      markdownFile: "nestle-skillathon-day-2.md",
    },
    {
      id: 7,
      slug: "nestle-skillathon-day-3",
      title:
        "Day 3: The Power of YOU (And Why Your Mental Health Matters More Than Your LinkedIn)",
      description:
        "Job market reality checks, LinkedIn mastery, and learning that it's okay to not be okay.",
      date: "November 2025",
      markdownFile: "nestle-skillathon-day-3.md",
    },
    {
      id: 8,
      slug: "nestle-skillathon-day-4",
      title: "Day 4: Green Skills and Why Saving the Planet Is Actually a Job",
      description:
        "Climate change, regenerative agriculture, and why the best sustainability careers don't have 'sustainability' in the title.",
      date: "November 2025",
      markdownFile: "nestle-skillathon-day-4.md",
    },
  ],
};
