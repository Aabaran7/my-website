import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Books = () => {
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
          marginBottom: '3rem',
          marginTop: 0
        }}>
          Books
        </h1>
        
        {/* 2025 Section */}
        <div style={{
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'var(--font-weight-medium)',
            marginBottom: '1.5rem',
            marginTop: 0
          }}>
            2025
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>War & Peace</span>
              <div style={{
                flex: 1,
                borderBottom: '1px dotted var(--border)',
                margin: '0 1rem'
              }} />
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>The Kite Runner</span>
              <div style={{
                flex: 1,
                borderBottom: '1px dotted var(--border)',
                margin: '0 1rem'
              }} />
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>The Myth of Sisyphus</span>
              <div style={{
                flex: 1,
                borderBottom: '1px dotted var(--border)',
                margin: '0 1rem'
              }} />
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>Notes From the Underground</span>
              <div style={{
                flex: 1,
                borderBottom: '1px dotted var(--border)',
                margin: '0 1rem'
              }} />
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>Tuesdays with Morrie</span>
              <div style={{
                flex: 1,
                borderBottom: '1px dotted var(--border)',
                margin: '0 1rem'
              }} />
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>Brave New World</span>
              <div style={{
                flex: 1,
                borderBottom: '1px dotted var(--border)',
                margin: '0 1rem'
              }} />
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>Good Economics For Hard Times</span>
              <div style={{
                flex: 1,
                borderBottom: '1px dotted var(--border)',
                margin: '0 1rem'
              }} />
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>Civilization and its Discontents</span>
              <div style={{
                flex: 1,
                borderBottom: '1px dotted var(--border)',
                margin: '0 1rem'
              }} />
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>Animal Farm</span>
              <div style={{
                flex: 1,
                borderBottom: '1px dotted var(--border)',
                margin: '0 1rem'
              }} />
            </div>
          </div>
        </div>
        
        {/* 2024 and Before Section */}
        <div>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'var(--font-weight-medium)',
            marginBottom: '1.5rem',
            marginTop: 0
          }}>
            2024 and Before
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {[
              'Guns Germs Steel',
              'Grapes of Wrath',
              'The Metamorphosis',
              'The Plague',
              'Don Quixote',
              'The Denial of Death',
              'Catch-22',
              'Anna Karenina',
              'A Little Life',
              'Great Expectations',
              'The Brothers Karamazov',
              'To the Lighthouse',
              'Love in the Time of Cholera',
              'One Hundred Years of Solitude',
              'The Alchemist',
              'The Book Thief',
              'The Fever Code',
              'The Death Cure',
              'The Hitchhikers Guide to the Galaxy',
              'The Brain that Changes itself',
              'How to Win Friends and INfluence People',
              'Deep Work',
              'Predictably Irrational',
              'Emotional Intelligence',
              'The Da Vinci Code',
              'The Heroes of Olympus',
              'Man\'s Search for Meaning',
              'Pride and Prejudice',
              'Wuthering Heights',
              'Influence: Science and Practice',
              'The Power of Habit',
              'The Great Gatsby',
              'Catcher in the Rye',
              'And then there were none',
              'Murder on the Orient Express',
              'Sherlock Holmes: The Hounds of Baskerville',
              'Chaos: Making a New Science',
              '1984',
              'To Kill A Mockingbird',
              'Frankenstein',
              'Lord of the Flies',
              'Into the Wild',
              'The Picture of Dorian Gray',
              'Night',
              'A Christmas Carol',
              'Anne of Green Gables',
              'Life of Pi',
              'Where The Red Fern Grows',
              'The Time Traveler\'s Wife',
              'The island of the blue dolphins',
              'On the Road',
              'The Outsiders',
              'East of Eden',
              'The Godfather',
              'The way of the peaceful warrior',
              'Shangri-la'
            ].map((book, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>{book}</span>
                <div style={{
                  flex: 1,
                  borderBottom: '1px dotted var(--border)',
                  margin: '0 1rem'
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
