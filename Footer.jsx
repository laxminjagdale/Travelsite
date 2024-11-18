// Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We are dedicated to making your travel dreams a reality, with curated experiences around the globe.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#homeP">Home</a></li>
                        <li><a href="#aboutP">About</a></li>
                        <li><a href="#servicesP">Services</a></li>
                        <li><a href="#contactP">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} <strong>Explore World</strong>. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
