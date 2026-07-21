'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import StatCounter from '@/components/StatCounter';
import TextAnime from '@/components/TextAnime';

export default function HeroVideoSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoSources = [
    '/assets/videos/video-1.mp4',
    '/assets/videos/video-2.mp4',
  ];
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [currentVideoIndex]);

  return (
    <section
      className="relocation-video-section"
      id="home"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '160px 0 100px',
        textAlign: 'center',
      }}
    >
      {/* Background Video Loop (Transitions between video 1 and video 2) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden', pointerEvents: 'none' }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            transition: 'opacity 0.8s ease-in-out',
          }}
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        </video>
      </div>

      {/* Subtle Neutral Dark Overlay (Zero Blue Shade) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.68) 100%)',
          zIndex: 2,
        }}
      ></div>

      {/* Overlaid Hero Content */}
      <div className="container hero-content" style={{ position: 'relative', zIndex: 3, maxWidth: '950px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', margin: '0 auto' }}>
          
          {/* Tagline Badge */}
          <span
            style={{
              background: 'rgba(255, 77, 38, 0.25)',
              color: '#ffffff',
              border: '1.5px solid rgba(255, 77, 38, 0.7)',
              padding: '0.65rem 1.6rem',
              fontSize: '0.95rem',
              fontWeight: 800,
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1.75rem',
              backdropFilter: 'blur(10px)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            <i className="fa-solid fa-truck-ramp-box" style={{ color: '#ff4d26' }}></i>
            HSM Packers and Movers Electronic City
          </span>

          {/* Overlaid Main Headline */}
          <TextAnime>
            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                textShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
                letterSpacing: '-0.02em',
              }}
            >
              Seamless Household &amp; Commercial <br />
              <span style={{ color: '#ff4d26' }}>Relocation Services</span> Across India
            </h1>
          </TextAnime>

          {/* Overlaid Subtitle */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.92)',
              fontSize: '1.2rem',
              lineHeight: 1.8,
              maxWidth: '820px',
              margin: '0 auto 2.5rem',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)',
            }}
          >
            Backed by 10+ years of logistics excellence. We provide 100% insured house shifting, corporate office relocation, car &amp; bike transportation, and climate-controlled warehouse storage.
          </p>

          {/* 4 Feature Badges Pill Strip */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem 1.5rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '0.6rem 1.25rem', borderRadius: '50px', color: '#ffffff', fontSize: '0.92rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-circle-check" style={{ color: '#ff4d26' }}></i> 100% Insured Shifting
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '0.6rem 1.25rem', borderRadius: '50px', color: '#ffffff', fontSize: '0.92rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-circle-check" style={{ color: '#ff4d26' }}></i> Multi-Layer Packing
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '0.6rem 1.25rem', borderRadius: '50px', color: '#ffffff', fontSize: '0.92rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-circle-check" style={{ color: '#ff4d26' }}></i> GPS Tracked Vehicles
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '0.6rem 1.25rem', borderRadius: '50px', color: '#ffffff', fontSize: '0.92rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-circle-check" style={{ color: '#ff4d26' }}></i> 24/7 Personal Move Manager
            </div>
          </div>

          {/* Overlaid CTA Buttons */}
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a
              href="tel:09980303730"
              className="btn btn-primary"
              style={{
                padding: '1.1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 800,
                borderRadius: '50px',
                boxShadow: '0 10px 30px rgba(255, 77, 38, 0.4)',
              }}
            >
              <i className="fa-solid fa-phone-volume" style={{ marginRight: '10px' }}></i> Call 099803 03730
            </a>
            <Link
              href="/contact-us"
              className="btn btn-outline"
              style={{
                padding: '1.1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#ffffff',
                borderColor: '#ffffff',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <i className="fa-solid fa-paper-plane" style={{ marginRight: '10px' }}></i> Contact Us
            </Link>
          </div>

          {/* Video Switcher Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '2rem' }}>
            {videoSources.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentVideoIndex(idx)}
                style={{
                  width: idx === currentVideoIndex ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: idx === currentVideoIndex ? '#ff4d26' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                aria-label={`Switch to Video ${idx + 1}`}
              />
            ))}
          </div>

          {/* Overlaid Stat Counter Strip */}
          <div
            style={{
              display: 'flex',
              gap: '3rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.18)',
            }}
          >
            <StatCounter target={9.5} suffix="k+" label="Happy Clients" />
            <StatCounter target={10} suffix="+" label="Years Exp." />
            <StatCounter target={50} suffix="+" label="Cities" />
          </div>

        </div>
      </div>
    </section>
  );
}
