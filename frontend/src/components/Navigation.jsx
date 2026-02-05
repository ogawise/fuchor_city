import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { toast } from 'sonner';
import BookingFormModal from './BookingFormModal';
import './Navigation.css';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
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

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
    setMobileMenuOpen(false);
    toast.info('Complete your booking', {
      description: 'Fill out the form to reserve your stay',
      duration: 3000
    });
  };

  const handleCall = () => {
    window.location.href = 'tel:+237653207528';
    toast.success('Opening phone dialer...', {
      duration: 2000
    });
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
                <button
                  onClick={() => handleNavClick(link.path)}
                  className={`navigation-link ${location.pathname === link.path ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Utilities */}
          <div className="navigation-utilities">
            <button onClick={handleCall} className="btn-icon" aria-label="Call us">
              <Phone size={18} />
            </button>
            <button onClick={handleBookNow} className="btn-primary-small">
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
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className={`mobile-menu-link ${location.pathname === link.path ? 'active' : ''}`}
                    style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mobile-menu-actions">
              <button onClick={handleCall} className="btn-secondary-mobile">
                <Phone size={18} />
                Call Us
              </button>
              <button onClick={handleBookNow} className="btn-primary-mobile">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>

      <BookingFormModal 
        open={isBookingModalOpen} 
        onOpenChange={setIsBookingModalOpen}
      />
    </nav>
  );
};

export default Navigation;