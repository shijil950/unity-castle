import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="badge">WELCOME TO UNITY CASTLE FAMILY</span>
          
          <h1>Best Boys & Girls PG Near JSS College of Nursing, Mysore</h1>
          
          <p>
            Safe, affordable & fully furnished PG for students and working professionals in Agrahara, Mysuru. Just 550m from JSS College of Nursing and 650m from JSS Hospital. Enjoy WiFi, CCTV, housekeeping, hot water, hygienic food, and comfortable 2, 3 & 4 sharing rooms.
          </p>

          <div className="hero-buttons">
            <a href="#mens-hostel" className="primary-btn">
              Explore Men's Hostel
            </a>
            <a href="#girls-pg" className="secondary-btn">
              Explore Girls PG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;