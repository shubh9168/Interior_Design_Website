import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css';

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace URL with your actual backend endpoint
      const res = await axios.post('http://localhost:5000/api/contact', form);
      toast.success(res.data.message || 'Message sent successfully!');
      setForm({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message');
    }

    setLoading(false);
  };

  return (
    <div className="contact-container">
      <ToastContainer />
      <div className="banner-image">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80"
          alt="Office Workspace"
        />
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Side Panel with Map & Illustration */}
        <div className="contact-info">
          <div className="map-image">
            <h3>Our Location</h3>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.984962449186!2d72.87765587506196!3d19.109632151989975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f153cb9489%3A0x87d348843a9f8ef9!2sNavi%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1716283015146!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />


          </div>

          <div className="contact-illustration">

            <p>Call us or email us anytime. We're here to help!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
