import React from 'react';
import './MensHostel.css';

function MensHostel() {
  const rooms = [
    { title: 'Two Sharing', price: '₹95,000 / year', desc: 'Comfortable living space for two with individual amenities.' },
    { title: 'Three Sharing', price: '₹90,000 / year', desc: 'Spacious triple sharing rooms designed for students.' },
    { title: 'Four Sharing', price: '₹80,000 / year', desc: 'Affordable and budget-friendly shared room option.' },
  ];

  return (
    <section id="mens" className="mens-section">
      <div className="section-title">
        <span>Men's Accommodation</span>
        <h2>Men's Hostel Rooms & Pricing</h2>
        <p>Looking for a comfortable & affordable place to stay? Check out our sharing options.</p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <div className="room-header">
              <h3>{room.title}</h3>
              <span className="price">{room.price}</span>
            </div>
            <p>{room.desc}</p>
            <ul className="features-list">
              <li>✓ Share Laughter, Share Space, Share Life</li>
              <li>✓ Secure & Peaceful Environment</li>
            </ul>
            <a href="#contact" className="book-btn">Book Men's Room</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MensHostel;