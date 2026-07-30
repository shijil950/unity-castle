import React from 'react';
import './Services.css';

function Services() {
  const serviceList = [
    { 
      icon: '🛡️', 
      title: '24*7 CCTV Surveillance', 
      description: 'Complete security coverage around the clock to ensure a safe and secure living environment.' 
    },
    { 
      icon: '📶', 
      title: 'High-Speed WiFi', 
      description: 'Uninterrupted high-speed internet connectivity perfect for your study, work, and entertainment.' 
    },
    { 
      icon: '🔥', 
      title: 'Hot Water Facility', 
      description: 'Round-the-clock availability of hot water for a refreshing and comfortable bathing experience.' 
    },
    { 
      icon: '🧺', 
      title: 'Washing Machine', 
      description: 'Modern washing machine facilities available for hassle-free and easy daily laundry.' 
    },
    { 
      icon: '🧹', 
      title: 'Housekeeping', 
      description: 'Twice-weekly housekeeping service to maintain a clean and comfortable stay.' 
    },
    { 
      icon: '🍲', 
      title: 'Veg & Non-Veg Food', 
      description: 'Delicious and hygienic home-style vegetarian and non-vegetarian meals served daily.' 
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-title">
        <span>Facilities</span>
        <h2>Our Services & Amenities</h2>
      </div>
      <div className="services-grid">
        {serviceList.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;