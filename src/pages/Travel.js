import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Travels = () => {
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
          Travel Blog
        </h1>
        
        <p style={{
          color: 'var(--muted)',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '3rem'
        }}>
          My adventures around the world...
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Travel entries */}
          <article style={{
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
                Trip to [Destination]
              </h3>
              <span style={{
                color: 'var(--muted)',
                fontSize: '0.9rem'
              }}>
                [Date]
              </span>
            </div>
            <p style={{
              margin: 0
            }}>
              Your travel story here... Share the highlights, experiences, and memories from this amazing journey.
            </p>
          </article>
          
          <article style={{
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
                Another Adventure
              </h3>
              <span style={{
                color: 'var(--muted)',
                fontSize: '0.9rem'
              }}>
                [Date]
              </span>
            </div>
            <p style={{
              margin: 0
            }}>
              Another travel story... Document the culture, people, and places that made this trip unforgettable.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Travels;
