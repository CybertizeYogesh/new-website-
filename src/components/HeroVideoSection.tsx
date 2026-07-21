'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function HeroVideoSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoSources = [
    '/assets/videos/video-1.mp4',
    '/assets/videos/video-2.mp4',
    '/assets/videos/video-3.mp4',
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

      {/* Subtle Neutral Dark Overlay (Pushing videos slightly into background) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.84) 100%)',
          zIndex: 2,
        }}
      ></div>

      {/* Hero Foreground Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto' }}>
        <span
          className="badge fade-in-up"
          style={{
            display: 'inline-block',
            background: 'rgba(255, 77, 38, 0.95)',
            color: '#ffffff',
            padding: '0.55rem 1.35rem',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '0.85rem',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 18px rgba(255, 77, 38, 0.45)',
          }}
        >
          #1 Trusted Packers and Movers Ahmedabad
        </span>

        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.18,
            marginBottom: '1.35rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.8)',
          }}
        >
          Best Packers and Movers in{' '}
          <span
            style={{
              color: '#ff4d26',
              background: 'linear-gradient(135deg, #ff4d26 0%, #ff7a59 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ahmedabad
          </span>
        </h1>

        <p
          style={{
            color: 'rgba(241, 245, 249, 0.95)',
            fontSize: 'clamp(1.02rem, 2vw, 1.22rem)',
            maxWidth: '780px',
            margin: '0 auto 2.25rem',
            lineHeight: 1.7,
            textShadow: '0 2px 10px rgba(0,0,0,0.6)',
          }}
        >
          Speed Ex Relocation Packers and Movers delivers premier household shifting services, office moving services, and vehicle moving services near me with 100% safety &amp; punctuality.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1.1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3.25rem',
          }}
        >
          <a
            href="#quote"
            className="btn btn-primary"
            style={{
              background: '#ff4d26',
              color: '#ffffff',
              padding: '0.95rem 2.4rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 6px 22px rgba(255, 77, 38, 0.45)',
              transition: 'transform 0.3s ease',
            }}
          >
            Get Free Quote
          </a>
          <a
            href="tel:09624644006"
            className="btn btn-secondary"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(10px)',
              padding: '0.95rem 2.4rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            <i className="fa-solid fa-phone" style={{ marginRight: '8px', color: '#ff4d26' }}></i> Call: 9624644006
          </a>
        </div>

        {/* Hero Features / Stat Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '2rem',
            flexWrap: 'wrap',
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(16px)',
            padding: '1.25rem 2.5rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            maxWidth: '820px',
            margin: '0 auto',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          }}
        >
          <div>
            <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ff4d26', display: 'block', lineHeight: 1 }}>10+</span>
            <span style={{ fontSize: '0.82rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px', display: 'block' }}>Years Experience</span>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '2rem' }}>
            <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ff4d26', display: 'block', lineHeight: 1 }}>9.5k+</span>
            <span style={{ fontSize: '0.82rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px', display: 'block' }}>Happy Clients</span>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '2rem' }}>
            <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ff4d26', display: 'block', lineHeight: 1 }}>50+</span>
            <span style={{ fontSize: '0.82rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px', display: 'block' }}>Cities Covered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
