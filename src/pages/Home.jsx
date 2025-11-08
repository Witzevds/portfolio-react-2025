import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import { portfolioData } from '../data/portfolioData';

const Home = () => {
  return (
    <div className="app">
      <Hero data={portfolioData.about} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Blog blogs={portfolioData.blogs} />
    </div>
  );
};

export default Home;
