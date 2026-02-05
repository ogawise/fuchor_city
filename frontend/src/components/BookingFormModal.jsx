import React, { useState } from 'react';
import { Send, X, Calendar, Users, Phone, User, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { toast } from 'sonner';
import './BookingFormModal.css';

const BookingFormModal = ({ open, onOpenChange, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    phone: initialData.phone || '',
    checkIn: initialData.checkIn || '',
    checkOut: initialData.checkOut || '',
    guests: initialData.guests || '2',
    message: initialData.message || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.checkIn) {
      newErrors.checkIn = 'Please select a check-in date';
    } else {
      const checkInDate = new Date(formData.checkIn);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (checkInDate < today) {
        newErrors.checkIn = 'Check-in date cannot be in the past';
      }
    }

    if (formData.checkOut && formData.checkIn) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = 'Check-out date must be after check-in date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format WhatsApp message
      const message = `Hello! I'd like to book a stay at Fuchor City Guest House:

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📅 Check-in: ${formData.checkIn}
📅 Check-out: ${formData.checkOut || 'To be discussed'}
👥 Number of Guests: ${formData.guests}
${formData.message ? `\n💬 Additional Notes: ${formData.message}` : ''}

Thank you!`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/237653207528?text=${encodedMessage}`;
      
      // Show success message
      toast.success('Opening WhatsApp with your booking details...', {
        description: 'Your form has been filled successfully!',
        duration: 3000
      });
      
      // Small delay to show feedback before opening WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
        onOpenChange(false);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '2',
          message: ''
        });
        setErrors({});
        
        toast.success('Booking request sent!', {
          description: 'We will get back to you shortly via WhatsApp.',
          duration: 4000
        });
      }, 500);
      
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Something went wrong', {
        description: 'Please try again or contact us directly.',
        duration: 4000
      });
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onOpenChange(false);
      // Reset form when closing
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '2',
          message: ''
        });
        setErrors({});
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="booking-modal-content">
        <DialogHeader>
          <DialogTitle className="booking-modal-title">
            <Calendar className="booking-modal-icon" />
            Book Your Stay
          </DialogTitle>
          <DialogDescription className="booking-modal-description">
            Fill out the form below and we'll contact you via WhatsApp to confirm your booking
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="booking-modal-form">
          <div className="booking-form-row">
            <div className="booking-form-group">
              <label htmlFor="modal-name" className="booking-form-label">
                <User size={16} />
                Full Name *
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`booking-form-input ${errors.name ? 'error' : ''}`}
                placeholder="Enter your full name"
                required
              />
              {errors.name && <span className="booking-form-error">{errors.name}</span>}
            </div>
            
            <div className="booking-form-group">
              <label htmlFor="modal-phone" className="booking-form-label">
                <Phone size={16} />
                Phone Number *
              </label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`booking-form-input ${errors.phone ? 'error' : ''}`}
                placeholder="+237 XXX XXX XXX"
                required
              />
              {errors.phone && <span className="booking-form-error">{errors.phone}</span>}
            </div>
          </div>
          
          <div className="booking-form-row">
            <div className="booking-form-group">
              <label htmlFor="modal-checkIn" className="booking-form-label">
                <Calendar size={16} />
                Check-in Date *
              </label>
              <input
                type="date"
                id="modal-checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className={`booking-form-input ${errors.checkIn ? 'error' : ''}`}
                min={new Date().toISOString().split('T')[0]}
                required
              />
              {errors.checkIn && <span className="booking-form-error">{errors.checkIn}</span>}
            </div>
            
            <div className="booking-form-group">
              <label htmlFor="modal-checkOut" className="booking-form-label">
                <Calendar size={16} />
                Check-out Date
              </label>
              <input
                type="date"
                id="modal-checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className={`booking-form-input ${errors.checkOut ? 'error' : ''}`}
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
              />
              {errors.checkOut && <span className="booking-form-error">{errors.checkOut}</span>}
            </div>
          </div>
          
          <div className="booking-form-group">
            <label htmlFor="modal-guests" className="booking-form-label">
              <Users size={16} />
              Number of Guests
            </label>
            <select
              id="modal-guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="booking-form-input"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>
          
          <div className="booking-form-group">
            <label htmlFor="modal-message" className="booking-form-label">
              <MessageSquare size={16} />
              Additional Notes
            </label>
            <textarea
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="booking-form-textarea"
              rows="4"
              placeholder="Any special requests, questions, or preferences?"
            ></textarea>
          </div>
          
          <div className="booking-form-actions">
            <button
              type="button"
              onClick={handleClose}
              className="booking-btn-cancel"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="booking-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="booking-spinner"></span>
                  Processing...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Booking Request
                </>
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingFormModal;
