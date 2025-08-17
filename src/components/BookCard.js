import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, showDottedLine = true }) => {
  if (typeof book === 'string') {
    // For 2024 and Before books (just titles)
    return (
      <div className="flex justify-between items-center">
        <span className="text-foreground">{book}</span>
        {showDottedLine && (
          <div className="flex-1 border-b border-dotted border-border mx-4" />
        )}
      </div>
    );
  }

  // For 2025 books (with full details)
  return (
    <div className="flex justify-between items-center">
      <Link 
        to={`/book/${book.id}`}
        className="text-foreground hover:text-link-hover transition-colors duration-200"
      >
        {book.title}
      </Link>
      {showDottedLine && (
        <div className="flex-1 border-b border-dotted border-border mx-4" />
      )}
    </div>
  );
};

export default BookCard; 