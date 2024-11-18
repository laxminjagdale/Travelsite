// src/components/AboutPage.js
import React from 'react';
import '../styles/About.css';

// Sample images (replace these with real images)
import teamImage from '../assets/team.jpg';
import missionImage from '../assets/mission.jpg';

const About = () => {
  return (
    <div className="about" id='aboutP'>
      {/* Introduction Section */}
      <section className="about-intro">
        <h1 className='heading'>About Us</h1>
        <p>
          Welcome to <strong>Explore World</strong>, where your adventure begins! We are dedicated to helping you discover the most incredible destinations around the world, with personalized recommendations and curated travel experiences.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At <strong>Explore World</strong>, we believe that travel opens the door to endless possibilities and lifelong memories. Our mission is to make travel accessible, affordable, and enjoyable for everyone. From planning to booking, we’re here to make your journey seamless.
          </p>
        </div>
        <img src={missionImage} alt="Our Mission" className="mission-image" />
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Expertise</h3>
            <p>
              Our team consists of experienced travelers who are passionate about sharing the best destinations and hidden gems with you.
            </p>
          </div>
          <div className="feature-card">
            <h3>Personalized Service</h3>
            <p>
              We offer personalized recommendations based on your preferences, ensuring that every trip is tailored to you.
            </p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>
              Our customer support team is available around the clock to assist you, wherever you are in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <p>
          Our team is made up of travel experts, explorers, and adventure seekers. We're committed to bringing you the best experiences and supporting you every step of the way.
        </p>
        <img src={teamImage} alt="Our Team" className="team-image" />
      </section>
    </div>
  );
};

export default About;
