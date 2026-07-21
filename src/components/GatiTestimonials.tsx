'use client';

import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'MANAGER',
    initials: 'RS',
    text: 'Gati packers and movers Bangalore provided smooth home shifting service. Their packers and movers team packed, loaded and delivered our goods safely on time with professional support and careful handling.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lankhshit',
    role: 'MANAGER',
    initials: 'LK',
    text: 'Gati packers and movers Bangalore delivered excellent home shifting support. Their packers and movers team handled packing, loading and transport safely while ensuring timely delivery and smooth relocation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Pareek',
    role: 'MANAGER',
    initials: 'AP',
    text: 'Gati packers and movers Bangalore provide safe home shifting service for families across city areas. Gati packers and movers team carefully packs household goods and ensures secure transport for every relocation project.',
    rating: 5,
  },
];

export default function GatiTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="gati-testimonial-section" id="testimonials">
      {/* Big Watermark Title matching Gati.com */}
      <div className="big-title-watermark">
        <h2>TESTIMONIALS</h2>
      </div>

      <div className="container gati-testimonial-container">
        <div className="gati-testimonial-grid">
          {/* Left Column: Title, Hanging Red Ribbon Quote Card & Controls */}
          <div className="gati-testimonial-left">
            <div className="gati-sec-title-tagline">
              <div className="line"></div>
              <div className="text">Client Testimonial</div>
              <i className="fa-solid fa-plane"></i>
            </div>
            <h2 className="gati-sec-title-heading">
              What Our Customers <br /> Say <span>About Us</span>
            </h2>

            {/* Testimonial Card Container with Hanging Red Badge Icon */}
            <div className="gati-testimonial-card-wrapper">
              <div className="gati-hanging-quote-icon">
                <i className="fa-solid fa-quote-right"></i>
              </div>

              <div className="gati-testimonial-card-inner">
                <div className="author-box">
                  <div className="author-img">{current.initials}</div>
                  <div className="author-info">
                    <h3>{current.name}</h3>
                    <div className="bottom-text">
                      <p>{current.role}</p>
                      <div className="rating-box">
                        {[...Array(current.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-box">
                  <p>"{current.text}"</p>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Arrows & Dots */}
            <div className="gati-slider-controls">
              <button className="gati-slider-arrow" onClick={handlePrev} aria-label="Previous Testimonial">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <div className="gati-slider-dots">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    className={`gati-slider-dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button className="gati-slider-arrow" onClick={handleNext} aria-label="Next Testimonial">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Image & Customer Avatar Stack Badge */}
          <div className="gati-testimonial-right">
            <div className="gati-testimonial-img-box">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                alt="Packers and Movers Customer Service"
              />
            </div>

            <div className="gati-img-author-badge">
              <ul>
                <li>
                  <div className="img-avatar">RS</div>
                </li>
                <li>
                  <div className="img-avatar">LK</div>
                </li>
                <li>
                  <div className="img-avatar">AP</div>
                </li>
              </ul>
              <div className="badge-text-box">
                <h3>Customer Satisfied</h3>
                <p>4.8 (15k Reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
