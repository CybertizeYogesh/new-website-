'use client';

import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'HOUSE SHIFTING',
    image: '/assets/images/testimonial-img.png',
    text: 'HSM Packers and Movers Electronic City provided smooth home shifting from Neeladri Nagar to Whitefield. The moving team packed, loaded, and delivered our goods safely on time with care.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lankhshit',
    role: 'OFFICE RELOCATION',
    image: '/assets/images/C-1.jpg',
    text: 'HSM Packers and Movers Electronic City delivered excellent corporate office relocation. Their team handled server racks, IT desks, and office furniture safely with zero operational downtime.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Pareek',
    role: 'VEHICLE TRANSPORT',
    image: '/assets/images/C-2.jpg',
    text: 'HSM Packers and Movers Electronic City provided safe car and bike transportation from Bengaluru to Delhi. Their team loaded the vehicle onto an enclosed car carrier with zero scratches.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sandeep Verma',
    role: 'DOMESTIC MOVING',
    image: '/assets/images/C-3.jpg',
    text: 'Shifted 3BHK household items from Neeladri Nagar to Gurgaon with HSM Packers and Movers Electronic City. The crew used multi-layer bubble wrapping and heavy boxes for all electronics.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kavita Reddy',
    role: 'PACKING & UNPACKING',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    text: 'Extremely polite team from HSM Packers and Movers Electronic City! Unpacked and arranged all heavy furniture in our new flat in Bellandur within hours. Highly recommended moving service.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Vikramaditya Nair',
    role: 'CAR TRANSPORTATION',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    text: 'Booked vehicle carrier transport for my Honda City from Electronic City branch of HSM Packers and Movers to Kochi. Received real-time tracking updates and on-time safe delivery.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Pooja Deshmukh',
    role: 'WAREHOUSE STORAGE',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    text: 'Stored our household items in the secure Electronic City warehouse of HSM Packers and Movers Electronic City for 4 months. Everything remained dust-free, dry, and in pristine condition.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Rajesh R. Menon',
    role: 'INTERNATIONAL MOVING',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    text: 'Phenomenal international relocation coordination by HSM Packers and Movers Electronic City from Bengaluru to Dubai. Handled customs clearance, wooden crating, and door delivery seamlessly.',
    rating: 5,
  },
];

const faqsData = [
  {
    question: 'What services does HSM Packers and Movers Electronic City provide?',
    answer: 'We offer end-to-end relocation solutions including local house shifting, corporate office relocation, car & bike transport, heavy-duty packing & unpacking, domestic intercity moving, warehouse storage, and international moving across Bengaluru and major Indian cities.',
  },
  {
    question: 'How are the moving charges calculated for house shifting?',
    answer: 'Shifting charges depend on the volume of items, total distance, quality of packing materials required (bubble wrap, corrugated boxes, wooden crating), truck size, floor level, and elevator availability. We provide transparent upfront quotes with zero hidden fees.',
  },
  {
    question: 'Do you provide transit insurance for household items?',
    answer: 'Yes, we offer full-value transit insurance options covering accidental damage or unforeseen incidents during transportation, ensuring complete protection for all your valuable belongings.',
  },
  {
    question: 'How early should I book HSM Packers and Movers before shifting?',
    answer: 'We recommend booking 2 to 4 days in advance for local shifting within Electronic City or Bengaluru, and 5 to 7 days prior for intercity or long-distance moves to secure your preferred date and dedicated truck.',
  },
  {
    question: 'Are fragile electronics and glassware packed with extra protection?',
    answer: 'Absolutely! We utilize heavy-duty multi-layer bubble wrap, foam corner guards, stretch film, and sturdy corrugated boxes or custom wooden crates for all delicate electronics, glass items, and high-value furniture.',
  },
];

export default function GatiTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonial-one" id="testimonials">
      <div className="testimonial-one__pattern"></div>

      <div className="container">
        <div className="row style-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
          {/* Left Column: Testimonials Carousel */}
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
                      <div className="img-box">
                        <img src={current.image} alt={current.name} />
                      </div>
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
          {/* End Left Column */}

          {/* Right Column: Frequently Asked Questions (FAQ) */}
          <div className="col-xl-6">
            <div className="sec-title" style={{ paddingBottom: '25px' }}>
              <div className="sec-title__tagline">
                <div className="line"></div>
                <div className="text">
                  <h4>Got Questions?</h4>
                </div>
                <div className="icon">
                  <i className="fa-solid fa-circle-question"></i>
                </div>
              </div>
              <h2 className="sec-title__title">
                Frequently Asked <span>Questions</span>
              </h2>
            </div>

            <div className="gati-faq-wrapper">
              {faqsData.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`gati-faq-item ${isOpen ? 'active' : ''}`}>
                    <button
                      className="gati-faq-header"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <div className="gati-faq-icon">
                        <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="gati-faq-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </section>
  );
}
