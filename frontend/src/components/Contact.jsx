import React from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="contact-content">
          <p className="contact-intro">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out through any of the following channels.
          </p>
          
          <div className="contact-methods">
            <a href="mailto:Adnanmsaleh@outlook.com" className="contact-item">
              <Mail size={24} strokeWidth={1.5} />
              <span>Adnanmsaleh@outlook.com</span>
            </a>
            
            <a href="tel:+971561281852" className="contact-item">
              <Phone size={24} strokeWidth={1.5} />
              <span>+971 56 128 1852</span>
            </a>
            
            <a href="https://www.linkedin.com/in/adnanbootwala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="contact-item">
              <Linkedin size={24} strokeWidth={1.5} />
              <span>LinkedIn</span>
            </a>
            
            <a href="https://www.instagram.com/4.m5b?igsh=bWg1NG53bDMzczJv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="contact-item">
              <Instagram size={24} strokeWidth={1.5} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
