import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ImageReveal from '@/components/ImageReveal';
import StatCounter, { GatiCounterCard } from '@/components/StatCounter';
import TextAnime from '@/components/TextAnime';

export const metadata: Metadata = {
  title: 'About Us | Gati Packers Movers',
  description: 'Learn about Gati Packers Movers, our mission, vision, and the expert team behind Indias trusted relocation services.',
  keywords: 'about gati packers movers, trusted packers movers gurugram, experienced movers gurugram, reliable relocation company gurugram',
  alternates: {
    canonical: 'https://speedexrelocation.com/about-us',
  },
};

export default function AboutUsPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/about-hero.webp')`,
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
                      src="/assets/images/about-showcase.webp"
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
                Gati Packers Movers has established itself as a premier relocation service provider in India. With over 10+ years of experience, we understand the emotional and physical challenges that come with moving. Our goal is to shoulder that burden so you can focus on the excitement of your new beginning.
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            <GatiCounterCard
              target={110}
              suffix="+"
              label="DISTRIBUTION CENTER"
              iconClass="fa-solid fa-boxes-packing"
            />
            <GatiCounterCard
              target={50}
              suffix="+"
              label="CITIES &amp; REGIONS"
              iconClass="fa-solid fa-earth-americas"
            />
            <GatiCounterCard
              target={10}
              suffix="+"
              label="YEARS OF EXPERIENCE"
              iconClass="fa-solid fa-award"
            />
            <GatiCounterCard
              target={9.5}
              suffix="k+"
              label="HAPPY CLIENTS"
              iconClass="fa-solid fa-users-gear"
            />
          </div>
        </div>
      </section>
    </>
  );
}
