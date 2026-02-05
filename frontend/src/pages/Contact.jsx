import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import BookingFormModal from '../components/BookingFormModal';
import './Contact.css';

const Contact = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
    toast.info('Complete your booking request', {
      description: 'Fill out the form to proceed with your reservation',
      duration: 3000
    });
  };

  const handleWhatsAppDirect = () => {
    window.open('https://wa.me/237653207528', '_blank');
    toast.info('Opening WhatsApp', {
      description: 'You can also use the booking form for a structured request',
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
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="hero-large">Get in Touch</h1>
          <p className="body-large" style={{ marginTop: '24px', color: 'var(--text-secondary)', maxWidth: '700px' }}>
            Ready to book your stay? We're here to help with any questions or special requests
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-methods-grid">
            <div className="contact-method-card" onClick={handleBookNow}>
              <div className="contact-method-icon">
                <MessageCircle size={32} />
              </div>
              <h3 className="heading-2">Book Your Stay</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Fill out our booking form for a structured reservation request
              </p>
              <p className="body-small" style={{ marginTop: '16px', fontWeight: 500, color: 'var(--interactive-base)' }}>
                Click to open booking form →
              </p>
            </div>
            <div className="contact-method-card" onClick={handleCall}>
              <div className="contact-method-icon">
                <Phone size={32} />
              </div>
              <h3 className="heading-2">Phone</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Call us directly for immediate assistance
              </p>
              <p className="body-large" style={{ marginTop: '16px', fontWeight: 600 }}>
                +237 653 207 528
              </p>
            </div>
            <div className="contact-method-card">
              <div className="contact-method-icon">
                <MapPin size={32} />
              </div>
              <h3 className="heading-2">Visit Us</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Come see our beautiful guest house
              </p>
              <p className="body-regular" style={{ marginTop: '16px' }}>
                Chief Street, Bomaka<br />Buea, Cameroon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form CTA */}
      <section className="booking-form-section section-padding">
        <div className="container">
          <div className="booking-form-wrapper">
            <div className="booking-form-header">
              <h2 className="hero-medium">Book Your Stay</h2>
              <p className="body-regular" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                Fill out our booking form and we'll contact you via WhatsApp to confirm your reservation
              </p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <button onClick={handleBookNow} className="btn-submit" style={{ maxWidth: '400px' }}>
                <MessageCircle size={18} />
                Open Booking Form
              </button>
              <p className="body-small" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                Or contact us directly via{' '}
                <button 
                  onClick={handleWhatsAppDirect}
                  style={{ 
                    color: 'var(--interactive-base)', 
                    textDecoration: 'underline',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: 'inherit'
                  }}
                >
                  WhatsApp
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="heading-3">How do I make a reservation?</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Click on any "Book Now" button to open our booking form. Fill it out and submit - we'll contact you via WhatsApp to confirm your reservation immediately.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="heading-3">What is your cancellation policy?</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Please contact us to discuss cancellation policies. We try to be as flexible as possible with our guests.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="heading-3">Do you provide airport pickup?</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Yes! We offer free transportation to and from the guest house. Just let us know your arrival details.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="heading-3">What payment methods do you accept?</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Payment details can be discussed when you book. We accept various payment methods for your convenience.
              </p>
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

export default Contact;