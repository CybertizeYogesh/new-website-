'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ImageReveal({ children, className = '' }: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const img = container.querySelector('img');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      tl.fromTo(
        container,
        { xPercent: -100, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: 1.1, ease: 'power2.out' }
      );

      if (img) {
        tl.fromTo(
          img,
          { xPercent: 100, scale: 1.15 },
          { xPercent: 0, scale: 1, duration: 1.1, ease: 'power2.out' },
          '-=1.1'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`reveal-container ${className}`} style={{ overflow: 'hidden', position: 'relative' }}>
      {children}
    </div>
  );
}
