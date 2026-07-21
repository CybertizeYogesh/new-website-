import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ImageReveal from '@/components/ImageReveal';
import StatCounter from '@/components/StatCounter';
import TextAnime from '@/components/TextAnime';

export const metadata: Metadata = {
  title: 'About Us | Speed Ex Relocation Packers and Movers',
  description: 'Learn about Speed Ex Relocation Packers and Movers, our mission, vision, and the expert team behind Indias trusted relocation services.',
  keywords: 'about speed ex relocation, trusted packers movers ahmedabad, experienced movers aslali, reliable relocation company ahmedabad',
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
                Speed Ex Relocation Packers and Movers has established itself as a premier relocation service provider in India. With over 10+ years of experience, we understand the emotional and physical challenges that come with moving. Our goal is to shoulder that burden so you can focus on the excitement of your new beginning.
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

      {/* Key Stats & Achievements Counter Bar - Clean Light Modern Design */}
      <section className="section" style={{ backgroundColor: '#f8fafc', padding: '90px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="sub-title" style={{ color: '#ff4d26', background: 'rgba(255, 77, 38, 0.08)', border: '1px solid rgba(255, 77, 38, 0.2)' }}>
              OUR MILESTONES
            </span>
            <TextAnime>
              <h2 style={{ color: '#0f172a', fontSize: 'clamp(2.1rem, 3.5vw, 2.7rem)', fontWeight: 800 }}>
                Proven Track Record of Operational Excellence
              </h2>
            </TextAnime>
            <p style={{ color: '#64748b', maxWidth: '650px', margin: '0 auto' }}>
              Delivering reliability, safety, and customer satisfaction across India with measurable achievements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.75rem' }}>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '2.5rem 1.5rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', transition: 'all 0.3s ease' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(255, 77, 38, 0.1)', color: '#ff4d26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 1.25rem' }}>
                <i className="fa-solid fa-award"></i>
              </div>
              <StatCounter target={10} suffix="+" label="Years Experience" />
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '2.5rem 1.5rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', transition: 'all 0.3s ease' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(255, 77, 38, 0.1)', color: '#ff4d26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 1.25rem' }}>
                <i className="fa-solid fa-face-smile"></i>
              </div>
              <StatCounter target={9.5} suffix="k+" label="Happy Clients" />
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '2.5rem 1.5rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', transition: 'all 0.3s ease' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(255, 77, 38, 0.1)', color: '#ff4d26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 1.25rem' }}>
                <i className="fa-solid fa-user-shield"></i>
              </div>
              <StatCounter target={110} suffix="+" label="Team Members" />
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '2.5rem 1.5rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', transition: 'all 0.3s ease' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(255, 77, 38, 0.1)', color: '#ff4d26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 1.25rem' }}>
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <StatCounter target={50} suffix="+" label="Cities Covered" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
