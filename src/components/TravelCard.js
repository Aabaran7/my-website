import React from 'react';
import { useNavigate } from 'react-router-dom';

const TravelCard = ({ travel, showBorder = true }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/travel/${travel.id}`);
  };

  return (
    <article 
      className={`${showBorder ? 'border-b border-border pb-8' : 'pb-8'} cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium m-0">
          {travel.title}
        </h3>
        <span className="text-sm text-muted">
          {travel.date}
        </span>
      </div>
      
      <p className="text-sm text-muted mb-2">
        {travel.location}
      </p>
      
      <p className="m-0 mb-3">
        {travel.description}
      </p>
      
      {travel.highlights && (
        <div className="mb-3">
          <p className="text-sm text-muted mb-2">Highlights:</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {travel.highlights.map((highlight, index) => (
              <li key={index} className="text-muted">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {travel.status && (
        <span className={`text-xs px-2 py-1 rounded ${
          travel.status === 'completed' 
            ? 'bg-green-100 text-green-800' 
            : travel.status === 'planning'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {travel.status}
        </span>
      )}
      
      <div className="mt-3 text-sm text-blue-600">
        Click to see full details →
      </div>
    </article>
  );
};

export default TravelCard; 