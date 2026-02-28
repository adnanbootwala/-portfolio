import React from 'react';
import { GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              <GraduationCap size={80} strokeWidth={1} />
            </div>
          </div>
          
          <div className="about-text">
            <h3 className="about-heading">Computer Systems Student</h3>
            <p className="about-description">
              I'm currently pursuing my studies in Computer Systems at Heriot-Watt University, 
              where I'm building a strong foundation in technology, systems design, and innovation.
            </p>
            <p className="about-description">
              My focus is on understanding how technology intersects with business and user needs, 
              enabling me to create solutions that make a real difference. I'm passionate about 
              rapid execution, clean architecture, and emerging technologies like AI.
            </p>
            <p className="about-description">
              I believe in taking ownership, driving projects forward, and transforming complex 
              ideas into clear, functional systems that create impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
