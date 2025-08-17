export const travelEntries = [
  {
    id: 1,
    title: "Paris Adventure",
    date: "March 2024",
    location: "Paris, France",
    countryCode: "fr",
    description: "Explored the City of Light with its iconic landmarks and rich culture.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Seine River Cruise"],
    status: "completed"
  },
  {
    id: 2,
    title: "Tokyo Exploration",
    date: "January 2024",
    location: "Tokyo, Japan",
    countryCode: "jp",
    description: "Immersed in the perfect blend of tradition and modernity in Japan's capital.",
    highlights: ["Shibuya Crossing", "Senso-ji Temple", "Tsukiji Market", "Tokyo Skytree"],
    status: "completed"
  },
  {
    id: 3,
    title: "New York City",
    date: "December 2023",
    location: "New York, USA",
    countryCode: "us",
    description: "Experienced the energy and diversity of the Big Apple.",
    highlights: ["Times Square", "Central Park", "Statue of Liberty", "Broadway Show"],
    status: "completed"
  },
  {
    id: 4,
    title: "London Calling",
    date: "October 2023",
    location: "London, UK",
    countryCode: "uk",
    description: "Discovered the historic charm and modern vibrancy of England's capital.",
    highlights: ["Big Ben", "Tower of London", "British Museum", "Buckingham Palace"],
    status: "completed"
  },
  {
    id: 5,
    title: "Rome & Vatican",
    date: "August 2023",
    location: "Rome, Italy",
    countryCode: "it",
    description: "Walked through ancient history in the Eternal City.",
    highlights: ["Colosseum", "Vatican Museums", "Trevi Fountain", "Roman Forum"],
    status: "completed"
  },
  {
    id: 6,
    title: "Barcelona Vibes",
    date: "June 2023",
    location: "Barcelona, Spain",
    countryCode: "es",
    description: "Enjoyed the artistic and architectural wonders of Catalonia.",
    highlights: ["Sagrada Familia", "Park Güell", "La Rambla", "Gothic Quarter"],
    status: "completed"
  },
  {
    id: 7,
    title: "Berlin History",
    date: "April 2023",
    location: "Berlin, Germany",
    countryCode: "de",
    description: "Explored the complex history and vibrant culture of Germany's capital.",
    highlights: ["Brandenburg Gate", "Berlin Wall", "Museum Island", "Checkpoint Charlie"],
    status: "completed"
  },
  {
    id: 8,
    title: "Sydney Summer",
    date: "February 2023",
    location: "Sydney, Australia",
    countryCode: "au",
    description: "Experienced the beauty of Australia's most famous city.",
    highlights: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge", "Royal Botanic Garden"],
    status: "completed"
  }
];

export const getTravelByYear = () => {
  const grouped = {};
  travelEntries.forEach(entry => {
    const year = new Date(entry.date).getFullYear();
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(entry);
  });
  return grouped;
};

export const getVisitedCountries = () => {
  return travelEntries.map(entry => entry.countryCode);
}; 