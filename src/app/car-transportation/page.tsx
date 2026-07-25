import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Car Transportation Companies in Gurgaon | Gati Packers Movers',
  description: 'Looking for premier car transportation companies in Gurgaon? Gati Packers Movers offers enclosed car container carriers & vehicle moving services. Call: 8796757472.',
  keywords: 'car transportation companies, vehicle moving services, best packers and movers in gurgaon, top packers and movers in gurgaon, car carrier services',
  alternates: {
    canonical: 'https://speedexrelocation.com/car-transportation',
  },
};

export default function CarTransportationPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/vehicle-transportation.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Car Transportation Companies &amp; Vehicle Moving</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>Car Transportation Companies</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Automobile Carrier Logistics</span>
              <h2>Premier Car Transportation Companies &amp; Vehicle Moving Services</h2>
              <p>
                Transporting your car across cities requires trustworthy logistics. As one of the top car transportation companies and best packers and movers in Gurgaon, Gati Packers Movers utilizes specialized enclosed car container trucks for 100% scratch-free vehicle moving services.
              </p>
              <p>
                Our drivers and handlers undergo specialized training for loading, anchoring, and driving heavy vehicle trailers safely across all national highways.
              </p>

              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>Car Moving Highlights</h3>
              <ul className="service-list" style={{ marginTop: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Closed Container Trailers:</strong> Complete weather and dust protection during long transit.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Doorstep Pickup &amp; Delivery:</strong> Hassle-free car inspection and handoff at your home.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Full Transit Coverage:</strong> Comprehensive insurance protection against unforeseen road risks.</div></li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book Car Transport</Link>
            </div>
            <div className="about-image fade-in-left">
              <div className="service-detail-img" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/assets/images/vehicle-transportation.webp" alt="Car Transportation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
