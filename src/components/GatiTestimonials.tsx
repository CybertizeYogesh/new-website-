'use client';

import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'HOUSE SHIFTING',
    initials: 'RS',
    text: 'HSM Packers and Movers Electronic City provided smooth home shifting from Neeladri Nagar, Phase I to Whitefield. Their experienced moving team packed, loaded, and delivered our household goods safely on time with utmost care.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lankhshit',
    role: 'OFFICE RELOCATION',
    initials: 'LK',
    text: 'HSM Packers and Movers Electronic City delivered excellent corporate office relocation. Their professional team handled server racks, IT desks, and office furniture safely while ensuring zero operational downtime.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Pareek',
    role: 'VEHICLE TRANSPORT',
    initials: 'AP',
    text: 'HSM Packers and Movers Electronic City provided safe car and bike transportation from Bengaluru to Delhi. Their team carefully loaded the vehicle onto an enclosed car carrier and delivered it spotless.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sandeep Verma',
    role: 'DOMESTIC MOVING',
    initials: 'SV',
    text: 'Shifted my 3BHK household items from Neeladri Nagar, Electronic City to Gurgaon with HSM Packers and Movers Electronic City. The crew used multi-layer bubble wrapping and heavy corrugated boxes for all electronics. Not a single scratch!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kavita Reddy',
    role: 'PACKING & UNPACKING',
    initials: 'KR',
    text: 'Extremely polite and hardworking team from HSM Packers and Movers Electronic City! They unpacked and arranged all heavy furniture in our new flat in Bellandur within a few hours. Highly recommended for house shifting in Bengaluru.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Vikramaditya Nair',
    role: 'CAR TRANSPORTATION',
    initials: 'VN',
    text: 'Booked vehicle carrier transport for my Honda City from Electronic City Phase 1 branch of HSM Packers and Movers to Kochi. Received real-time GPS tracking updates throughout transit. Delivered right on schedule!',
    rating: 5,
  },
  {
    id: 7,
    name: 'Pooja Deshmukh',
    role: 'WAREHOUSE STORAGE',
    initials: 'PD',
    text: 'Stored our complete household items in the secure Electronic City warehouse of HSM Packers and Movers Electronic City for 4 months during home renovation. Everything remained dust-free, dry, and in pristine condition.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Rajesh R. Menon',
    role: 'INTERNATIONAL MOVING',
    initials: 'RM',
    text: 'Phenomenal international relocation coordination by HSM Packers and Movers Electronic City from Bengaluru to Dubai. Handled customs documentation, heavy-duty wooden crating, and door delivery seamlessly.',
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
      {/* Big Watermark Title */}
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
                alt="HSM Packers and Movers Customer Service"
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
                <p>4.9 (15k Reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
