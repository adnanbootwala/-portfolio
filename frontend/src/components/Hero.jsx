import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Adnan Murtaza Bootwala</h1>
          <p className="hero-tagline">Engineering Ideas Into Impact.</p>
          <button onClick={scrollToAbout} className="hero-cta">
            Explore My Work
          </button>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <ArrowDown className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
