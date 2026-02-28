import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Adnanbootwala. All rights reserved.
        </p>
        <p className="footer-subtext">
          Built with precision and attention to detail.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
