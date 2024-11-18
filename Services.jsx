// src/components/ServicesPage.js
import React from 'react';
import "../styles/Services.css"

// Sample icons or images (replace with real icons/images if desired)
import bookingIcon from '../assets/booking.png';
import itineraryIcon from '../assets/itinerary.png';
import insuranceIcon from '../assets/insurance-icon.png';
import supportIcon from '../assets/support-icon.png';

const Services = () => {
  return (  
    <div className="services" id='servicesP'>
      <h1 id='head1'>Our Services</h1>
      <br /><br />
      <p>At <strong>Explore World</strong>, we provide a range of travel services to ensure a smooth, enjoyable, and memorable journey for you.</p>

      {/* Services List */}
      <br /><br />
      <div className="services-list">
        {/* Service 1: Booking */}
        <div className="service-card">
          <img src={bookingIcon} alt="Booking" className="service-icon" />
          <h3>Flight & Hotel Booking</h3>
          <p>
            Find the best deals on flights and accommodations. We partner with leading airlines and hotels to offer you affordable and luxurious options worldwide.
          </p>
        </div>

        {/* Service 2: Personalized Itinerary */}
        <div className="service-card">
          <img src={itineraryIcon} alt="Itinerary" className="service-icon" />
          <h3>Personalized Itinerary</h3>
          <p>
            Let us create a customized itinerary just for you. Whether it's adventure, relaxation, or a mix of both, we tailor every trip to your preferences.
          </p>
        </div>

        {/* Service 3: Travel Insurance */}
        <div className="service-card">
          <img src={insuranceIcon} alt="Insurance" className="service-icon" />
          <h3>Travel Insurance</h3>
          <p>
            Travel with peace of mind. Our travel insurance plans cover medical emergencies, trip cancellations, and more.
          </p>
        </div>

        {/* Service 4: 24/7 Customer Support */}
        <div className="service-card">
          <img src={supportIcon} alt="Support" className="service-icon" />
          <h3>24/7 Customer Support</h3>
          <p>
            Our support team is available around the clock to assist you with any inquiries or emergencies, no matter where you are.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Services;
