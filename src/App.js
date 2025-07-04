// import './App.css';

// function App() {
//   return (
//     <div>
//       <header style={{ textAlign: 'center', backgroundColor: '#333', color: 'white', padding: '20px' }}>
//         <h1>Welcome to My Personal Website</h1>
//         <p>Your one-stop destination for learning more about me!</p>
//       </header>
//       <main style={{ padding: '20px' }}>
//         <section id="about" style={{ marginBottom: '20px' }}>
//           <h2>About Me</h2>
//           <p>Hello! I'm Aabaran, a passionate individual who loves coding, learning, and creating amazing things.</p>
//         </section>
//         <section id="contact">
//           <h2>Contact</h2>
//           <p>If you'd like to get in touch, feel free to email me at: <a href="mailto:example@example.com">example@example.com</a></p>
//         </section>
//       </main>
//       <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#333', color: 'white' }}>
//         <p>&copy; 2025 Aabaran. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Projects from './pages/Projects';
import Travels from './pages/Travel';
import './App.css';

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

