import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Rates', path: '/rates' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' }
  ];

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
    // Ensure scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/237653207528', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+237653207528';
  };

  return (
    <nav className="navigation-header">
      <div className="container">
        <div className="navigation-content">
          <Link to="/" className="navigation-logo">
            Fuchor City Guest House
          </Link>

          {/* Desktop Navigation */}
          <ul className="navigation-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navigation-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Utilities */}
          <div className="navigation-utilities">
            <button onClick={handleCall} className="btn-icon" aria-label="Call us">
              <Phone size={18} />
            </button>
            <button onClick={handleWhatsApp} className="btn-primary-small">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-menu-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`mobile-menu-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-menu-actions">
              <button onClick={handleCall} className="btn-secondary-mobile">
                <Phone size={18} />
                Call Us
              </button>
              <button onClick={handleWhatsApp} className="btn-primary-mobile">
                Book on WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;