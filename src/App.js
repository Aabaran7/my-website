import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Projects from './pages/Projects';
import Travel from './pages/Travel';
import TravelReview from './pages/TravelReview';
import BookReview from './pages/BookReview';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookReview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/travels" element={<Travel />} />
          <Route path="/travel/:id" element={<TravelReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

