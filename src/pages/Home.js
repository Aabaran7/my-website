// import React from 'react';

// function Home() {
//   return (
//     <>
//       <header>
//         <h1>Welcome to My Website</h1>
//         <p>Your one-stop destination for learning more about me!</p>
//       </header>
//       <main>
//         <section>
//           <h2>About Me</h2>
//           <p>Hello! I'm Aabaran, a passionate individual who loves coding, learning, and creating amazing things.</p>
//         </section>
//         <section>
//           <h2>Contact</h2>
//           <p>Email: example@example.com</p>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2025 Aabaran. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }

// export default Home;

import React from 'react';
import './Home.css';
import profileImage from '../assets/profile.png'; // your profile photo

const Home = () => {
  return (
    <div className="home-container">
      <div className="settings-icon">⚙️</div>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1 className="name-title">Aabaran Paudel</h1>
      <p className="bio-text">
        I'm an award-winning content writer with five eight years of experience creating compelling articles and short stories. 
        I'm continuously searching for new ideas and stories to capture the attention of new readers. With my knowledge 
        and experience, I can help you fulfill your content creation goals.
      </p>
    </div>
  );
};

export default Home;

