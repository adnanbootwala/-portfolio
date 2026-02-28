import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="portfolio-container">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
