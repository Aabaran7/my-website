import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Projects = () => {
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
          marginBottom: '1rem',
          marginTop: 0
        }}>
          Projects
        </h1>
        
        <p style={{
          color: 'var(--muted)',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '3rem'
        }}>
          A selection of recent work. Each project represents an opportunity to solve problems through design and technology, always with an eye toward creating something genuinely useful.
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Project entries */}
          <div style={{
            borderBottom: '1px solid var(--border)',
            paddingBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'var(--font-weight-medium)',
                margin: 0
              }}>
                Project One
              </h3>
              <span style={{
                color: 'var(--muted)',
                fontSize: '0.9rem'
              }}>
                2024
              </span>
            </div>
            <p style={{
              margin: 0
            }}>
              A web application focused on simplifying complex workflows. Built with React and TypeScript, designed with accessibility and performance in mind.
            </p>
          </div>
          
          <div style={{
            borderBottom: '1px solid var(--border)',
            paddingBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'var(--font-weight-medium)',
                margin: 0
              }}>
                Design System Work
              </h3>
              <span style={{
                color: 'var(--muted)',
                fontSize: '0.9rem'
              }}>
                2023-2024
              </span>
            </div>
            <p style={{
              margin: 0
            }}>
              Comprehensive design system development for a growing startup. Includes component library, documentation, and implementation guidelines.
            </p>
          </div>
          
          <div style={{
            paddingBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'var(--font-weight-medium)',
                margin: 0
              }}>
                Mobile App
              </h3>
              <span style={{
                color: 'var(--muted)',
                fontSize: '0.9rem'
              }}>
                2023
              </span>
            </div>
            <p style={{
              margin: 0
            }}>
              Cross-platform application for habit tracking and personal productivity. Focus on minimal interface and meaningful interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
