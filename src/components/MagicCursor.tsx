'use client';

import React, { useEffect, useState } from 'react';

export default function MagicCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;
    const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;

    let currentX = -100;
    let currentY = -100;

    const render = () => {
      currentX = lerp(currentX, position.x, 0.2);
      currentY = lerp(currentY, position.y, 0.2);
      setRingPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest('[data-cursor-text], a, button, input, select, textarea, .btn, .service-card, .feature-card, .city-card, .image-anime') as HTMLElement;

      if (cursorTarget) {
        setIsHovered(true);
        const explicitText = cursorTarget.getAttribute('data-cursor-text');
        if (explicitText) {
          setCursorText(explicitText);
        } else if (cursorTarget.closest('.service-card')) {
          setCursorText('EXPLORE');
        } else if (cursorTarget.closest('.image-anime, img')) {
          setCursorText('VIEW');
        } else if (cursorTarget.closest('.btn, button, a')) {
          setCursorText('GO');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
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
        className={`cursor-ring ${isHovered ? 'cursor-hover' : ''} ${cursorText ? 'has-text' : ''}`} 
        style={{ transform: `translate3d(${ringPosition.x - 24}px, ${ringPosition.y - 24}px, 0)` }}
      >
        {cursorText && <span className="cursor-text-badge">{cursorText}</span>}
      </div>
    </>
  );
}
