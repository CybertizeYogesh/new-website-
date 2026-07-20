import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import StatCounter from '@/components/StatCounter';
import RateTable from '@/components/RateTable';
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
            <div className="feature-card fade-in-up">
              <div className="icon-box">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h3>Timely Delivery</h3>
              <p>We respect your schedule, ensuring on-time pickup, transit, and delivery for a stress-free experience.</p>
            </div>

            <div className="feature-card fade-in-up delay-1">
              <div className="icon-box">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Safe &amp; Secure</h3>
              <p>We ensure your belongings are packed, transported, and delivered safely using modern equipment.</p>
            </div>

            <div className="feature-card fade-in-up delay-2">
              <div className="icon-box">
                <i className="fa-solid fa-indian-rupee-sign"></i>
              </div>
              <h3>Affordable Pricing</h3>
              <p>Transparent, competitive rates providing excellent services without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section - Dark Grid Pattern */}
      <section className="services section bg-dark-grid" id="services">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title" style={{ background: 'rgba(255, 59, 92, 0.2)', color: '#ff6b8b' }}>Our Services</span>
            <TextAnime>
              <h2 style={{ color: '#ffffff' }}>Comprehensive Relocation Solutions</h2>
            </TextAnime>
            <p style={{ color: '#cbd5e1' }}>From packing to unloading, storage, and vehicle transport, we offer complete solutions for every need.</p>
          </div>

          <div className="services-grid">
            <div className="service-card fade-in-up">
              <ImageReveal>
                <div className="service-img">
                  <Image src="/assets/images/home-relocation.png" alt="House Relocation" width={400} height={240} style={{ objectFit: 'cover' }} />
                </div>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-house-chimney"></i></div>
                <h3>House Relocation</h3>
                <p>Move into your new home with ease as our expert team handles safe packing and secure transit.</p>
                <Link href="/house-relocation" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-1">
              <ImageReveal>
                <div className="service-img">
                  <Image src="/assets/images/office-relocation.png" alt="Office Shifting" width={400} height={240} style={{ objectFit: 'cover' }} />
                </div>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-building"></i></div>
                <h3>Office Shifting</h3>
                <p>Minimize downtime with our organized office relocation services for equipment and furniture.</p>
                <Link href="/office-relocation" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-2">
              <ImageReveal>
                <div className="service-img">
                  <Image src="/assets/images/vehicle-transportation.jpg" alt="Vehicle Transport" width={400} height={240} style={{ objectFit: 'cover' }} />
                </div>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-car-side"></i></div>
                <h3>Vehicle Transport</h3>
                <p>Safe and reliable car and bike transportation services to any destination across India.</p>
                <Link href="/car-transportation" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up">
              <ImageReveal>
                <div className="service-img">
                  <Image src="/assets/images/warehouse.jpg" alt="Warehouse Storage" width={400} height={240} style={{ objectFit: 'cover' }} />
                </div>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-warehouse"></i></div>
                <h3>Warehouse Service</h3>
                <p>Secure storage solutions for your household or commercial goods for short or long terms.</p>
                <Link href="/warehouse-service" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-1">
              <ImageReveal>
                <div className="service-img">
                  <Image src="/assets/images/international.jpg" alt="International Moving" width={400} height={240} style={{ objectFit: 'cover' }} />
                </div>
              </ImageReveal>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-plane-departure"></i></div>
                <h3>International Moving</h3>
                <p>Reliable relocation services across India and abroad, ensuring smooth international moves.</p>
                <Link href="/international-moving" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-2">
              <ImageReveal>
                <div className="service-img">
                  <Image src="/assets/images/packing-and-moving.png" alt="Packing Services" width={400} height={240} style={{ objectFit: 'cover' }} />
                </div>
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

      {/* 4. Pricing Matrix Dashboard */}
      <RateTable />

      {/* 5. How We Work Process Timeline */}
      <section className="process section bg-gradient-shading" id="process">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title">How We Work</span>
            <TextAnime>
              <h2>Simple 4-Step Process</h2>
            </TextAnime>
            <p>We've optimized our workflow to ensure the most efficient and stress-free moving experience for you.</p>
          </div>

          <div className="process-steps">
            <div className="step-card fade-in-up">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Book Order</h4>
                <p>Contact us via phone or website to schedule your move.</p>
              </div>
            </div>
            <div className="step-card fade-in-up delay-1">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>We Pack</h4>
                <p>Our expert team arrives and packs your belongings securely using premium materials.</p>
              </div>
            </div>
            <div className="step-card fade-in-up delay-2">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>We Move</h4>
                <p>Safe transportation to your new destination using our closed container trucks.</p>
              </div>
            </div>
            <div className="step-card fade-in-up delay-3">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Delivery</h4>
                <p>On-time delivery, unloading, and unpacking assistance at your new place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. About Section - Split Card Layout */}
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
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials - Dark Theme */}
      <section className="section bg-dark-grid">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title" style={{ background: 'rgba(255, 59, 92, 0.2)', color: '#ff6b8b' }}>Testimonials</span>
            <TextAnime>
              <h2 style={{ color: '#ffffff' }}>What Our Clients Say</h2>
            </TextAnime>
          </div>
          <div className="grid-3">
            <div className="feature-card fade-in-up" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
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

            <div className="feature-card fade-in-up delay-1" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
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

            <div className="feature-card fade-in-up delay-2" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
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

      {/* 8. Suburbs Network Section */}
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
            <Link href="/packers-and-movers-in-electronic-city" className="city-card fade-in-up">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Electronic City</h3>
            </Link>
            <Link href="/packers-and-movers-in-begur" className="city-card fade-in-up delay-1">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Begur</h3>
            </Link>
            <Link href="/packers-and-movers-in-bellandur" className="city-card fade-in-up delay-2">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Bellandur</h3>
            </Link>
            <Link href="/packers-and-movers-in-marathahalli" className="city-card fade-in-up">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Marathahalli</h3>
            </Link>
            <Link href="/packers-and-movers-in-bommasandra" className="city-card fade-in-up delay-1">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Bommasandra</h3>
            </Link>
            <Link href="/packers-and-movers-in-hulimangala" className="city-card fade-in-up delay-2">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Hulimangala</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Call to Action Banner */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-light))', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready to Move?</h2>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
            Get a free, no-obligation quote today and experience the best relocation service in India.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#quote" className="btn btn-primary">Get a Quote</Link>
            <a href="tel:09980303730" className="btn btn-outline">Call Us Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
