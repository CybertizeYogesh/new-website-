import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ImageReveal from '@/components/ImageReveal';

export const metadata: Metadata = {
  title: 'House Relocation | HSM Packers and Movers Electronic City',
  description: 'Best House Relocation services. Safe and secure packing and moving of your household goods.',
  keywords: 'house relocation bengaluru, home shifting electronic city, house shifting services bengaluru, 1BHK 2BHK 3BHK shifting bengaluru, residential relocation bengaluru',
};

export default function HouseRelocationPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/household-shifting.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>House Relocation</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>House Relocation</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Expert Home Shifting</span>
              <h2>Hassle-free House Relocation Services</h2>
              <p>
                Moving to a new home is an exciting chapter, but the process of packing and moving can be overwhelming. At HSM Packers and Movers Electronic City, we make your house shifting experience smooth, safe, and stress-free. Our expert team handles everything from packing your delicate items to unloading them at your new destination.
              </p>
              <p>
                We use high-quality packing materials like bubble wrap, carton boxes, and foam sheets to ensure zero damage during transit.
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
                    <img src="/assets/images/household-shifting.jpg" alt="House Relocation" />
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
