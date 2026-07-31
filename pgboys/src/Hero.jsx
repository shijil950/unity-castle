import React from 'react';
import './Hero.css';

function Hero({ setCurrentPage }) {
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
            {/* Men's PG click cheythal 'mens' page-ilekk povum */}
            <button onClick={() => setCurrentPage('mens')} className="primary-btn">
              Explore Men's Hostel
            </button>
            
            {/* Girls PG click cheythal 'girls' page-ilekk povum */}
            <button onClick={() => setCurrentPage('girls')} className="secondary-btn">
              Explore Girls PG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;