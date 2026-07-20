'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function MagicCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Enable custom mouse follower for desktop pointer devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsEnabled(true);
    } else {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    let animId: number;
    const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;

    const loop = () => {
      ringX = lerp(ringX, mouseX, 0.18);
      ringY = lerp(ringY, mouseY, 0.18);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 24}px, ${ringY - 24}px, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElem = target.closest('a, button, input, select, textarea, .btn, .service-card, .feature-card, .city-card, .image-anime') as HTMLElement;

      if (hoverElem) {
        setIsHovered(true);
        if (hoverElem.closest('.service-card')) {
          setCursorText('EXPLORE');
        } else if (hoverElem.closest('.image-anime, img')) {
          setCursorText('VIEW');
        } else if (hoverElem.closest('.btn, button, a')) {
          setCursorText('GO');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div 
        ref={ringRef} 
        className={`cursor-ring ${isHovered ? 'cursor-hover' : ''}`}
      >
        {cursorText && <span className="cursor-text-badge">{cursorText}</span>}
      </div>
    </>
  );
}
