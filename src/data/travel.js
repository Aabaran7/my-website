export const travelEntries = [
  {
    id: 'nepal-adventure',
    title: 'Nepal Adventure',
    date: '2024',
    location: 'Nepal',
    description: 'Exploring the beautiful landscapes and rich culture of Nepal. From the bustling streets of Kathmandu to the serene mountains.',
    highlights: ['Trekking in the Himalayas', 'Visiting ancient temples', 'Local cuisine exploration'],
    status: 'Completed'
  },
  {
    id: 'europe-backpacking',
    title: 'Europe Backpacking',
    date: '2023',
    location: 'Multiple Countries',
    description: 'Backpacking through Europe, experiencing different cultures, cuisines, and historical sites.',
    highlights: ['Paris museums', 'Italian food tour', 'Swiss Alps hiking'],
    status: 'Completed'
  },
  {
    id: 'asia-exploration',
    title: 'Asia Exploration',
    date: '2022',
    location: 'Southeast Asia',
    description: 'Journey through Southeast Asia, discovering hidden gems and meeting amazing people.',
    highlights: ['Thailand beaches', 'Vietnamese street food', 'Cambodian temples'],
    status: 'Completed'
  },
  {
    id: 'future-trip',
    title: 'Future Adventure',
    date: '2025',
    location: 'TBD',
    description: 'Planning the next big adventure. Always excited to explore new places and cultures.',
    highlights: ['Planning phase', 'Researching destinations', 'Budget planning'],
    status: 'Planning'
  }
];

export const getTravelByYear = () => {
  const travelByYear = {};
  
  travelEntries.forEach(entry => {
    const year = entry.date;
    if (!travelByYear[year]) {
      travelByYear[year] = [];
    }
    travelByYear[year].push(entry);
  });
  
  return travelByYear;
}; 