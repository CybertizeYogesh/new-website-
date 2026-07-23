'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MoversPackingVideoPlayer() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: 'Bubble Wrapping & Protection',
      desc: 'Employees wrapping furniture with multi-layer bubble wrap',
      icon: 'fa-box-open',
    },
    {
      title: 'Box Packing & Sealing',
      desc: 'Trained team packing items into heavy-duty corrugated boxes',
      icon: 'fa-tape',
    },
    {
      title: 'Truck Loading & Securing',
      desc: 'Loading packed items carefully into dedicated transport trucks',
      icon: 'fa-truck-ramp-box',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [stages.length]);

  return (
    <div
      className="movers-video-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '850px',
        margin: '2rem auto 0',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        background: '#0b2b3c',
      }}
    >
      {/* Real Moving Video Showcase Viewport */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
        {/* Background Auto-Playing Video Tag */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/movers-packing-loading.webp"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlaid Image Visual */}
        <Image
          src="/assets/images/movers-packing-loading.webp"
          alt="Packers and Movers Employees Packing Items and Loading Truck"
          fill
          style={{
            objectFit: 'cover',
            opacity: 0.85,
            transition: 'opacity 0.5s ease',
          }}
          priority
        />

        {/* Live Video Badge */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'rgba(11, 43, 60, 0.85)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff',
            padding: '6px 14px',
            borderRadius: '50px',
            fontSize: '0.82rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            zIndex: 10,
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#ff4d26',
              boxShadow: '0 0 10px #ff4d26',
              animation: 'pulse 1.5s infinite',
            }}
          ></span>
          PACKERS &amp; MOVERS TEAM IN ACTION
        </div>

        {/* Current Active Stage Overlay Box */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            right: '16px',
            background: 'rgba(11, 43, 60, 0.9)',
            backdropFilter: 'blur(16px)',
            padding: '12px 18px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 77, 38, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            color: '#ffffff',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: '#ff4d26',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              flexShrink: 0,
            }}
          >
            <i className={`fa-solid ${stages[activeStage].icon}`}></i>
          </div>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: '#ffffff' }}>
              Stage {activeStage + 1}: {stages[activeStage].title}
            </h4>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#cbd5e1' }}>
              {stages[activeStage].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
