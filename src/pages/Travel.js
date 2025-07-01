import React from 'react';

const Travels = () => {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <h1>Travel Blog</h1>
      <p>My adventures around the world...</p>
      
      {/* Basic blog structure */}
      <article>
        <h3>Trip to [Destination]</h3>
        <p>Date: [Date]</p>
        <p>Your travel story here...</p>
      </article>
      
      <article>
        <h3>Another Adventure</h3>
        <p>Date: [Date]</p>
        <p>Another travel story...</p>
      </article>
    </div>
  );
};

export default Travels;
