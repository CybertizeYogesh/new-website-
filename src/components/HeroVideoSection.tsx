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

      {/* Light Transparent Overlay (Leaves video bright & vibrant) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.45) 100%)',
          zIndex: 2,
        }}
      ></div>

      {/* Hero Foreground Content - Vibrant Video & Crisp Text */}
      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
        {/* Frosted Glass Pill Badge */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              padding: '0.55rem 1.4rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4d26', display: 'inline-block', boxShadow: '0 0 8px #ff4d26' }}></span>
            Speed Ex Relocation Packers and Movers
          </span>
        </div>

        {/* High-Impact Main Heading */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2.4rem, 5.2vw, 4.1rem)',
            fontWeight: 800,
            lineHeight: 1.16,
            marginBottom: '1.5rem',
            letterSpacing: '-0.5px',
            textShadow: '0 3px 18px rgba(0, 0, 0, 0.75)',
          }}
        >
          Best Packers and Movers in{' '}
          <span
            style={{
              color: '#ff4d26',
              textShadow: '0 2px 10px rgba(255, 77, 38, 0.5)',
            }}
          >
            Ahmedabad
          </span>
        </h1>

        {/* Crisp Subtitle Card over Light Overlay */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.28)',
            border: '1px solid rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(8px)',
            padding: '1.35rem 2rem',
            borderRadius: '16px',
            maxWidth: '760px',
            margin: '0 auto',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          }}
        >
          <p
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1rem, 2vw, 1.18rem)',
              margin: 0,
              lineHeight: 1.7,
              fontWeight: 500,
              textShadow: '0 1px 5px rgba(0, 0, 0, 0.6)',
            }}
          >
            Delivering top-rated <strong>household shifting services</strong>, <strong>office moving services</strong>, and <strong>vehicle moving services</strong> near me with maximum safety &amp; complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
