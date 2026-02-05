import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import BookingFormModal from '../components/BookingFormModal';
import './About.css';

const About = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
    toast.info('Ready to book your stay?', {
      description: 'Fill out the form to reserve your accommodation',
      duration: 3000
    });
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="hero-large">About Fuchor City Guest House</h1>
          <p className="body-large" style={{ marginTop: '24px', color: 'var(--text-secondary)', maxWidth: '700px' }}>
            A sanctuary of elegance, comfort, and privacy in the heart of Buea
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-two-column">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1757023375017-2a39c78e571c"
                alt="Fuchor City Guest House"
                className="about-image hover-lift"
              />
            </div>
            <div className="about-content">
              <h2 className="hero-medium">Your Home Away from Home</h2>
              <p className="body-large" style={{ marginTop: '24px' }}>
                Fuchor City Guest House was created with a singular vision: to provide travelers, couples, and visitors to Buea with a truly exceptional accommodation experience that combines luxury, privacy, and genuine hospitality.
              </p>
              <p className="body-regular" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                We understand that your stay should be more than just a place to sleep – it should be a sanctuary where you can relax, recharge, and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">What Makes Us Different</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
              Our commitment to excellence in every detail
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h3 className="heading-2">Thoughtful Design</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Every aspect of our guest house has been carefully designed to create a harmonious blend of elegance and functionality. From the furniture selection to the color palette, we've considered how each element contributes to your comfort.
              </p>
            </div>
            <div className="value-card">
              <h3 className="heading-2">Complete Privacy</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                We respect your need for privacy and discretion. Our guest house offers a secluded, peaceful environment where you can enjoy your stay without interruption, perfect for couples and those seeking a private retreat.
              </p>
            </div>
            <div className="value-card">
              <h3 className="heading-2">Modern Amenities</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                High-speed internet, smart TVs with Netflix, air conditioning, and a fully equipped kitchen – we provide all the modern conveniences you'd expect from a premium accommodation, ensuring your stay is both comfortable and connected.
              </p>
            </div>
            <div className="value-card">
              <h3 className="heading-2">Exceptional Service</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                From complimentary transportation to and from the guest house to our thoughtful touches like a first-aid kit and complimentary protection for couples, we go above and beyond to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-two-column">
            <div className="location-content">
              <h2 className="hero-medium">Perfectly Located in Bomaka</h2>
              <p className="body-large" style={{ marginTop: '24px' }}>
                Nestled in the calm and serene area of Chief Street, Bomaka, our guest house offers the perfect balance of tranquility and accessibility.
              </p>
              <p className="body-regular" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                The peaceful neighborhood provides a quiet retreat from the bustle of daily life, while still being conveniently located near Buea's main attractions, restaurants, and points of interest.
              </p>
            </div>
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0"
                alt="Comfortable bedroom"
                className="about-image hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="promise-section">
        <div className="container">
          <div className="promise-content">
            <h2 className="hero-medium">Our Promise to You</h2>
            <p className="body-large" style={{ marginTop: '24px', maxWidth: '800px', margin: '24px auto 0' }}>
              Whether you're visiting for a festive occasion, a romantic getaway, or simply need a comfortable place for a short stay, we promise to provide an experience that exceeds your expectations. Your comfort, privacy, and satisfaction are our top priorities.
            </p>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <button onClick={handleBookNow} className="btn-primary">
                Book Your Stay
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingFormModal 
        open={isBookingModalOpen} 
        onOpenChange={setIsBookingModalOpen}
      />
    </div>
  );
};

export default About;