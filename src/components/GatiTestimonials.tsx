'use client';

import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'HOUSE SHIFTING',
    initials: 'RS',
    text: 'Gati packers and movers Bangalore provided smooth home shifting service. Their packers and movers team packed, loaded and delivered our goods safely on time with professional support and careful handling.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lankhshit',
    role: 'OFFICE RELOCATION',
    initials: 'LK',
    text: 'Gati packers and movers Bangalore delivered excellent home shifting support. Their packers and movers team handled packing, loading and transport safely while ensuring timely delivery and smooth relocation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Pareek',
    role: 'VEHICLE TRANSPORT',
    initials: 'AP',
    text: 'Gati packers and movers Bangalore provide safe home shifting service for families across city areas. Gati packers and movers team carefully packs household goods and ensures secure transport for every relocation project.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sandeep Verma',
    role: 'DOMESTIC MOVING',
    initials: 'SV',
    text: 'Shifted my 3BHK household items from Electronic City, Bengaluru to Gurgaon. The team used heavy multi-layer bubble wrap and corrugated boxes for all electronics. Not a single scratch on my 65-inch OLED TV!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kavita Reddy',
    role: 'PACKING & UNPACKING',
    initials: 'KR',
    text: 'Extremely polite and hardworking staff! They unpacked and arranged all heavy furniture in our new apartment in Bellandur within just a few hours. Highly recommended for hassle-free house shifting.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Vikramaditya Nair',
    role: 'CAR TRANSPORTATION',
    initials: 'VN',
    text: 'Booked enclosed car carrier transportation for my Honda City from Bangalore to Kochi. Received live tracking updates throughout transit. Car arrived spotless and right on schedule!',
    rating: 5,
  },
  {
    id: 7,
    name: 'Pooja Deshmukh',
    role: 'WAREHOUSE STORAGE',
    initials: 'PD',
    text: 'Stored our complete household items in their Electronic City warehouse facility for 4 months during house renovation. Everything remained dust-free, moisture-proof, and in pristine condition when delivered back.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Rajesh R. Menon',
    role: 'INTERNATIONAL MOVING',
    initials: 'RM',
    text: 'Phenomenal international shifting coordination from Bengaluru to Dubai. The team handled custom clearance documentation, sea freight wooden crating, and door-to-door delivery seamlessly.',
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
                {testimonialsData.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <div className="img-avatar">{item.initials}</div>
                  </li>
                ))}
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
