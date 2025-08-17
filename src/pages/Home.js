import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';

const Home = () => {
    const [showNav, setShowNav] = useState(false);
  
    const toggleNav = () => {
      setShowNav(!showNav);
    };
  
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        position: 'relative'
      }}>
        {/* Header line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: 'var(--border)'
        }} />
        
        {/* Hamburger menu */}
        <div 
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            cursor: 'pointer',
            fontSize: '18px',
            color: 'var(--foreground)',
            zIndex: 1001
          }}
          onClick={toggleNav}
        >
          ☰
        </div>
        
        {/* Theme toggle */}
        <ThemeToggle />
        
        {/* Navigation */}
        {showNav && <Navbar onClose={() => setShowNav(false)} />}
        
        {/* Main content */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '80px 40px 40px 40px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'var(--font-weight-medium)',
            marginBottom: '2rem',
            marginTop: 0
          }}>
            About
          </h1>
          
          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.7'
          }}>
            <p>
              This is the personal website of Aabaran Paudel, where I write about design, technology, and the things that interest me. Today we have a simple, clean space to share thoughts and work.
            </p>
            
            <p>
              To learn more about what I do, you can explore the other sections using the menu above. Not a lot of complexity, just a place to document ideas and share them with others who might find them useful.
            </p>
            
            <p>
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
