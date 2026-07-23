import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Packing & Unpacking | Speed Ex relocation packers and movers',
  description: 'Professional packing & unpacking services using multi-layer bubble wrap, foam sheets, and sturdy carton boxes.',
  keywords: 'packing unpacking services, speed ex relocation packers and movers, household packing solutions',
  alternates: {
    canonical: 'https://speedexrelocation.com/packing-unpacking',
  },
};

export default function PackingUnpackingPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/packing-and-moving.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Packing &amp; Unpacking</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>Packing &amp; Unpacking</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Multi-Layer Protection</span>
              <h2>Professional Packing &amp; Unpacking Services</h2>
              <p>
                Proper packing is the backbone of safe relocation. At Speed Ex relocation packers and movers, we use industry-grade packing materials tailored to every item type.
              </p>
              <p>
                Our crew carefully wraps crockery, glassware, TVs, electronics, clothing, and furniture, and upon reaching your destination, assists with systematic unpacking and arrangement.
              </p>

              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>Our Packing Materials</h3>
              <ul className="service-list" style={{ marginTop: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Heavy-Duty Corrugated Boxes:</strong> Specialized size boxes for books, kitchenware &amp; apparel.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>High-Density Bubble &amp; Foam Wraps:</strong> Extra cushioning for delicate glass and electronics.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Unpacking &amp; Disposal:</strong> We unpack and help dispose of used packing waste at your request.</div></li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book Packing Services</Link>
            </div>
            <div className="about-image fade-in-left">
              <div className="service-detail-img" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/assets/images/packing-and-moving.webp" alt="Packing and Unpacking" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
