'use client';

import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'HOUSE SHIFTING',
    initials: 'RS',
    text: 'HSM Packers and Movers Electronic City provided smooth home shifting from Neeladri Nagar to Whitefield. The moving team packed, loaded, and delivered our goods safely on time with care.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lankhshit',
    role: 'OFFICE RELOCATION',
    initials: 'LK',
    text: 'HSM Packers and Movers Electronic City delivered excellent corporate office relocation. Their team handled server racks, IT desks, and office furniture safely with zero operational downtime.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Pareek',
    role: 'VEHICLE TRANSPORT',
    initials: 'AP',
    text: 'HSM Packers and Movers Electronic City provided safe car and bike transportation from Bengaluru to Delhi. Their team loaded the vehicle onto an enclosed car carrier with zero scratches.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sandeep Verma',
    role: 'DOMESTIC MOVING',
    initials: 'SV',
    text: 'Shifted 3BHK household items from Neeladri Nagar to Gurgaon with HSM Packers and Movers Electronic City. The crew used multi-layer bubble wrapping and heavy boxes for all electronics.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kavita Reddy',
    role: 'PACKING & UNPACKING',
    initials: 'KR',
    text: 'Extremely polite team from HSM Packers and Movers Electronic City! Unpacked and arranged all heavy furniture in our new flat in Bellandur within hours. Highly recommended moving service.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Vikramaditya Nair',
    role: 'CAR TRANSPORTATION',
    initials: 'VN',
    text: 'Booked vehicle carrier transport for my Honda City from Electronic City branch of HSM Packers and Movers to Kochi. Received real-time tracking updates and on-time safe delivery.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Pooja Deshmukh',
    role: 'WAREHOUSE STORAGE',
    initials: 'PD',
    text: 'Stored our household items in the secure Electronic City warehouse of HSM Packers and Movers Electronic City for 4 months. Everything remained dust-free, dry, and in pristine condition.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Rajesh R. Menon',
    role: 'INTERNATIONAL MOVING',
    initials: 'RM',
    text: 'Phenomenal international relocation coordination by HSM Packers and Movers Electronic City from Bengaluru to Dubai. Handled customs clearance, wooden crating, and door delivery seamlessly.',
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

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonial-one" id="testimonials">
      <div className="testimonial-one__pattern"></div>

      <div className="container">
        <div className="row style-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          {/* Start Testimonial One Content */}
          <div className="col-xl-6">
            <div className="testimonial-one__content">
              <div className="big-title">
                <h2>TESTIMONIALS</h2>
              </div>

              <div className="sec-title">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text">
                    <h4>Client Testimonial</h4>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-plane-up"></i>
                  </div>
                </div>
                <h2 className="sec-title__title">
                  What Our Customers <br /> Say <span>About Us</span>
                </h2>
              </div>

              <div className="testimonial-one__carousel">
                {/* Start Testimonial One Single */}
                <div className="testimonial-one__single">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <div className="testimonial-one__single-inner">
                    <div className="author-box">
                      <div className="img-box">{current.initials}</div>
                      <div className="author-info">
                        <h2>{current.name}</h2>
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
                {/* End Testimonial One Single */}
              </div>

              {/* Slider Controls (Dots Only) */}
              <div className="gati-slider-controls">
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
              </div>
            </div>
          </div>
          {/* End Testimonial One Content */}

          {/* Start Testimonial One Img */}
          <div className="col-xl-6">
            <div className="testimonial-one__img">
              <div className="testimonial-one__img1">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                  alt="HSM Packers and Movers Customer Relocation Service"
                />
              </div>

              <div className="testimonial-one__img-author">
                <ul>
                  {testimonialsData.slice(0, 4).map((item) => (
                    <li key={item.id}>
                      <div className="img-box">{item.initials}</div>
                    </li>
                  ))}
                </ul>

                <div className="text-box">
                  <h2>Customer Satisfied</h2>
                  <p>4.9 (15k Reviews)</p>
                </div>
              </div>
            </div>
          </div>
          {/* End Testimonial One Img */}
        </div>
      </div>
    </section>
  );
}
