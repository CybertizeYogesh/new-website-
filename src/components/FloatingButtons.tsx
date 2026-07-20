'use client';

import React from 'react';

export default function FloatingButtons() {
  return (
    <div className="floating-buttons-container">
      <div className="floating-button-item call-item">
        <a 
          href="tel:+919876543210" 
          className="floating-btn call-btn" 
          aria-label="Call Us" 
          title="Call Us"
        >
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
      <div className="floating-button-item whatsapp-item">
        <a 
          href="https://api.whatsapp.com/send?phone=919876543210&text=Hi%2C%20I%20need%20packers%20and%20movers%20services" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn whatsapp-btn" 
          aria-label="Chat on WhatsApp" 
          title="Chat on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}
