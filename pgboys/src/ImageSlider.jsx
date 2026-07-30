import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

// ചിത്രങ്ങളുടെ പേരുകളിലെ സ്പേസ് ഒഴിവാക്കി ഇവിടെ ഇമ്പോർട്ട് ചെയ്യുക
import frontView from './assets/image copy.png'; 
import twoSharing from './assets/image copy 2.png';
import fourSharing from './assets/image copy 3.png';
import sideView1 from './assets/image copy 4.png';
import sideView2 from './assets/image copy 5.png';

function ImageSlider() {
  const slides = [
    { url: frontView, alt: 'Front View' },
    { url: twoSharing, alt: 'Two Sharing Bedroom' },
    { url: fourSharing, alt: 'Four Sharing Bedroom' },
    { url: sideView1, alt: 'Side View 1' },
    { url: sideView2, alt: 'Side View 2' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="slider-section">
      <div className="section-title">
        <span>Gallery</span>
        <h2>Hostel & PG Views</h2>
      </div>

      <div className="slider-container">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.url} alt={slide.alt} />
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;