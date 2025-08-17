import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [showNav, setShowNav] = useState(false);
  
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Header line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      {/* Hamburger menu */}
      <div 
        className="absolute top-5 right-5 cursor-pointer text-lg text-foreground z-50"
        onClick={toggleNav}
      >
        ☰
      </div>
      
      {/* Navigation */}
      {showNav && <Navbar onClose={() => setShowNav(false)} />}
      
      {/* Main content */}
      <div className="max-w-2xl mx-auto px-10 py-20">
        <h1 className="text-4xl font-medium mb-4">
          Projects
        </h1>
        
        <p className="text-base text-muted leading-relaxed mb-12">
          A selection of recent work. Each project represents an opportunity to solve problems through design and technology, always with an eye toward creating something genuinely useful.
        </p>
        
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              showBorder={index < projects.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
