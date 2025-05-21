import React from 'react';
import './AboutUs.css';

import ourMissionImg from '../assets/ourmission.jpg';
import ourStoryImg from '../assets/ourstory.jpg';
import rubalImg from '../assets/rubal.jpg';
import shitalImg from '../assets/Shital.jpg';
import shubhamImg from '../assets/shubham.jpg';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="intro">
        <h2>About Us</h2>
        <p>We’re a creative team passionate about beautiful, functional spaces.</p>
      </div>

      <div className="mission">
        <img src={ourMissionImg} alt="Our mission" />
        <div>
          <h3>Our Mission: Helping You Design Better Spaces</h3>
          <p>We aim to create inspiring interiors that reflect your personality and needs. Every design tells a story—and we help you write it.</p>
        </div>
      </div>

      <div className="story">
        <img src={ourStoryImg} alt="Our story" />
        <div>
          <h3>Our Story</h3>
          <p>Founded in 2024, our team came together through a shared love for design and creativity. We work collaboratively with our clients to bring ideas to life through thoughtful planning and aesthetics.</p>
        </div>
      </div>

      <div className="team">
        <h3>Meet Our Team</h3>
        <div className="team-members-list">

          <div className="team-member">
            <img src={rubalImg} alt="Rubal" />
            <div className="member-info">
              <h4>Rubal <span> | Frontend Developer</span></h4>
              <p>I’m Rubal, the developer behind this project. With a deep interest in web development and a passion for user-centric design, I created this platform to showcase how technology can elevate the home design experience. This project is part of my portfolio and reflects my skills in HTML, CSS, JavaScript, Node.js, Express, and MySQL.</p>
              <div className="social-links">
                <a href="https://linkedin.com/in/rubal" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <p>Contact: 7697828718</p>
              <p>Gmail: rubaldayle92@gmail.com</p>
            </div>
          </div>

          <div className="team-member reverse">
            <img src={shitalImg} alt="Shital" />
            <div className="member-info">
              <h4>Shital Kawthe<span> | Backend Developer</span></h4>
              <p>"As a passionate Computer Science professional with expertise in full-stack web development using React, Node.js, and MySQL, I'm committed to expanding my skill set through the PG-DAC program. I'm excited to dive deeper into software engineering, database systems, and cloud technologies to stay ahead in the tech landscape</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/shital-kawthe-618246354" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <p>Contact: 8767101638</p>
              <p>Gmail: shitalkawthe1994@gmail.com</p>
            </div>
          </div>

          <div className="team-member">
            <img src={shubhamImg} alt="Shubham" />
            <div className="member-info">
              <h4>Shubham Bhujbal <span> |full-stack and frontend css</span></h4>
              <p>I am a Computer Science enthusiast with hands-on experience in full-stack web development using React, Node.js, and MySQL.
Currently pursuing a PG-DAC to deepen my skills in software engineering, database systems, and cloud technologies.
Apart from coding, I enjoy reading tech blogs, exploring UI/UX design, and playing chess.</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/shubham-bhujbal-159b11227/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <p>Contact: 9168936272</p>
              <p>Gmail: svb9168@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
