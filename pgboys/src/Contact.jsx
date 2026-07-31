import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hostelType: 'Mens Hostel'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Inquiry - Unity Castle PG*\n\n` +
                    `*Name:* ${formData.name}\n` +
                    `*Phone:* ${formData.phone}\n` +
                    `*Hostel Type:* ${formData.hostelType}`;

    const whatsappUrl = `https://wa.me/6364101768?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* 1. Form Card Ippo Melil (Top) Varum */}
        <div className="contact-form-card">
          <h3>Send Inquiry to WhatsApp</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <select name="hostelType" value={formData.hostelType} onChange={handleChange}>
                <option value="Mens Hostel">Men's Hostel</option>
                <option value="Girls PG">Girls PG</option>
              </select>
            </div>

            <button type="submit" className="whatsapp-submit-btn">
              Send to WhatsApp 💬
            </button>
          </form>
        </div>

        {/* 2. Dark Info Card Ippo Thazhe (Bottom) Varum */}
        <div className="contact-info-card">
          <p className="contact-email">unitycastlepg@gmail.com</p>

          <div className="address-box">
            <span className="address-icon">📍</span>
            <div>
              <h4>Men's Hostel Address:</h4>
              <p>no.654/2 B B Garden Road, 1st Main Rd, Agrahara, Fort Mohalla, Mysuru, Karnataka 570004</p>
            </div>
          </div>

          <div className="address-box">
            <span className="address-icon">📍</span>
            <div>
              <h4>Girls PG Address:</h4>
              <p>No. #1870 K-1873, Bazarapete Road, Sri Lakshmivawaru, Agrahara, Mysuru - 570004</p>
            </div>
          </div>

          <div className="nearby-info">
            <p>🏨 <strong>Nearby:</strong> 550 meters from JSS College of Nursing | 650 meters from JSS Hospital</p>
          </div>

          <div className="instagram-section">
            <p>Follow us on Instagram:</p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-btn">
              <span>Instagram</span>
              <span className="arrow-icon">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;