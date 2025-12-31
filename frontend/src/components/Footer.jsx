import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/237653207528', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+237653207528';
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Fuchor City Guest House</h3>
            <p className="footer-description">
              Your home of elegance, calm & comfort in Buea
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/rooms">Rooms & Amenities</Link></li>
              <li><Link to="/rates">Rates</Link></li>
              <li><Link to="/location">Location</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={16} />
                <button onClick={handleCall} className="footer-contact-link">
                  +237 653 207 528
                </button>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>Chief Street, Bomaka, Buea, Cameroon</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Book Your Stay</h4>
            <button onClick={handleWhatsApp} className="btn-primary-footer">
              Book on WhatsApp
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Fuchor City Guest House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;