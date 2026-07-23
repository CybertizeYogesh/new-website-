import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import StatCounter from '@/components/StatCounter';

interface LocationLandingPageProps {
  locationName: string;
}

export default function LocationLandingPage({ locationName }: LocationLandingPageProps) {
  return (
    <>
      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-bg">
          <div className="overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text fade-in-up">
            <span className="badge">#1 Best Packers and Movers Ahmedabad</span>
            <h1>
              Packers and Movers in <span className="text-gradient">{locationName}</span>
            </h1>
            <p>
              Looking for the best packers and movers in {locationName}? As a premier transport logistics company and shifting company, Speed Ex Relocation provides top household shifting services near me, office moving services, and vehicle moving services with 100% safety.
            </p>

            <div className="hero-stats">
              <StatCounter target={9.5} suffix="k+" label="Happy Clients" />
              <StatCounter target={10} suffix="+" label="Years Exp." />
              <StatCounter target={50} suffix="+" label="Cities" />
            </div>
          </div>

          <div className="hero-form fade-in-up delay-1">
            <QuoteForm />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title">Why Choose Us</span>
            <h2>We Make Moving in {locationName} <span className="highlight">Easier</span></h2>
            <p>Experience the difference with our premium relocation services designed for your peace of mind.</p>
          </div>

          <div className="grid-3">
            <div className="feature-card fade-in-up">
              <div className="icon-box"><i className="fa-solid fa-clock"></i></div>
              <h3>Timely Delivery</h3>
              <p>We respect your schedule, ensuring on-time pickup, transit, and delivery for a stress-free experience.</p>
            </div>
            <div className="feature-card fade-in-up delay-1">
              <div className="icon-box"><i className="fa-solid fa-shield-halved"></i></div>
              <h3>Safe &amp; Secure</h3>
              <p>We ensure your belongings are packed, transported, and delivered safely using modern equipment.</p>
            </div>
            <div className="feature-card fade-in-up delay-2">
              <div className="icon-box"><i className="fa-solid fa-indian-rupee-sign"></i></div>
              <h3>Affordable Pricing</h3>
              <p>Transparent, competitive rates providing excellent services without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section bg-light" id="services">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title">Our Services in {locationName}</span>
            <h2>Comprehensive Relocation Solutions</h2>
            <p>From packing to unloading, storage, and vehicle transport, we offer complete solutions for every need in {locationName}.</p>
          </div>

          <div className="services-grid">
            <div className="service-card fade-in-up">
              <div className="service-img">
                <Image src="/assets/images/home-relocation.webp" alt="House Relocation" width={400} height={240} style={{ objectFit: 'cover' }} />
              </div>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-house-chimney"></i></div>
                <h3>House Relocation</h3>
                <p>Move into your new home in {locationName} with ease as our expert team handles safe packing and secure transit.</p>
                <Link href="/house-relocation" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-1">
              <div className="service-img">
                <Image src="/assets/images/office-relocation.webp" alt="Office Shifting" width={400} height={240} style={{ objectFit: 'cover' }} />
              </div>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-building"></i></div>
                <h3>Office Shifting</h3>
                <p>Minimize downtime with organized office relocation services for corporate hubs in and around {locationName}.</p>
                <Link href="/office-relocation" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card fade-in-up delay-2">
              <div className="service-img">
                <Image src="/assets/images/vehicle-transportation.webp" alt="Vehicle Transport" width={400} height={240} style={{ objectFit: 'cover' }} />
              </div>
              <div className="service-content">
                <div className="service-icon"><i className="fa-solid fa-car-side"></i></div>
                <h3>Vehicle Transport</h3>
                <p>Safe and reliable car and bike transportation services from {locationName} to any destination across India.</p>
                <Link href="/car-transportation" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Network Cities */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title">Other Areas We Serve</span>
            <h2>Packers and Movers in Ahmedabad &amp; Gujarat Hubs</h2>
          </div>

          <div className="cities-grid">
            <Link href="/packers-and-movers-in-electronic-city" className="city-card">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Aslali Circle</h3>
            </Link>
            <Link href="/packers-and-movers-in-begur" className="city-card">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>SG Highway</h3>
            </Link>
            <Link href="/packers-and-movers-in-bellandur" className="city-card">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Satellite</h3>
            </Link>
            <Link href="/packers-and-movers-in-marathahalli" className="city-card">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Prahlad Nagar</h3>
            </Link>
            <Link href="/packers-and-movers-in-bommasandra" className="city-card">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Narol</h3>
            </Link>
            <Link href="/packers-and-movers-in-hulimangala" className="city-card">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Changodar</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
