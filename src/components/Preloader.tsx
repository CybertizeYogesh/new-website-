'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [counter, setCounter] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setCounter(100);
        clearInterval(timer);
        setTimeout(() => setIsLoaded(true), 150);
      } else {
        setCounter(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`preloader-overlay ${isLoaded ? 'preloader-hidden' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <Image 
            src="/assets/images/logo.png" 
            alt="Speed Ex relocation packers and movers" 
            width={180} 
            height={55}
            priority
            style={{ background: '#fff', padding: '6px 14px', borderRadius: '12px' }}
          />
        </div>
        <div className="preloader-bar-wrapper">
          <div className="preloader-bar" style={{ width: `${counter}%` }}></div>
        </div>
        <div className="preloader-counter">{counter}%</div>
        <div className="preloader-text">Loading Experience...</div>
      </div>
    </div>
  );
}
