'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextAnimeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TextAnime({ children, className = '', delay = 0 }: TextAnimeProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;
    
    // Create GSAP ScrollTrigger timeline for text reveal
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 40,
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.1,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={textRef} className={`text-anime-wrap ${className}`}>
      {children}
    </div>
  );
}
