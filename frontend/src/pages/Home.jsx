import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { toast } from 'sonner';
import BookingFormModal from '../components/BookingFormModal';
import './Home.css';

const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
    toast.info('Please fill out the booking form', {
      description: 'We need a few details to process your reservation',
      duration: 3000
    });
  };

  const handleCall = () => {
    window.location.href = 'tel:+237653207528';
    toast.success('Opening phone dialer...', {
      duration: 2000
    });
  };

  const amenities = [
    { title: 'High-Speed Internet', description: 'Stay connected with reliable WiFi throughout your stay' },
    { title: 'Smart TVs & Netflix', description: 'Entertainment in both bedroom and parlor' },
    { title: 'Air Conditioning', description: 'Climate control in bedroom and parlor for ultimate comfort' },
    { title: 'Premium Bathroom', description: 'Hot, warm, and cold shower options available' },
    { title: 'Fully Equipped Kitchen', description: 'Cook your favorite meals with modern appliances' },
    { title: 'First-Aid Kit', description: 'Your safety is our priority' },
    { title: 'Complimentary Protection', description: 'For couples seeking privacy and care' },
    { title: 'Free Transportation', description: 'Pickup and drop-off to and from the guest house' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1757023374849-b1fbb670098a"
            alt="Fuchor City Guest House"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-large">Your Home of Elegance, Calm & Comfort in Buea</h1>
            <p className="body-large hero-description">
              Experience refined hospitality in the heart of Bomaka. A thoughtfully designed space offering luxury, privacy, and all the amenities you need for an unforgettable stay.
            </p>
            <div className="hero-actions">
              <button onClick={handleBookNow} className="btn-primary">
                Book Now
                <ArrowRight size={18} />
              </button>
              <button onClick={handleCall} className="btn-secondary">
                <Phone size={18} />
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-two-column">
            <div className="welcome-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3"
                alt="Luxury living space"
                className="welcome-image hover-lift"
              />
            </div>
            <div className="welcome-content">
              <h2 className="hero-medium">Welcome to Your Private Sanctuary</h2>
              <p className="body-large" style={{ marginTop: '24px' }}>
                Fuchor City Guest House is more than just accommodation – it's your home away from home. Whether you're here for a romantic getaway, a business trip, or simply need a peaceful retreat, we provide the perfect blend of luxury and comfort.
              </p>
              <p className="body-regular" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                Located in the serene area of Chief Street, Bomaka, our guest house offers a calm environment with easy access to Buea's attractions. Every detail has been carefully considered to ensure your stay is exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">Premium Amenities</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
              Everything you need for a comfortable and memorable stay
            </p>
          </div>
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-card hover-lift">
                <h3 className="heading-3">{amenity.title}</h3>
                <p className="body-small" style={{ marginTop: '8px' }}>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">Elegantly Designed Spaces</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
              Discover our thoughtfully furnished rooms and amenities
            </p>
          </div>
          <div className="rooms-preview-grid">
            <div className="room-preview-card hover-lift">
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0"
                alt="Master Bedroom"
                className="room-preview-image"
              />
              <div className="room-preview-content">
                <h3 className="heading-2">Master Bedroom</h3>
                <p className="body-small">Luxurious comfort with air conditioning and smart TV</p>
              </div>
            </div>
            <div className="room-preview-card hover-lift">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"
                alt="Living Parlor"
                className="room-preview-image"
              />
              <div className="room-preview-content">
                <h3 className="heading-2">Living Parlor</h3>
                <p className="body-small">Spacious lounge area with entertainment system</p>
              </div>
            </div>
            <div className="room-preview-card hover-lift">
              <img
                src="https://images.unsplash.com/photo-1696986681606-b156ccd761c5"
                alt="Modern Kitchen"
                className="room-preview-image"
              />
              <div className="room-preview-content">
                <h3 className="heading-2">Modern Kitchen</h3>
                <p className="body-small">Fully equipped for your culinary needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="hero-medium">Ready to Experience Luxury?</h2>
            <p className="body-large" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
              Book your stay today and discover why guests choose Fuchor City Guest House
            </p>
            <div className="cta-actions">
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

export default Home;