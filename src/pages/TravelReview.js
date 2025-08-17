import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { travelEntries } from '../data/travel';
import Navbar from '../components/Navbar';

const TravelReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const travel = travelEntries.find(entry => entry.id === parseInt(id));

  useEffect(() => {
    if (!travel) {
      navigate('/travels');
    }
  }, [travel, navigate]);

  if (!travel) {
    return null;
  }

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
        <button 
          onClick={() => navigate('/travels')}
          className="mb-8 text-foreground hover:text-link-hover transition-colors duration-200"
        >
          ← Back to Travels
        </button>
        
        <h1 className="text-4xl font-medium mb-4">
          {travel.title}
        </h1>
        
        <div className="mb-8">
          <p className="text-lg text-muted mb-2">
            {travel.location}
          </p>
          <p className="text-sm text-muted">
            {travel.date} • {travel.status === 'completed' ? '✅ Completed' : '🔄 Planned'}
          </p>
        </div>
        
        <div className="mb-6">
          <p className="text-base leading-relaxed text-foreground">
            {travel.description}
          </p>
        </div>
        
        <div className="prose prose-lg">
          <h2 className="text-2xl font-medium mb-4">Highlights</h2>
          <ul className="list-none space-y-2">
            {travel.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                <span className="text-base leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TravelReview; 