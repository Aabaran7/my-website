import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import { books, books2024AndBefore } from '../data/books';

const Books = () => {
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
        <h1 className="text-4xl font-medium mb-12">
          Books
        </h1>
        
        {/* 2025 Section */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-6">
            2025
          </h2>
          
          <div className="flex flex-col gap-2">
            {Object.values(books).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
        
        {/* 2024 and Before Section */}
        <div>
          <h2 className="text-xl font-medium mb-6">
            2024 and Before
          </h2>
          
          <div className="flex flex-col gap-2">
            {books2024AndBefore.map((bookTitle, index) => (
              <BookCard key={index} book={bookTitle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
