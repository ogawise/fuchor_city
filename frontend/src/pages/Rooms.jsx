import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import BookingFormModal from '../components/BookingFormModal';
import './Rooms.css';

const Rooms = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
    toast.info('Ready to book?', {
      description: 'Fill out the form to reserve your stay',
      duration: 3000
    });
  };

  const rooms = [
    {
      title: 'Master Bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
      features: [
        'Air-conditioned for optimal comfort',
        'Smart TV with Netflix access',
        'Luxurious bedding and linens',
        'Spacious wardrobe and storage',
        'Natural lighting with privacy curtains'
      ]
    },
    {
      title: 'Living Parlor',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      features: [
        'Air-conditioned lounge area',
        'Smart TV with Netflix and regular channels',
        'Comfortable seating for relaxation',
        'Entertainment space',
        'Modern and elegant design'
      ]
    },
    {
      title: 'Modern Kitchen',
      image: 'https://images.unsplash.com/photo-1696986681606-b156ccd761c5',
      features: [
        'Fully equipped with modern appliances',
        'Refrigerator and cooking facilities',
        'Cookware and dining utensils',
        'Clean and hygienic',
        'Perfect for preparing your favorite meals'
      ]
    },
    {
      title: 'Luxury Bathroom',
      image: 'https://images.unsplash.com/photo-1696987007764-7f8b85dd3033',
      features: [
        'Hot, warm, and cold shower options',
        'Modern fixtures and fittings',
        'Premium toiletries provided',
        'Clean and well-maintained',
        'Private and comfortable'
      ]
    }
  ];

  const additionalAmenities = [
    'High-speed WiFi internet',
    'First-aid kit for emergencies',
    'Complimentary protection for couples',
    'Free transportation to/from guest house',
    'Regular cleaning and maintenance',
    'Secure and private location'
  ];

  return (
    <div className="rooms-page">
      {/* Hero Section */}
      <section className="rooms-hero">
        <div className="container">
          <h1 className="hero-large">Rooms & Amenities</h1>
          <p className="body-large" style={{ marginTop: '24px', color: 'var(--text-secondary)', maxWidth: '700px' }}>
            Discover elegantly designed spaces with premium amenities for your ultimate comfort
          </p>
        </div>
      </section>

      {/* Rooms Detail */}
      <section className="section-padding">
        <div className="container">
          <div className="rooms-detail-grid">
            {rooms.map((room, index) => (
              <div key={index} className="room-detail-card">
                <div className="room-detail-image-wrapper">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="room-detail-image hover-lift"
                  />
                </div>
                <div className="room-detail-content">
                  <h2 className="heading-1">{room.title}</h2>
                  <ul className="room-features-list">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="body-regular">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="amenities-full-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">Additional Amenities</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
              Everything you need for a worry-free stay
            </p>
          </div>
          <div className="amenities-list-grid">
            {additionalAmenities.map((amenity, index) => (
              <div key={index} className="amenity-list-item">
                <div className="amenity-bullet"></div>
                <span className="body-regular">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">Interior Gallery</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
              A glimpse into your home away from home
            </p>
          </div>
          <div className="gallery-grid">
            <img
              src="https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg"
              alt="Bedroom view"
              className="gallery-image hover-lift"
            />
            <img
              src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3"
              alt="Living area"
              className="gallery-image hover-lift"
            />
            <img
              src="https://images.unsplash.com/photo-1638799869566-b17fa794c4de"
              alt="Bathroom"
              className="gallery-image hover-lift"
            />
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">Ready to Experience These Spaces?</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
              Book your stay now and enjoy all our premium amenities
            </p>
            <button onClick={handleBookNow} className="btn-primary" style={{ marginTop: '32px' }}>
              Book Your Stay
              <ArrowRight size={18} />
            </button>
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

export default Rooms;