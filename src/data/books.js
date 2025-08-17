export const books = {
  // 2025 Books
  'war-and-peace': {
    id: 'war-and-peace',
    title: 'War & Peace',
    author: 'Leo Tolstoy',
    year: 2025,
    review: 'Epic historical novel exploring the impact of war on society and individuals.',
    rating: 5,
    genre: 'Historical Fiction'
  },
  'the-kite-runner': {
    id: 'the-kite-runner',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    year: 2025,
    review: 'Powerful story of redemption and friendship set against the backdrop of Afghanistan.',
    rating: 5,
    genre: 'Contemporary Fiction'
  },
  'the-myth-of-sisyphus': {
    id: 'the-myth-of-sisyphus',
    title: 'The Myth of Sisyphus',
    author: 'Albert Camus',
    year: 2025,
    review: 'Philosophical exploration of the absurd and finding meaning in life.',
    rating: 4,
    genre: 'Philosophy'
  },
  'notes-from-underground': {
    id: 'notes-from-underground',
    title: 'Notes From the Underground',
    author: 'Fyodor Dostoevsky',
    year: 2025,
    review: 'Deep psychological exploration of human consciousness and alienation.',
    rating: 4,
    genre: 'Philosophical Fiction'
  },
  'tuesdays-with-morrie': {
    id: 'tuesdays-with-morrie',
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom',
    year: 2025,
    review: 'Heartwarming memoir about life lessons from a dying professor.',
    rating: 5,
    genre: 'Memoir'
  },
  'brave-new-world': {
    id: 'brave-new-world',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 2025,
    review: 'Dystopian vision of a controlled society and the price of happiness.',
    rating: 4,
    genre: 'Science Fiction'
  },
  'good-economics-for-hard-times': {
    id: 'good-economics-for-hard-times',
    title: 'Good Economics For Hard Times',
    author: 'Abhijit V. Banerjee & Esther Duflo',
    year: 2025,
    review: 'Insightful analysis of economic challenges and evidence-based solutions.',
    rating: 4,
    genre: 'Economics'
  },
  'civilization-and-its-discontents': {
    id: 'civilization-and-its-discontents',
    title: 'Civilization and its Discontents',
    author: 'Sigmund Freud',
    year: 2025,
    review: 'Freud\'s analysis of the conflict between individual desires and societal demands.',
    rating: 3,
    genre: 'Psychology'
  },
  'animal-farm': {
    id: 'animal-farm',
    title: 'Animal Farm',
    author: 'George Orwell',
    year: 2025,
    review: 'Allegorical tale about power, corruption, and the nature of revolution.',
    rating: 5,
    genre: 'Political Satire'
  }
};

export const books2024AndBefore = [
  'Guns Germs Steel',
  'Grapes of Wrath',
  'The Metamorphosis',
  'The Plague',
  'Don Quixote',
  'The Denial of Death',
  'Catch-22',
  'Anna Karenina',
  'A Little Life',
  'Great Expectations',
  'The Brothers Karamazov',
  'To the Lighthouse',
  'Love in the Time of Cholera',
  'One Hundred Years of Solitude',
  'The Alchemist',
  'The Book Thief',
  'The Fever Code',
  'The Death Cure',
  'The Hitchhikers Guide to the Galaxy',
  'The Brain that Changes itself',
  'How to Win Friends and INfluence People',
  'Deep Work',
  'Predictably Irrational',
  'Emotional Intelligence',
  'The Da Vinci Code',
  'The Heroes of Olympus',
  'Man\'s Search for Meaning',
  'Pride and Prejudice',
  'Wuthering Heights',
  'Influence: Science and Practice',
  'The Power of Habit',
  'The Great Gatsby',
  'Catcher in the Rye',
  'And then there were none',
  'Murder on the Orient Express',
  'Sherlock Holmes: The Hounds of Baskerville',
  'Chaos: Making a New Science',
  '1984',
  'To Kill A Mockingbird',
  'Frankenstein',
  'Lord of the Flies',
  'Into the Wild',
  'The Picture of Dorian Gray',
  'Night',
  'A Christmas Carol',
  'Anne of Green Gables',
  'Life of Pi',
  'Where The Red Fern Grows',
  'The Time Traveler\'s Wife',
  'The island of the blue dolphins',
  'On the Road',
  'The Outsiders',
  'East of Eden',
  'The Godfather',
  'The way of the peaceful warrior',
  'Shangri-la'
];

export const getBooksByYear = () => {
  return {
    2025: Object.values(books),
    2024: books2024AndBefore
  };
}; 