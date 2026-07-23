import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ImageReveal from '@/components/ImageReveal';

export const metadata: Metadata = {
  title: 'Household Shifting Services Near Me | Best Packers and Movers Ahmedabad',
  description: 'Looking for top household shifting services near me in Ahmedabad? Speed Ex Relocation is the best packers and movers offering safe, stress-free home relocation movers near me. Call: 9624644006.',
  keywords: 'household shifting services, household shifting services near me, best packers and movers, packers and movers ahmedabad, relocation movers near me, shifting company',
};

export default function HouseRelocationPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/household-shifting.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Household Shifting Services</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>Household Shifting</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Expert Home Shifting</span>
              <h2>Premier Household Shifting Services Near Me in Ahmedabad</h2>
              <p>
                Moving to a new home is an exciting chapter, but finding reliable household shifting services near me can make all the difference. At Speed Ex Relocation Packers and Movers Ahmedabad, as the best packers and movers in the region, we ensure your residential relocation experience is completely smooth, safe, and stress-free.
              </p>
              <p>
                Our expert relocation movers near me handle everything from multi-layer packing of delicate items to loading and unpacking at your new destination with complete precision.
              </p>

              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>Why Choose Our Home Shifting?</h3>
              <ul className="service-list" style={{ marginTop: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Professional Packing:</strong> We use multi-layer packing for fragile items.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Safe Loading &amp; Unloading:</strong> Trained staff to handle heavy furniture with care.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Timely Delivery:</strong> We value your time and ensure on-time delivery.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Door-to-Door Service:</strong> Complete relocation solution from pickup to delivery.</div></li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book Now</Link>
            </div>
            <div className="about-image fade-in-left">
              <ImageReveal>
                <figure className="image-anime" data-cursor-text="HOUSE MOVE">
                  <div className="service-detail-img">
                    <img src="/assets/images/household-shifting.webp" alt="House Relocation" />
                  </div>
                </figure>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
