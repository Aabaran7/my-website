export const projects = [
  {
    id: 'project-one',
    title: 'Project One',
    description: 'A web application focused on simplifying complex workflows. Built with React and TypeScript, designed with accessibility and performance in mind.',
    year: 2024,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/project-one',
    status: 'Completed'
  },
  {
    id: 'design-system',
    title: 'Design System Work',
    description: 'Comprehensive design system development for a growing startup. Includes component library, documentation, and implementation guidelines.',
    year: '2023-2024',
    technologies: ['Figma', 'Storybook', 'React', 'CSS'],
    link: null,
    status: 'In Progress'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    description: 'Cross-platform application for habit tracking and personal productivity. Focus on minimal interface and meaningful interactions.',
    year: 2023,
    technologies: ['React Native', 'Firebase', 'Redux'],
    link: 'https://github.com/yourusername/mobile-app',
    status: 'Completed'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with modern web technologies. Features responsive design, dark mode, and dynamic content management.',
    year: 2025,
    technologies: ['React', 'Tailwind CSS', 'React Router'],
    link: 'https://github.com/yourusername/portfolio',
    status: 'Completed'
  }
];

export const getProjectsByYear = () => {
  const projectsByYear = {};
  
  projects.forEach(project => {
    const year = project.year;
    if (!projectsByYear[year]) {
      projectsByYear[year] = [];
    }
    projectsByYear[year].push(project);
  });
  
  return projectsByYear;
}; 