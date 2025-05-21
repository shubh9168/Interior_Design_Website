import React from 'react';

// Import images
import ModernLivingRoom from '../assets/ModernLivingRoom.jpg';
import KitchenDecoration from '../assets/kitchen-decoration.jpg';
import CozyBedroom from '../assets/cozy-bedroom-for-your-home.jpg';
import Office from '../assets/Office.jpg';
import CompactStudioApartment from '../assets/Compact Studio Apartment.jpg';
import TerraceModern from '../assets/terrace-modern.jpg';

import rahulImg from '../assets/rahul-sharma.jpg';
// import priyaImg from '../assets/priya-verma.jpg'; // This caused the error
import amitImg from '../assets/rahul-kumar.jpg';
import priyaImg from '../assets/priya-varma.jpg';
import './Home.css';

// Placeholder image for Priya Verma (use actual image later)


function Home() {
  return (
    <>
      <div className="home-hero">
        <div className="hero-content">
          <h1>Design Your Dream Space</h1>
          <p>Your dream interiors, crafted with passion and precision.</p>
          <button className="cta-btn">Explore Our Services</button>
        </div>
      </div>

      <div className="vision-section">
        <h2>Our Vision</h2>
        <p>
          At Happy~Home, we believe your home should reflect your personality and lifestyle.
          Our expert designers bring creativity, functionality, and elegance together to transform ordinary spaces into extraordinary experiences.
        </p>
      </div>

      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="service-card">
            <h3>Interior Design</h3>
            <p>Elegant, functional, and personalized interior designs that reflect your taste and lifestyle.</p>
          </div>
          <div className="service-card">
            <h3>Furniture Planning</h3>
            <p>Smart furniture layouts that enhance space usage and elevate your home’s aesthetic.</p>
          </div>
          <div className="service-card">
            <h3>Space Optimization</h3>
            <p>Transform small or large areas into highly efficient and stylish spaces.</p>
          </div>
        </div>
      </div>

      <div className="portfolio-preview">
        <h2 className="center-heading">Our Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src={ModernLivingRoom} alt="Living Room" />
            <p>Modern Living Room</p>
          </div>
          <div className="portfolio-item">
            <img src={KitchenDecoration} alt="Kitchen Design" />
            <p>Stylish Kitchen</p>
          </div>
          <div className="portfolio-item">
            <img src={CozyBedroom} alt="Bedroom" />
            <p>Cozy Bedroom</p>
          </div>
          <div className="portfolio-item">
            <img src={Office} alt="Office" />
            <p>Office</p>
          </div>
          <div className="portfolio-item">
            <img src={CompactStudioApartment} alt="Compact Studio Apartment" />
            <p>Compact Studio Apartment</p>
          </div>
          <div className="portfolio-item">
            <img src={TerraceModern} alt="Terrace Modern" />
            <p>Terrace Modern</p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <img src={rahulImg} alt="Client 1" />
            <p className="testimonial-text">
              "Happy~Home made my 2BHK flat in Navi Mumbai look like a luxurious apartment. Their designs are elegant and within budget."
            </p>
            <h4 className="client-name">Rahul Sharma</h4>
            <p className="client-role">IT Professional, Mumbai</p>
          </div>
          <div className="testimonial-card">
            <img src={priyaImg} alt="Client 2" />
            <p className="testimonial-text">
              "As a working mom, I wanted both style and functionality. The Happy~Home team delivered beyond expectations!"
            </p>
            <h4 className="client-name">Priya Verma</h4>
            <p className="client-role">Marketing Manager, Pune</p>
          </div>
          <div className="testimonial-card">
            <img src={amitImg} alt="Client 3" />
            <p className="testimonial-text">
              "Their attention to detail, color selection, and space-saving ideas completely changed my apartment. Highly satisfied!"
            </p>
            <h4 className="client-name">Amit Kumar</h4>
            <p className="client-role">Entrepreneur, Delhi</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
