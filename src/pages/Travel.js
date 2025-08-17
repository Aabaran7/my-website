import React, { useState } from 'react';
import { getVisitedCountries } from '../data/travel';
import Navbar from '../components/Navbar';
import WorldMap from '../components/WorldMap';

const Travel = () => {
  const [showNav, setShowNav] = useState(false);
  const visitedCountries = getVisitedCountries();

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
      
      <div className="pt-20 px-4" onClick={() => setShowNav(false)}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Travel Adventures
          </h1>
          
          {/* World Map */}
          <WorldMap 
            visitedCountries={visitedCountries}
            onMapClick={() => setShowNav(false)}
            travelEntries={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Travel;
