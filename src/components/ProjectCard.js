import React from 'react';

const ProjectCard = ({ project, showBorder = true }) => {
  return (
    <div className={`${showBorder ? 'border-b border-border pb-8' : 'pb-8'}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium m-0">
          {project.title}
        </h3>
        <span className="text-sm text-muted">
          {project.year}
        </span>
      </div>
      
      <p className="m-0 mb-3">
        {project.description}
      </p>
      
      {project.technologies && (
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {project.link && (
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-foreground hover:text-link-hover transition-colors duration-200"
        >
          View Project →
        </a>
      )}
      
      {project.status && (
        <span className={`text-xs px-2 py-1 rounded ml-2 ${
          project.status === 'Completed' 
            ? 'bg-green-100 text-green-800' 
            : project.status === 'In Progress'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {project.status}
        </span>
      )}
    </div>
  );
};

export default ProjectCard; 