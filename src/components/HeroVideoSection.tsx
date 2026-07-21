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

      {/* Asymmetric Gradient Overlay (Protects left text while letting right video shine bright) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(11, 43, 60, 0.92) 0%, rgba(15, 23, 42, 0.72) 48%, rgba(15, 23, 42, 0.28) 100%)',
          zIndex: 2,
        }}
      ></div>

      {/* Main Hero Container matching omrelocationmoversandpackers.in */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Left Content Area (banner-area-2) */}
          <div style={{ maxWidth: '680px', textAlign: 'left' }}>
            {/* Sub-Title with line indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
              <span style={{ width: '30px', height: '3px', background: '#ff4d26', borderRadius: '2px' }}></span>
              <span
                style={{
                  color: '#ff4d26',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}
              >
                PROVIDE THE BEST RELOCATION
              </span>
            </div>

            {/* Banner Main Title */}
            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              Our Best Relocation Services &amp; Consulting in{' '}
              <span style={{ color: '#ff4d26' }}>Ahmedabad</span>
            </h1>

            {/* Banner Description Text */}
            <p
              style={{
                color: '#cbd5e1',
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '620px',
              }}
            >
              We handle safe, professional household shifting, office moving, and vehicle transport. Delivering 100% stress-free relocation solutions tailored for your peace of mind.
            </p>

            {/* Action Row: Primary Button + Client Avatars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <a
                href="#quote"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#ff4d26',
                  color: '#ffffff',
                  padding: '1rem 2.2rem',
                  borderRadius: '6px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(255, 77, 38, 0.4)',
                  transition: 'all 0.3s ease',
                }}
              >
                VIEW SERVICES &nbsp;| &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </a>

              {/* Satisfied Clients Avatar Cluster */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex' }}>
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                    alt="Client 1"
                    style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #ffffff', objectFit: 'cover' }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    alt="Client 2"
                    style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #ffffff', objectFit: 'cover', marginLeft: '-14px' }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                    alt="Client 3"
                    style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #ffffff', objectFit: 'cover', marginLeft: '-14px' }}
                  />
                </div>
                <div>
                  <h6 style={{ color: '#ffffff', margin: 0, fontWeight: 800, fontSize: '0.95rem' }}>9.5k+</h6>
                  <span style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Satisfied Clients</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side Vertical Social Bar (Desktop Only, Pinned Closer to Right Edge) */}
      <div
        className="d-none d-xl-flex"
        style={{
          position: 'absolute',
          right: '1.25rem',
          top: '52%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          background: 'rgba(15, 23, 42, 0.55)',
          padding: '1.5rem 0.85rem',
          borderRadius: '50px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#" style={{ color: '#ffffff', fontSize: '1.05rem', transition: 'color 0.2s ease' }} aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" style={{ color: '#ffffff', fontSize: '1.05rem', transition: 'color 0.2s ease' }} aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" style={{ color: '#ffffff', fontSize: '1.05rem', transition: 'color 0.2s ease' }} aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#" style={{ color: '#ffffff', fontSize: '1.05rem', transition: 'color 0.2s ease' }} aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div style={{ width: '1px', height: '30px', background: 'rgba(255, 255, 255, 0.25)' }}></div>
        <span style={{ writingMode: 'vertical-rl', color: '#ff4d26', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '2px' }}>FOLLOW US</span>
      </div>
    </section>
  );
}
