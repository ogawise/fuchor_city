import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.checkIn) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Format WhatsApp message
    const message = `Hello! I'd like to book a stay at Fuchor City Guest House:

Name: ${formData.name}
Phone: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut || 'To be discussed'}
Number of Guests: ${formData.guests}
${formData.message ? `\nAdditional Notes: ${formData.message}` : ''}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/237653207528?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/237653207528', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+237653207528';
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
            <div className="contact-method-card" onClick={handleWhatsApp}>
              <div className="contact-method-icon">
                <MessageCircle size={32} />
              </div>
              <h3 className="heading-2">WhatsApp</h3>
              <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                Quick and easy booking via WhatsApp
              </p>
              <p className="body-large" style={{ marginTop: '16px', fontWeight: 600 }}>
                +237 653 207 528
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

      {/* Booking Form */}
      <section className="booking-form-section section-padding">
        <div className="container">
          <div className="booking-form-wrapper">
            <div className="booking-form-header">
              <h2 className="hero-medium">Book Your Stay</h2>
              <p className="body-regular" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                Fill out the form below and we'll contact you via WhatsApp to confirm your booking
              </p>
            </div>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+237 XXX XXX XXX"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkIn" className="form-label">Check-in Date *</label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkOut" className="form-label">Check-out Date</label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="guests" className="form-label">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Additional Notes</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                  placeholder="Any special requests or questions?"
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                <Send size={18} />
                Send Booking Request via WhatsApp
              </button>
            </form>
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
                You can book directly via WhatsApp, call us, or use the booking form above. We'll confirm your reservation immediately.
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
    </div>
  );
};

export default Contact;