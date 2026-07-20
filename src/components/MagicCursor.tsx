'use client';

import React, { useEffect, useState } from 'react';

export default function MagicCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Smooth lerp for outer ring
    let animationFrameId: number;
    const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;

    let currentX = -100;
    let currentY = -100;

    const render = () => {
      currentX = lerp(currentX, position.x, 0.18);
      currentY = lerp(currentY, position.y, 0.18);
      setRingPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Check hover states on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, select, textarea, .btn, .service-card, .feature-card, .city-card')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="cursor-dot" 
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      ></div>
      <div 
        className={`cursor-ring ${isHovered ? 'cursor-hover' : ''}`} 
        style={{ transform: `translate3d(${ringPosition.x - 20}px, ${ringPosition.y - 20}px, 0)` }}
      ></div>
    </>
  );
}
