import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import ImageSlider from './ImageSlider';
import MensHostel from './MensHostel';
import GirlsHostel from './GirlsHostel';
import Services from './Services';
import Contact from './Contact';
import About from './About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app">
      <Navbar />

      {/* Home Page Content */}
      {currentPage === 'home' && (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <About />
          <ImageSlider />
          <Services />
          <Contact />
        </>
      )}

      {/* Men's Hostel Page */}
      {currentPage === 'mens' && (
        <div className="page-container">
          <MensHostel setCurrentPage={setCurrentPage} />
          <div className="back-btn-container">
            <button className="custom-back-btn" onClick={() => setCurrentPage('home')}>
              ⬅ Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Girls Hostel Page */}
      {currentPage === 'girls' && (
        <div className="page-container">
          <GirlsHostel setCurrentPage={setCurrentPage} />
          <div className="back-btn-container">
            <button className="custom-back-btn" onClick={() => setCurrentPage('home')}>
              ⬅ Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;