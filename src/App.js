import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Projects from './pages/Projects';
import Travels from './pages/Travel';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/travels" element={<Travels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

