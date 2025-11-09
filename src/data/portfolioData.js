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
