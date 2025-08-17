import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
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
          <h1 className="text-4xl font-medium mb-8">
            About
          </h1>
          
          <div className="text-lg leading-relaxed">
            <p className="mb-6">
              This is the personal website of Aabaran Paudel, where I write about design, technology, and the things that interest me. Today we have a simple, clean space to share thoughts and work.
            </p>
            
            <p className="mb-6">
              To learn more about what I do, you can explore the other sections using the menu above. Not a lot of complexity, just a place to document ideas and share them with others who might find them useful.
            </p>
            
            <p className="mb-6">
              I'm a content writer and developer based in Nepal, working on projects that sit at the intersection of technology and human experience. Most of my time is spent building digital products, reading, and exploring new ideas.
            </p>
            
            <p>
              If you're interested in getting in touch, feel free to reach out via email. I enjoy conversations about design, technology, books, and the occasional philosophical tangent.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
