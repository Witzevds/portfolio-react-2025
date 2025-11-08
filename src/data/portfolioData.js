export const portfolioData = {
  about: {
    name: "Witze",
    title: "Web Developer & AI Innovator",
    image: "/images/hero-profile.png", // Nieuwe profielfoto
    description:
      "Web Development & Interactive Media student at Arteveldehogeschool. Specializing in Drupal development and AI integrations. DrupalCon Vienna 2025 speaker with innovative Figma-to-Drupal workflow.",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/witze-van-der-straeten-705731193/",
        image: "/images/linkedin.svg",
      },
      // Voeg hier makkelijk nieuwe links toe
    ],
  },
  skills: [
    { name: "Drupal", image: "https://via.placeholder.com/80x80?text=Drupal" },
    { name: "React", image: "https://via.placeholder.com/80x80?text=React" },
    { name: "PHP", image: "https://via.placeholder.com/80x80?text=PHP" },
    { name: "CSS", image: "https://via.placeholder.com/80x80?text=CSS" },
    { name: "JavaScript", image: "https://via.placeholder.com/80x80?text=JS" },
    {
      name: "AI Integration",
      image: "https://via.placeholder.com/80x80?text=AI",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Figma-to-Drupal AI Workflow",
      image: "https://via.placeholder.com/400x250",
      description:
        "Innovative workflow for automatic conversion of Figma designs to Drupal components using AI.",
      hasDetailPage: true,
    },
    {
      id: 2,
      title: "Design Museum Gent Marketing",
      image: "https://via.placeholder.com/400x250",
      description:
        "Marketing strategy project for Design Museum Gent with focus on digital transformation.",
      hasDetailPage: false,
    },
    {
      id: 3,
      title: "Calibrate Internship Project",
      image: "https://via.placeholder.com/400x250",
      description:
        "AI integration projects during internship at Calibrate with Drupal development.",
      hasDetailPage: true,
    },
  ],
  blogs: [
    {
      id: 1,
      slug: "nestle-skillathon-experience",
      title: "Nestlé Skillathon Experience",
      description:
        "My experience at the Nestlé Skillathon event and the lessons I learned about innovation and collaboration.",
      date: "November 2025",
      markdownFile: "nestle-skillathon-experience.md",
    },
    {
      id: 2,
      slug: "drupalcon-vienna-2025",
      title: "DrupalCon Vienna 2025 Highlights",
      description:
        "A retrospective on my DrupalCon Vienna experience, where my work was featured during the keynote.",
      date: "October 2025",
      markdownFile: "drupalcon-vienna-2025.md",
    },
    {
      id: 3,
      slug: "development-to-product-management",
      title: "From Development to Product Management",
      description:
        "My career path and how I'm making the transition from developer to product manager.",
      date: "September 2025",
      markdownFile: "development-to-product-management.md",
    },
  ],
};
