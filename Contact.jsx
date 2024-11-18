// src/components/ContactPage.js
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you could add form validation and/or connect to a backend to send the form data.
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact" id='contactP'>
      <h1 id='cont'>Contact Us</h1>
      <p>We'd love to hear from you! Please reach out with any questions, comments, or inquiries.</p>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="contact-info-item">
          <h3>Phone</h3>
          <p>+91 9898989876</p>
        </div>
        <div className="contact-info-item">
          <h3>Email</h3>
          <p>exploreworld@gmail.com</p>
        </div>
        <div className="contact-info-item">
          <h3>Address</h3>
          <p>123 Adventure Lane, Nagpur, Maharashtra</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
