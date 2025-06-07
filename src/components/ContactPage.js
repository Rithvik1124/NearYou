import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>Have questions, ideas, or want to collaborate? We're always happy to hear from you.</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> <a href="mailto:contact@nearyou.org">contact@nearyou.org</a></p>
        <p><strong>Instagram:</strong> <a href="https://instagram.com/nearyou.ngo" target="_blank" rel="noopener noreferrer">@nearyou.ngo</a></p>
        <p><strong>Location:</strong> Delhi NCR, India</p>
      </section>

      <section className="contact-footer-note">
        <p>We're here to build connections that make real change possible. Let’s connect and create impact — together.</p>
      </section>
    </div>
  );
}

export default ContactPage;
