import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onClose }) => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--background)',
          padding: '40px',
          borderRadius: '8px',
          minWidth: '300px',
          border: '1px solid var(--border)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h3 style={{
            margin: 0,
            color: 'var(--foreground)',
            fontWeight: 'var(--font-weight-medium)'
          }}>
            Navigation
          </h3>
          <button 
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: 'var(--foreground)',
              padding: '8px'
            }}
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <Link 
            to="/" 
            style={{
              textDecoration: 'none',
              color: 'var(--foreground)',
              padding: '12px 16px',
              borderRadius: '6px',
              transition: 'background-color 0.2s ease',
              textAlign: 'center'
            }}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--border)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
          
          <Link 
            to="/books" 
            style={{
              textDecoration: 'none',
              color: 'var(--foreground)',
              padding: '12px 16px',
              borderRadius: '6px',
              transition: 'background-color 0.2s ease',
              textAlign: 'center'
            }}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--border)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Books
          </Link>
          
          <Link 
            to="/projects" 
            style={{
              textDecoration: 'none',
              color: 'var(--foreground)',
              padding: '12px 16px',
              borderRadius: '6px',
              transition: 'background-color 0.2s ease',
              textAlign: 'center'
            }}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--border)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Projects
          </Link>
          
          <Link 
            to="/travels" 
            style={{
              textDecoration: 'none',
              color: 'var(--foreground)',
              padding: '12px 16px',
              borderRadius: '6px',
              transition: 'background-color 0.2s ease',
              textAlign: 'center'
            }}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--border)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Travels
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
