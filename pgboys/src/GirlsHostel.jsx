import React from 'react';
import './GirlsHostel.css';

function GirlsHostel({ setCurrentPage }) {
  const girlsRooms = [
    { 
      type: '2 Sharing Room', 
      tag: 'Popular', 
      price: '₹95,000', 
      period: 'per year',
      desc: 'Safe, secure, and comfortable twin sharing rooms designed exclusively for girls.',
      features: ['Individual Bed & Personal Locker', 'Attached Western Bathroom', 'High-Speed WiFi', '24/7 Hot Water & Power Backup']
    },
    { 
      type: '3 Sharing Room', 
      tag: 'Best Value', 
      price: '₹90,000', 
      period: 'per year',
      desc: 'Spacious triple sharing accommodation with a friendly and homely atmosphere.',
      features: ['Individual Bed & Storage', 'Study Table Setup', 'Daily Room Cleaning', 'Safe & Secure Environment']
    },
    { 
      type: '4 Sharing Room', 
      tag: 'Budget Friendly', 
      price: '₹85,000', 
      period: 'per year',
      desc: 'Pocket-friendly shared living space with top-tier hygiene and essential amenities.',
      features: ['Comfortable Bed', 'Individual Storage Box', 'Nutritious Food Facility', 'Secure Campus with CCTV']
    },
  ];

  // Book button click cheythal Home-ilekku poyi Contact section-ilekk scroll aavan
  const handleBooking = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="girls" className="girls-section">
      <div className="section-title">
        <span>Girls PG Accommodation</span>
        <h2>Unity Castle Girls PG - Agrahara, Mysuru</h2>
        <p className="section-desc">Your Second Home, Where You Belong. Located close to JSS College of Nursing & JSS Hospital.</p>
      </div>

      <div className="girls-grid">
        {girlsRooms.map((room, index) => (
          <div className="girls-card" key={index}>
            <div className="girls-card-header">
              <span className="girls-tag">{room.tag}</span>
              <h3>{room.type}</h3>
              <div className="girls-price">
                <span className="price-val">{room.price}</span>
                <span className="price-period">/ {room.period}</span>
              </div>
            </div>
            
            <div className="girls-card-body">
              <p>{room.desc}</p>
              <ul className="girls-perks">
                {room.features.map((perk, i) => (
                  <li key={i}>✓ {perk}</li>
                ))}
              </ul>
              {/* Call handleBooking function on click */}
              <button onClick={handleBooking} className="girls-book-btn">
                Book Girls PG Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GirlsHostel;