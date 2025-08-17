import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../data/books';
import Navbar from '../components/Navbar';

const BookReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const book = books[id];

  useEffect(() => {
    if (!book) {
      navigate('/books');
    }
  }, [book, navigate]);

  if (!book) {
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
          onClick={() => navigate('/books')}
          className="mb-8 text-foreground hover:text-link-hover transition-colors duration-200"
        >
          ← Back to Books
        </button>
        
        <h1 className="text-4xl font-medium mb-4">
          {book.title}
        </h1>
        
        <div className="mb-8">
          <p className="text-lg text-muted mb-2">
            by {book.author}
          </p>
          <p className="text-sm text-muted">
            Read in {book.year} • {book.genre}
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-muted">Rating:</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < book.rating ? 'text-yellow-500' : 'text-gray-300'}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="prose prose-lg">
          <h2 className="text-2xl font-medium mb-4">My Review</h2>
          <p className="text-base leading-relaxed">
            {book.review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookReview; 