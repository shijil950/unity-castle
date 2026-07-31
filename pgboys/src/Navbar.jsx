import React from 'react';
import './Navbar.css';
import logo from './assets/image.png'; // നിങ്ങളുടെ ലോഗോയുടെ ഫയൽ നാമവും പാന്തും ഇവിടെ നൽകുക

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* assets-ൽ നിന്നുള്ള ലോഗോ ഇവിടെ നൽകിയിരിക്കുന്നു */}
        <img src={logo} alt="Unity Castle Logo" className="nav-logo" />
        <div className="logo-text">
          <span>UNITY CASTLE</span>
          <small>BOYS & GIRLS PG</small>
        </div>
      </div>
      <ul className="nav-links">
        {/* <li><a href="#Home">Home</a></li> */}
        {/* <li><a href="#mens">Men's Hostel</a></li> */}
        {/* <li><a href="#GirlsHostel">Girls PG</a></li> */}
        <li><a href="#services">Services</a></li>
        <li><a href="#contact" className="nav-btn">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;