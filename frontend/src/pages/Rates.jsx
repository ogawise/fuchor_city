import React from 'react';
import { Check } from 'lucide-react';
import './Rates.css';

const Rates = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/237653207528', '_blank');
  };

  const pricingPlans = [
    {
      duration: '1 Day',
      price: '40,000',
      description: 'Perfect for a quick getaway or overnight stay',
      features: [
        'Full access to all amenities',
        'Air-conditioned bedroom & parlor',
        'Smart TVs with Netflix',
        'Fully equipped kitchen',
        'Free WiFi',
        'Free transportation'
      ]
    },
    {
      duration: '3 Days',
      price: '110,000',
      originalPrice: '120,000',
      description: 'Ideal for weekend retreats and short vacations',
      features: [
        'All 1-day amenities included',
        'Extended comfort & privacy',
        'Save 10,000 FRS',
        'Priority booking',
        'Flexible check-in/out times',
        'Complimentary extras'
      ],
      popular: true
    },
    {
      duration: '7 Days',
      price: '245,000',
      originalPrice: '280,000',
      description: 'Best value for extended stays and work trips',
      features: [
        'All 3-day amenities included',
        'Maximum savings',
        'Save 35,000 FRS',
        'Weekly housekeeping',
        'Priority support',
        'Flexible arrangements'
      ]
    }
  ];

  return (
    <div className="rates-page">
      {/* Hero Section */}
      <section className="rates-hero">
        <div className="container">
          <h1 className="hero-large">Simple, Transparent Pricing</h1>
          <p className="body-large" style={{ marginTop: '24px', color: 'var(--text-secondary)', maxWidth: '700px' }}>
            Choose the perfect stay duration with our competitive rates and special discounts for longer stays
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    <span className="body-small">Most Popular</span>
                  </div>
                )}
                <div className="pricing-header">
                  <h2 className="heading-1">{plan.duration}</h2>
                  <div className="pricing-amount">
                    <span className="price-value">{plan.price}</span>
                    <span className="price-currency">FRS</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="price-original">
                      <span className="body-small" style={{ textDecoration: 'line-through', color: 'var(--text-light)' }}>
                        {plan.originalPrice} FRS
                      </span>
                    </div>
                  )}
                  <p className="body-regular" style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                    {plan.description}
                  </p>
                </div>
                <div className="pricing-features">
                  <ul className="features-list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <Check size={16} className="feature-icon" />
                        <span className="body-regular">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button onClick={handleWhatsApp} className="btn-pricing">
                  Book This Stay
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Stays */}
      <section className="custom-rates-section">
        <div className="container">
          <div className="custom-rates-content">
            <h2 className="hero-medium">Need a Longer Stay?</h2>
            <p className="body-large" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
              We offer custom discounts for extended reservations beyond 7 days. Contact us directly to discuss your requirements and get a personalized quote.
            </p>
            <button onClick={handleWhatsApp} className="btn-primary" style={{ marginTop: '32px' }}>
              Contact Us for Custom Rates
            </button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="hero-medium">What's Included in Every Stay</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
              Premium amenities at no extra cost
            </p>
          </div>
          <div className="included-grid">
            <div className="included-item">
              <h3 className="heading-3">Entertainment</h3>
              <p className="body-small" style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                Smart TVs with Netflix in both bedroom and parlor, plus regular TV channels
              </p>
            </div>
            <div className="included-item">
              <h3 className="heading-3">Climate Control</h3>
              <p className="body-small" style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                Air conditioning in bedroom and parlor for year-round comfort
              </p>
            </div>
            <div className="included-item">
              <h3 className="heading-3">Connectivity</h3>
              <p className="body-small" style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                High-speed WiFi internet throughout the guest house
              </p>
            </div>
            <div className="included-item">
              <h3 className="heading-3">Kitchen Facilities</h3>
              <p className="body-small" style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                Fully equipped kitchen with modern appliances and cookware
              </p>
            </div>
            <div className="included-item">
              <h3 className="heading-3">Transportation</h3>
              <p className="body-small" style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                Free pickup and drop-off service to and from the guest house
              </p>
            </div>
            <div className="included-item">
              <h3 className="heading-3">Safety & Care</h3>
              <p className="body-small" style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                First-aid kit and complimentary protection for couples
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Terms */}
      <section className="terms-section">
        <div className="container">
          <div className="terms-content">
            <h3 className="heading-2">Booking Information</h3>
            <ul className="terms-list">
              <li className="body-regular">All rates are in Central African CFA Franc (FRS)</li>
              <li className="body-regular">Check-in time: Flexible based on availability</li>
              <li className="body-regular">Check-out time: Flexible based on next booking</li>
              <li className="body-regular">Payment can be discussed via WhatsApp</li>
              <li className="body-regular">Cancellation policy available upon request</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rates;