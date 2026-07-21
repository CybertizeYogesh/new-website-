import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import StatCounter from '@/components/StatCounter';
import TextAnime from '@/components/TextAnime';
import ImageReveal from '@/components/ImageReveal';
import GatiTestimonials from '@/components/GatiTestimonials';

export default function HomePage() {
  return (
    <>
      {/* Hidden SVG Marker Definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <defs>
          <marker id="arrowhead" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#ff4d26" />
          </marker>
        </defs>
      </svg>

      {/* 1. Fullscreen Video Background Hero Section (Without Quote Form) */}
      <header className="hero hero-video-header" id="home" style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '150px 0 100px', textAlign: 'center' }}>
        {/* Logistics Video Background (HTML5 & HD Embed) */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden', pointerEvents: 'none' }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=1&loop=1&playlist=5qap5aO4i9A&controls=0&showinfo=0&rel=0&playsinline=1"
            title="Packers and Movers Logistics Video"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              minWidth: '177.77vh',
              minHeight: '56.25vw',
              transform: 'translate(-50%, -50%) scale(1.2)',
              border: 0,
              opacity: 0.85,
            }}
            allow="autoplay; encrypted-media"
          />
        </div>

        {/* Dark Overlay for Ultra High Text Legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(11, 43, 60, 0.7) 0%, rgba(11, 43, 60, 0.94) 100%)',
            zIndex: 2,
          }}
        ></div>

        {/* Hero Content Centered */}
        <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '900px', margin: '0 auto' }}>
          <div className="hero-text" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="badge" style={{ background: 'rgba(255, 77, 38, 0.25)', color: '#ffffff', border: '1px solid rgba(255, 77, 38, 0.6)', padding: '0.6rem 1.5rem', fontSize: '0.95rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.5rem' }}>
              #1 Trusted Packers &amp; Movers Electronic City
            </span>
            <TextAnime>
              <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 5.2vw, 4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', textShadow: '0 4px 25px rgba(0,0,0,0.6)' }}>
                Professional Packers &amp; Movers <br />
                <span className="text-gradient-accent" style={{ color: '#ff4d26' }}>Safe, Timely</span> &amp;{' '}
                <span className="text-gradient-white">Insured Shifting</span>
              </h1>
            </TextAnime>
            <p style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '1.18rem', lineHeight: 1.75, maxWidth: '780px', margin: '0 auto 2.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Expert house relocation, corporate office shifting, car &amp; bike transport, and secure storage solutions across Bengaluru and major Indian cities.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="tel:09980303730" className="btn btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem', fontWeight: 800 }}>
                <i className="fa-solid fa-phone-volume" style={{ marginRight: '8px' }}></i> Call 099803 03730
              </a>
              <Link href="/contact-us" className="btn btn-outline" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', borderColor: '#ffffff' }}>
                <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i> Contact Us
              </Link>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <StatCounter target={9.5} suffix="k+" label="Happy Clients" />
              <StatCounter target={10} suffix="+" label="Years Exp." />
              <StatCounter target={50} suffix="+" label="Cities" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. Why Choose Us Section - Modern 2-Column Split Showcase with why.gif */}
      <section className="features section" style={{ backgroundColor: '#f8fafc', padding: '90px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Column: why.gif Image Showcase */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(11, 43, 60, 0.12)', border: '4px solid #ffffff', background: '#ffffff' }}>
                <Image 
                  src="/assets/images/why.gif" 
                  alt="Why Choose HSM Packers and Movers" 
                  width={550} 
                  height={420} 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  unoptimized
                />
              </div>

              {/* Floating Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                background: 'linear-gradient(135deg, #0b2b3c, #164e63)',
                color: '#ffffff',
                padding: '1.25rem 1.75rem',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(255, 77, 38, 0.3)',
                border: '2px solid #ff4d26',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#ff4d26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  <i className="fa-solid fa-award"></i>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>10+ Years Trust</h4>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: '#cbd5e1' }}>100% Satisfied Shifting</p>
                </div>
              </div>
            </div>

            {/* Right Column: Why Choose Us Content & 2x2 Feature Grid */}
            <div>
              <span className="sub-title" style={{ marginBottom: '1rem' }}>WHY CHOOSE US</span>
              <TextAnime>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#0b2b3c', lineHeight: 1.25, marginBottom: '1.25rem' }}>
                  We Make Relocation <span className="highlight" style={{ color: '#ff4d26' }}>Easier &amp; Stress-Free</span>
                </h2>
              </TextAnime>
              <p style={{ color: '#64748b', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                HSM Packers and Movers Electronic City delivers premier home shifting, office relocation, and vehicle transportation with maximum safety and punctuality.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div style={{ background: '#ffffff', padding: '1.35rem 1.15rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(255, 77, 38, 0.1)', color: '#ff4d26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '0.85rem' }}>
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0b2b3c', marginBottom: '0.35rem' }}>Timely Delivery</h3>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                    Punctual pickup, dedicated GPS transit, and on-time delivery guaranteed.
                  </p>
                </div>

                <div style={{ background: '#ffffff', padding: '1.35rem 1.15rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(11, 43, 60, 0.08)', color: '#0b2b3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '0.85rem' }}>
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0b2b3c', marginBottom: '0.35rem' }}>Safe &amp; Secure</h3>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                    Multi-layer bubble wrap & wooden crating for 100% item protection.
                  </p>
                </div>

                <div style={{ background: '#ffffff', padding: '1.35rem 1.15rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(11, 43, 60, 0.08)', color: '#0b2b3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '0.85rem' }}>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0b2b3c', marginBottom: '0.35rem' }}>Affordable Rates</h3>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                    Transparent competitive pricing upfront with zero hidden charges.
                  </p>
                </div>

                <div style={{ background: '#ffffff', padding: '1.35rem 1.15rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(255, 77, 38, 0.1)', color: '#ff4d26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '0.85rem' }}>
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0b2b3c', marginBottom: '0.35rem' }}>24/7 Support</h3>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                    Personal move manager guiding your shifting process end-to-end.
                  </p>
                </div>
              </div>
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

                  {/* Relative SVG Connector 1 -> Step 2 (Back/tail cut by 30%) */}
                  <div className="speedex-connector-arc connector-1">
                    <svg viewBox="0 0 175 95" fill="none">
                      <path
                        d="M 45 42 C 75 15, 125 10, 168 55"
                        stroke="#ff4d26"
                        strokeWidth="2.2"
                        strokeDasharray="5 5"
                        markerEnd="url(#arrowhead)"
                      />
                    </svg>
                  </div>
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

                  {/* Relative SVG Connector 2 -> Step 3 (Back/tail cut by 30%) */}
                  <div className="speedex-connector-arc connector-2">
                    <svg viewBox="0 0 175 95" fill="none">
                      <path
                        d="M 45 48 C 75 78, 125 80, 168 35"
                        stroke="#ff4d26"
                        strokeWidth="2.2"
                        strokeDasharray="5 5"
                        markerEnd="url(#arrowhead)"
                      />
                    </svg>
                  </div>
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

                  {/* Relative SVG Connector 3 -> Step 4 (Back/tail cut by 30%) */}
                  <div className="speedex-connector-arc connector-3">
                    <svg viewBox="0 0 175 95" fill="none">
                      <path
                        d="M 45 42 C 75 15, 125 10, 168 55"
                        stroke="#ff4d26"
                        strokeWidth="2.2"
                        strokeDasharray="5 5"
                        markerEnd="url(#arrowhead)"
                      />
                    </svg>
                  </div>
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

      {/* 6. Client Testimonials - Gati Safe Packer 100% Match Slider */}
      <GatiTestimonials />

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

      {/* 8. The HSM Assurance - Modern Asymmetric Split Design */}
      <section className="section" style={{ background: '#f8fafc', padding: '95px 0', borderTop: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Column: Brand Statement & Highlights */}
            <div>
              <span className="sub-title" style={{ marginBottom: '1.25rem' }}>THE HSM ASSURANCE</span>
              <TextAnime>
                <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 2.8rem)', fontWeight: 800, color: '#0b2b3c', lineHeight: 1.25, marginBottom: '1.25rem' }}>
                  Safety, Timeliness & Complete Peace of Mind
                </h2>
              </TextAnime>
              <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Every house shifting, office relocation, and vehicle transit project with HSM Packers and Movers Electronic City is backed by strict quality controls, trained moving staff, and insured handling.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: '#ffffff', padding: '0.9rem 1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ff4d26', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span style={{ fontWeight: 700, color: '#0b2b3c', fontSize: '0.98rem' }}>ISO Certified Packing Standards & Wooden Crating</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: '#ffffff', padding: '0.9rem 1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ff4d26', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span style={{ fontWeight: 700, color: '#0b2b3c', fontSize: '0.98rem' }}>Live GPS Shipment Tracking & Real-Time Updates</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href="#quote" className="btn btn-primary" data-cursor-text="QUOTE">Get Free Quote</Link>
                <a href="tel:09980303730" className="btn btn-navy" data-cursor-text="CALL">Call 099803 03730</a>
              </div>
            </div>

            {/* Right Column: 2x2 Staggered Feature Metric Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: '#ffffff', padding: '2rem 1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(11, 43, 60, 0.05)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(255, 77, 38, 0.1)', color: '#ff4d26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0b2b3c', marginBottom: '0.4rem' }}>100% Goods Safety</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Multi-layer bubble wrap & heavy boxes ensure zero damage.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '2rem 1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(11, 43, 60, 0.05)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(11, 43, 60, 0.08)', color: '#0b2b3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                  <i className="fa-solid fa-file-invoice-dollar"></i>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0b2b3c', marginBottom: '0.4rem' }}>Fixed Fair Price</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Upfront transparent quotation with zero surprise fees.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '2rem 1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(11, 43, 60, 0.05)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(11, 43, 60, 0.08)', color: '#0b2b3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0b2b3c', marginBottom: '0.4rem' }}>Express Transit</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Dedicated GPS-tracked trucks for fast, punctual deliveries.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '2rem 1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(11, 43, 60, 0.05)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(255, 77, 38, 0.1)', color: '#ff4d26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                  <i className="fa-solid fa-user-gear"></i>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0b2b3c', marginBottom: '0.4rem' }}>Move Manager</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Dedicated single point contact for 24/7 personal support.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
