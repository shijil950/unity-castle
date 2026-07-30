import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import ImageSlider from './ImageSlider'; // സ്ലൈഡർ इम्पोर्ट ചെയ്യുക
import MensHostel from './MensHostel';
import GirlsHostel from './GirlsHostel';
import Services from './Services';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <ImageSlider /> {/* ഇവിടെ ചേർത്തിരിക്കുന്നു */}
      <MensHostel />
      <GirlsHostel />
      <Services />
      <Contact />

    </div>
  );
}

export default App;