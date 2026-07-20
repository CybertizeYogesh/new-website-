import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ImageReveal from '@/components/ImageReveal';

export const metadata: Metadata = {
  title: 'About Us | HSM Packers and Movers Electronic City',
  description: 'Learn about HSM Packers and Movers Electronic City, our mission, vision, and the expert team behind Indias trusted relocation services.',
  keywords: 'about HSM packers and movers, trusted packers movers bengaluru, experienced movers bengaluru, reliable relocation company bengaluru, best moving company electronic city',
};

export default function AboutUsPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>About Us</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span style={{ color: 'var(--accent-color)' }}>About Us</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image fade-in-left">
              <ImageReveal>
                <figure className="image-anime" data-cursor-text="OUR TEAM">
                  <div className="img-wrapper">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                      alt="Our Team"
                    />
                  </div>
                </figure>
              </ImageReveal>
            </div>
            <div className="about-content fade-in-right">
              <span className="sub-title">Who We Are</span>
              <h2>Leading the Way in Relocation Services</h2>
              <p>
                HSM Packers and Movers Electronic City has established itself as a premier relocation service provider in India. With over 10+ years of experience, we understand the emotional and physical challenges that come with moving. Our goal is to shoulder that burden so you can focus on the excitement of your new beginning.
              </p>
              <p>
                We combine cutting-edge logistics technology with a human touch. Our team is rigorously trained in the art of packing, handling, and transporting goods of all kinds—from fragile heirlooms to heavy industrial equipment.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-color)' }}>Our Mission</h4>
                  <p style={{ fontSize: '0.9rem' }}>
                    To provide safe, reliable, and affordable relocation solutions that exceed customer expectations every time.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent-color)' }}>Our Vision</h4>
                  <p style={{ fontSize: '0.9rem' }}>
                    To be India's most trusted household and commercial logistics partner, known for integrity and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="process-steps">
            <div className="step-card fade-in-up">
              <div className="step-number" style={{ border: 'none', fontSize: '2.5rem', width: 'auto', height: 'auto' }}>10+</div>
              <div className="step-content">
                <h4>Years Experience</h4>
              </div>
            </div>
            <div className="step-card fade-in-up delay-1">
              <div className="step-number" style={{ border: 'none', fontSize: '2.5rem', width: 'auto', height: 'auto' }}>9.5k+</div>
              <div className="step-content">
                <h4>Happy Clients</h4>
              </div>
            </div>
            <div className="step-card fade-in-up delay-2">
              <div className="step-number" style={{ border: 'none', fontSize: '2.5rem', width: 'auto', height: 'auto' }}>110+</div>
              <div className="step-content">
                <h4>Team Members</h4>
              </div>
            </div>
            <div className="step-card fade-in-up delay-3">
              <div className="step-number" style={{ border: 'none', fontSize: '2.5rem', width: 'auto', height: 'auto' }}>50+</div>
              <div className="step-content">
                <h4>Cities Covered</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
