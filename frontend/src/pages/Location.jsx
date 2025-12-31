import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <div className="location-page">
      {/* Hero Section */}
      <section className="location-hero">
        <div className="container">
          <h1 className="hero-large">Our Location</h1>
          <p className="body-large" style={{ marginTop: '24px', color: 'var(--text-secondary)', maxWidth: '700px' }}>
            Conveniently located in the peaceful Bomaka neighborhood of Buea
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31847.446891234567!2d9.2616667!3d4.1562222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061297c3d8e0001%3A0x1234567890abcdef!2sBomaka%2C%20Buea!5e0!3m2!1sen!2scm!4v1234567890123!5m2!1sen!2scm"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fuchor City Guest House Location"
          ></iframe>
        </div>
      </section>

      {/* Location Details */}
      <section className="section-padding">
        <div className="container">
          <div className="location-details-grid">
            <div className="location-detail-card">
              <div className="location-icon">
                <MapPin size={32} />
              </div>
              <h2 className="heading-2">Address</h2>
              <p className="body-large" style={{ marginTop: '16px' }}>
                Chief Street, Bomaka<br />
                Buea, South West Region<br />
                Cameroon
              </p>
            </div>
            <div className="location-detail-card">
              <div className="location-icon">
                <Navigation size={32} />
              </div>
              <h2 className="heading-2">Getting Here</h2>
              <p className="body-regular" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                We provide free transportation to and from the guest house. Simply contact us when you arrive in Buea, and we'll arrange your pickup. Our location is easily accessible from major areas in Buea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood */}
      <section className="neighborhood-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">About the Neighborhood</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
              Discover what makes Bomaka the perfect location
            </p>
          </div>
          <div className="neighborhood-grid">
            <div className="neighborhood-feature">
              <h3 className="heading-3">Peaceful & Quiet</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Bomaka is known for its calm, residential atmosphere, providing the perfect environment for relaxation away from the hustle and bustle of the city center.
              </p>
            </div>
            <div className="neighborhood-feature">
              <h3 className="heading-3">Secure Area</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                The neighborhood is well-maintained and secure, giving you peace of mind throughout your stay. Chief Street is a well-established residential area.
              </p>
            </div>
            <div className="neighborhood-feature">
              <h3 className="heading-3">Convenient Access</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                While offering tranquility, Bomaka maintains easy access to Buea's main attractions, restaurants, shops, and the university area.
              </p>
            </div>
            <div className="neighborhood-feature">
              <h3 className="heading-3">Natural Beauty</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Enjoy the scenic views and fresh mountain air that Buea is famous for. The area offers a refreshing escape with natural surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">Nearby Points of Interest</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
              Explore what Buea has to offer
            </p>
          </div>
          <div className="attractions-list">
            <div className="attraction-item">
              <h3 className="heading-3">University of Buea</h3>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Short drive from the guest house</p>
            </div>
            <div className="attraction-item">
              <h3 className="heading-3">Mount Cameroon</h3>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>West Africa's highest peak, ideal for hiking</p>
            </div>
            <div className="attraction-item">
              <h3 className="heading-3">Buea Town Center</h3>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Shopping, dining, and entertainment</p>
            </div>
            <div className="attraction-item">
              <h3 className="heading-3">Local Markets</h3>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Experience local culture and cuisine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Info */}
      <section className="transportation-section">
        <div className="container">
          <div className="transportation-content">
            <h2 className="hero-medium">Free Transportation Service</h2>
            <p className="body-large" style={{ marginTop: '24px', maxWidth: '800px', margin: '24px auto 0' }}>
              We understand that navigating a new city can be challenging. That's why we offer complimentary pickup and drop-off service to all our guests. Contact us when you're ready to arrive or depart, and we'll handle the rest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;