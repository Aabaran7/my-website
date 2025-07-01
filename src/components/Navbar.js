import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onClose }) => {
  return (
    <div className="navbar-overlay" onClick={onClose}>
      <div className="navbar-popup" onClick={(e) => e.stopPropagation()}>
        <div className="nav-header">
          <h3>Navigation</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link" onClick={onClose}>Home</Link>
          <Link to="/books" className="nav-link" onClick={onClose}>Books</Link>
          <Link to="/projects" className="nav-link" onClick={onClose}>Projects</Link>
          <Link to="/travels" className="nav-link" onClick={onClose}>Travels</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
