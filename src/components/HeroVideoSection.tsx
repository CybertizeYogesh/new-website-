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

      {/* Hero Foreground Content - Clean Modern Design */}
      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Sleek Pill Badge */}
        <div style={{ marginBottom: '1.75rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(12px)',
              color: '#ffffff',
              padding: '0.6rem 1.4rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4d26', display: 'inline-block', boxShadow: '0 0 10px #ff4d26' }}></span>
            Speed Ex Relocation Packers and Movers
          </span>
        </div>

        {/* High-Impact Main Heading */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.5px',
            textShadow: '0 4px 25px rgba(0,0,0,0.85)',
          }}
        >
          Best Packers and Movers in{' '}
          <span
            style={{
              color: '#ff4d26',
              background: 'linear-gradient(135deg, #ff4d26 0%, #ff8566 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ahmedabad
          </span>
        </h1>

        {/* Clean Sub-Heading / Description Card */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.55)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(12px)',
            padding: '1.5rem 2rem',
            borderRadius: '20px',
            maxWidth: '750px',
            margin: '0 auto',
            boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
          }}
        >
          <p
            style={{
              color: '#e2e8f0',
              fontSize: 'clamp(1rem, 2vw, 1.18rem)',
              margin: 0,
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            Delivering top-rated <strong>household shifting services</strong>, <strong>office moving services</strong>, and <strong>vehicle moving services</strong> near me with maximum safety, transparent pricing, and complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
