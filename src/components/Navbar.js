import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
      onClick={onClose}
    >
      <div 
        className="bg-background p-10 rounded-lg min-w-80 border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-foreground font-medium m-0">
            Navigation
          </h3>
          <button 
            className="bg-none border-none text-2xl cursor-pointer text-foreground p-2 hover:bg-accent transition-colors duration-200"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        <div className="flex flex-col gap-4">
          <Link 
            to="/" 
            className="text-foreground no-underline p-3 rounded-md transition-all duration-200 text-center hover:bg-accent hover:text-accent-foreground hover:border-border border border-transparent"
            onClick={onClose}
          >
            Home
          </Link>
          
          <Link 
            to="/books" 
            className="text-foreground no-underline p-3 rounded-md transition-all duration-200 text-center hover:bg-accent hover:text-accent-foreground hover:border-border border border-transparent"
            onClick={onClose}
          >
            Books
          </Link>
          
          <Link 
            to="/projects" 
            className="text-foreground no-underline p-3 rounded-md transition-all duration-200 text-center hover:bg-accent hover:text-accent-foreground hover:border-border border border-transparent"
            onClick={onClose}
          >
            Projects
          </Link>
          
          <Link 
            to="/travels" 
            className="text-foreground no-underline p-3 rounded-md transition-all duration-200 text-center hover:bg-accent hover:text-accent-foreground hover:border-border border border-transparent"
            onClick={onClose}
          >
            Travels
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
