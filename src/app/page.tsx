import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import StatCounter from '@/components/StatCounter';
import TextAnime from '@/components/TextAnime';
import ImageReveal from '@/components/ImageReveal';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section - Dark Midnight Theme */}
      <header className="hero" id="home">
        <div className="hero-bg">
          <div className="overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="badge">#1 Trusted Packers &amp; Movers</span>
            <TextAnime>
              <h1>
                Moving Made <span className="text-gradient-accent">Seamless</span> &amp;{' '}
                <span className="text-gradient-white">Stress-Free</span>
              </h1>
            </TextAnime>
            <p>
              Expert house relocation, office shifting, and vehicle transport services across India and
              internationally. We handle your belongings with the utmost care and precision.
            </p>

            <div className="hero-stats">
              <StatCounter target={9.5} suffix="k+" label="Happy Clients" />
              <StatCounter target={10} suffix="+" label="Years Exp." />
              <StatCounter target={50} suffix="+" label="Cities" />
            </div>
          </div>

          <div className="hero-form">
            <QuoteForm />
          </div>
        </div>
      </header>

      {/* 2. Why Choose Us Section - Gradient Shading Pattern */}
      <section className="features section bg-gradient-shading">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title">Why Choose Us</span>
            <TextAnime>
              <h2>We Make Moving <span className="highlight">Easier</span></h2>
            </TextAnime>
            <p>Experience the difference with our premium relocation services designed for your peace of mind.</p>
          </div>

          <div className="grid-3">
            <div className="feature-card fade-in-up" data-cursor-text="WHY US">
              <div className="icon-box">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h3>Timely Delivery</h3>
              <p>We respect your schedule, ensuring on-time pickup, transit, and delivery for a stress-free experience.</p>
            </div>

            <div className="feature-card fade-in-up delay-1" data-cursor-text="SAFE">
              <div className="icon-box">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Safe &amp; Secure</h3>
              <p>We ensure your belongings are packed, transported, and delivered safely using modern equipment.</p>
            </div>

            <div className="feature-card fade-in-up delay-2" data-cursor-text="BEST RATE">
              <div className="icon-box">
                <i className="fa-solid fa-indian-rupee-sign"></i>
              </div>
              <h3>Affordable Pricing</h3>
              <p>Transparent, competitive rates providing excellent services without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section - Clean White Background */}
      <section className="services section" id="services" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title">Our Services</span>
            <TextAnime>
              <h2>Comprehensive Relocation Solutions</h2>
            </TextAnime>
            <p>From packing to unloading, storage, and vehicle transport, we offer complete solutions for every need.</p>
          </div>

          <div className="services-grid">
            <div className="service-card fade-in-up" data-cursor-text="EXPLORE">
              <ImageReveal>
                <figure className="image-anime">
                  <div className="service-img">
                    <Image src="/assets/images/home-relocation.png" alt="House Relocation" width={400} height={240} style={{ objectFit: 'cover' }} />
                  </div>
                </figure>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-house-chimney"></i></div>
                <h3>House Relocation</h3>
                <p>Move into your new home with ease as our expert team handles safe packing and secure transit.</p>
                <Link href="/house-relocation" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-1" data-cursor-text="EXPLORE">
              <ImageReveal>
                <figure className="image-anime">
                  <div className="service-img">
                    <Image src="/assets/images/office-relocation.png" alt="Office Shifting" width={400} height={240} style={{ objectFit: 'cover' }} />
                  </div>
                </figure>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-building"></i></div>
                <h3>Office Shifting</h3>
                <p>Minimize downtime with our organized office relocation services for equipment and furniture.</p>
                <Link href="/office-relocation" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-2" data-cursor-text="EXPLORE">
              <ImageReveal>
                <figure className="image-anime">
                  <div className="service-img">
                    <Image src="/assets/images/vehicle-transportation.jpg" alt="Vehicle Transport" width={400} height={240} style={{ objectFit: 'cover' }} />
                  </div>
                </figure>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-car-side"></i></div>
                <h3>Vehicle Transport</h3>
                <p>Safe and reliable car and bike transportation services to any destination across India.</p>
                <Link href="/car-transportation" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up" data-cursor-text="EXPLORE">
              <ImageReveal>
                <figure className="image-anime">
                  <div className="service-img">
                    <Image src="/assets/images/warehouse.jpg" alt="Warehouse Storage" width={400} height={240} style={{ objectFit: 'cover' }} />
                  </div>
                </figure>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-warehouse"></i></div>
                <h3>Warehouse Service</h3>
                <p>Secure storage solutions for your household or commercial goods for short or long terms.</p>
                <Link href="/warehouse-service" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-1" data-cursor-text="EXPLORE">
              <ImageReveal>
                <figure className="image-anime">
                  <div className="service-img">
                    <Image src="/assets/images/international.jpg" alt="International Moving" width={400} height={240} style={{ objectFit: 'cover' }} />
                  </div>
                </figure>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-plane-departure"></i></div>
                <h3>International Moving</h3>
                <p>Reliable relocation services across India and abroad, ensuring smooth international moves.</p>
                <Link href="/international-moving" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-2" data-cursor-text="EXPLORE">
              <ImageReveal>
                <figure className="image-anime">
                  <div className="service-img">
                    <Image src="/assets/images/packing-and-moving.png" alt="Packing Services" width={400} height={240} style={{ objectFit: 'cover' }} />
                  </div>
                </figure>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-box-open"></i></div>
                <h3>Packing &amp; Unpacking</h3>
                <p>Premium packing materials and expert techniques to ensure zero damage to your goods.</p>
                <Link href="/packing-unpacking" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Speedex Relocation Exact 'OUR WORK PROCESS' Section */}
      <section className="process-speedex-section section" id="process">
        <div className="container">
          <div className="section-header text-center">
            <div className="speedex-badge">
              <i className="fa-solid fa-truck-fast"></i> OUR WORK PROCESS
            </div>
            <h2 className="speedex-title">
              Smooth, efficient relocations at<br />every step
            </h2>
          </div>

          <div className="speedex-process-wrapper">
            {/* SVG Curved Dotted Connection Line - Meticulously Proportioned 140px Circle Arcs */}
            <svg className="speedex-curved-line" viewBox="0 0 1200 220" fill="none" preserveAspectRatio="none">
              {/* Arc 1: Circle 1 top-right to Circle 2 left-bottom */}
              <path
                d="M 194 96 C 250 45, 310 50, 369 88"
                stroke="#ff4d26"
                strokeWidth="2.2"
                strokeDasharray="5 5"
                markerEnd="url(#arrowhead)"
              />
              {/* Arc 2: Circle 2 right-bottom to Circle 3 left-top */}
              <path
                d="M 504 124 C 560 165, 620 160, 679 132"
                stroke="#ff4d26"
                strokeWidth="2.2"
                strokeDasharray="5 5"
                markerEnd="url(#arrowhead)"
              />
              {/* Arc 3: Circle 3 top-right to Circle 4 left-bottom */}
              <path
                d="M 814 96 C 870 45, 930 50, 989 88"
                stroke="#ff4d26"
                strokeWidth="2.2"
                strokeDasharray="5 5"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker id="arrowhead" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#ff4d26" />
                </marker>
              </defs>
            </svg>

            <div className="speedex-grid">
              {/* Step 1 */}
              <div className="speedex-step-item step-down">
                <div className="speedex-circle-node">
                  <div className="speedex-icon-inner">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      <path d="M15 2a4 4 0 0 1 4 4"/>
                      <circle cx="18" cy="4" r="1.5" fill="#ffffff" />
                    </svg>
                  </div>
                  <div className="speedex-number-badge">1</div>
                </div>
                <h3>Request A Callback</h3>
                <p>Reach out to us with your moving needs. Our team will contact you to understand your requirements in detail.</p>
              </div>

              {/* Step 2 */}
              <div className="speedex-step-item step-up">
                <div className="speedex-circle-node">
                  <div className="speedex-icon-inner">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a8 8 0 0 0-8 8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4a8 8 0 0 0-8-8z"/>
                      <path d="M4 10l5 7"/>
                      <path d="M20 10l-5 7"/>
                      <path d="M12 2v15"/>
                      <rect x="9" y="17" width="6" height="5" rx="1"/>
                    </svg>
                  </div>
                  <div className="speedex-number-badge">2</div>
                </div>
                <h3>Custom Move Planning</h3>
                <p>We design a tailored relocation strategy, including packing, transportation, and delivery schedules.</p>
              </div>

              {/* Step 3 */}
              <div className="speedex-step-item step-down">
                <div className="speedex-circle-node">
                  <div className="speedex-icon-inner">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                      <path d="m3.3 7 8.7 5 8.7-5"/>
                      <path d="M12 22V12"/>
                    </svg>
                  </div>
                  <div className="speedex-number-badge">3</div>
                </div>
                <h3>Professional Moving</h3>
                <p>Our skilled crew packs, loads, and transports your belongings with care using quality materials and tools.</p>
              </div>

              {/* Step 4 */}
              <div className="speedex-step-item step-up">
                <div className="speedex-circle-node">
                  <div className="speedex-icon-inner">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                      <path d="M2 12h20"/>
                      <path d="M12 8l4 4-4 4"/>
                    </svg>
                  </div>
                  <div className="speedex-number-badge">4</div>
                </div>
                <h3>Final Delivery &amp; Setup</h3>
                <p>We unpack and help arrange your items at your new location, ensuring a comfortable and stress-free start.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. About Section - Split Card Layout */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">About Company</span>
              <TextAnime>
                <h2>Trusted Relocation Partner Since 2012</h2>
              </TextAnime>
              <p>
                HSM Packers and Movers Electronic City is one of India’s most trusted relocation partners. We specialize in home, office, and vehicle shifting, ensuring every move is safe, seamless, and stress-free.
              </p>

              <ul className="about-list">
                <li><i className="fa-solid fa-circle-check"></i> 110+ Dedicated Team Members</li>
                <li><i className="fa-solid fa-circle-check"></i> 9500+ Satisfied Clients</li>
                <li><i className="fa-solid fa-circle-check"></i> 24/7 Customer Support</li>
                <li><i className="fa-solid fa-circle-check"></i> Real-time Tracking</li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Contact Us</Link>
            </div>
            <div className="about-image fade-in-left">
              <ImageReveal>
                <figure className="image-anime" data-cursor-text="ABOUT">
                  <div className="img-wrapper">
                    <img
                      src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop"
                      alt="About HSM Packers and Movers Electronic City"
                    />
                    <div className="exp-badge">
                      <span className="years">10+</span>
                      <span className="text">Years of Experience</span>
                    </div>
                  </div>
                </figure>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Client Testimonials - Dark Theme */}
      <section className="section bg-dark-grid">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title" style={{ background: 'rgba(255, 77, 38, 0.2)', color: '#ff6b8b' }}>Testimonials</span>
            <TextAnime>
              <h2 style={{ color: '#ffffff' }}>What Our Clients Say</h2>
            </TextAnime>
          </div>
          <div className="grid-3">
            <div className="feature-card fade-in-up" data-cursor-text="REVIEW" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
              <div style={{ color: '#f59e0b', fontSize: '1.2rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{ color: '#cbd5e1' }}>"Excellent service! The team was professional, punctual, and handled all my furniture with great care. Highly recommended for house shifting."</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '45px', height: '45px', background: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>RK</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: '#ffffff' }}>Rahul Kumar</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Bengaluru to Delhi</span>
                </div>
              </div>
            </div>

            <div className="feature-card fade-in-up delay-1" data-cursor-text="REVIEW" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
              <div style={{ color: '#f59e0b', fontSize: '1.2rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{ color: '#cbd5e1' }}>"I used their bike transport service from Pune to Bangalore. I received my bike in perfect condition and on time. Great job team!"</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '45px', height: '45px', background: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>AS</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: '#ffffff' }}>Amit Sharma</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Pune to Bangalore</span>
                </div>
              </div>
            </div>

            <div className="feature-card fade-in-up delay-2" data-cursor-text="REVIEW" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
              <div style={{ color: '#f59e0b', fontSize: '1.2rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{ color: '#cbd5e1' }}>"Very professional office relocation service. They minimized our downtime and set up everything perfectly at the new office."</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '45px', height: '45px', background: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>PS</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: '#ffffff' }}>Priya Singh</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Corporate Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Suburbs Network Section */}
      <section className="section bg-gradient-shading">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title">Areas We Serve</span>
            <TextAnime>
              <h2>Packers and Movers in Bengaluru – All Areas</h2>
            </TextAnime>
            <p>HSM Packers and Movers Electronic City provides reliable house shifting, office relocation and vehicle transport across all areas of Bengaluru.</p>
          </div>

          <div className="cities-grid">
            <Link href="/packers-and-movers-in-electronic-city" className="city-card fade-in-up" data-cursor-text="AREA">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Electronic City</h3>
            </Link>
            <Link href="/packers-and-movers-in-begur" className="city-card fade-in-up delay-1" data-cursor-text="AREA">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Begur</h3>
            </Link>
            <Link href="/packers-and-movers-in-bellandur" className="city-card fade-in-up delay-2" data-cursor-text="AREA">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Bellandur</h3>
            </Link>
            <Link href="/packers-and-movers-in-marathahalli" className="city-card fade-in-up" data-cursor-text="AREA">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Marathahalli</h3>
            </Link>
            <Link href="/packers-and-movers-in-bommasandra" className="city-card fade-in-up delay-1" data-cursor-text="AREA">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Bommasandra</h3>
            </Link>
            <Link href="/packers-and-movers-in-hulimangala" className="city-card fade-in-up delay-2" data-cursor-text="AREA">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Hulimangala</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-light))', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready to Move?</h2>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
            Get a free, no-obligation quote today and experience the best relocation service in India.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#quote" className="btn btn-primary" data-cursor-text="QUOTE">Get a Quote</Link>
            <a href="tel:09980303730" className="btn btn-outline" data-cursor-text="CALL">Call Us Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
