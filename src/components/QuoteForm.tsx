'use client';

import React from 'react';

interface QuoteFormProps {
  title?: string;
  subtitle?: string;
}

export default function QuoteForm({ 
  title = "Get a Free Estimate", 
  subtitle = "Fill the form below to get an instant quote for your move." 
}: QuoteFormProps) {
  return (
    <div className="form-card" id="quote">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <form action="https://hsmpackersandmovers.in/thank-you.php" method="POST" className="quote-form">
        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <input type="tel" name="phone" placeholder="Phone Number" required />
          </div>

          <div className="input-group">
            <input type="email" name="email" placeholder="Email Address" />
          </div>

          <div className="input-group">
            <input type="date" name="move_date" required />
          </div>

          <div className="input-group">
            <input type="text" name="moving_from" placeholder="Moving From (City)" required />
          </div>

          <div className="input-group">
            <input type="text" name="moving_to" placeholder="Moving To (City)" required />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Get Quote Now <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
        </button>
      </form>
    </div>
  );
}
