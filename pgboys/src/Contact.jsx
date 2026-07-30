import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hostelType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "916364101768"; 
    const text = `*New Inquiry - Unity Castle PG*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Hostel Type:* ${formData.hostelType}\n*Message:* ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-title">
        <span>Get in Touch</span>
        <h2>Contact Information</h2>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Unity Castle Boys & Girls PG</h3>
          <p>📞 <strong>Phone:</strong> <a href="tel:6364101768">6364101768</a></p>
          <p>✉️ <strong>Email:</strong> <a href="mailto:unitycastlepg@gmail.com">unitycastlepg@gmail.com</a></p>
          
          {/* സെപ്പറേറ്റ് ചെയ്ത അഡ്രസ്സുകൾ */}
          <div className="address-block">
            <p>📍 <strong>Men's Hostel Address:</strong> no654/2 B B Garden Road, 1st Main Rd, Agrahara, Fort Mohalla, Mysuru, Karnataka 570004</p>
          </div>
          <div className="address-block">
            <p>📍 <strong>Girls PG Address:</strong> No. #1870 K-1873, Bazarapete Road, Sri Lakshmivawaru, Agrahara, Mysuru - 570004</p>
          </div>

          <p>🏫 <strong>Nearby:</strong> 550 meters from JSS College of Nursing | 650 meters from JSS Hospital</p>

          <div className="insta-divider">
            <span>Follow us on Instagram:</span>
          </div>

          {/* ക്യാമറ ചിഹ്നം ഒഴിവാക്കി ലളിതമായ ഇൻസ്റ്റാഗ്രാം ബട്ടൺ */}
          <a 
            href="https://www.instagram.com/unitycastlepg?igsh=MWFwNTZrbHB3MGdkcQ==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="insta-banner-card"
          >
            <div className="insta-text-content">
              <span className="insta-main-title">Instagram</span>
            </div>
            <div className="insta-arrow-circle">
              →
            </div>
          </a>
        </div>

        <div className="contact-box">
          <h3>Send Inquiry to WhatsApp</h3>
          <form onSubmit={handleWhatsAppSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
            <select 
              name="hostelType" 
              value={formData.hostelType} 
              onChange={handleChange} 
              required
            >
              <option value="">Select Hostel Type</option>
              <option value="Men's Hostel">Men's Hostel</option>
              <option value="Girls PG">Girls PG</option>
            </select>
            <textarea 
              name="message" 
              placeholder="Message / Sharing requirement" 
              rows="3" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
            <button type="submit" className="submit-btn">💬 Send via WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;