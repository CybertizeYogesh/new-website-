'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ target, suffix = '', label }: StatCounterProps) {
  const [count, setCount] = useState<string>('0');
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }

            let formatted: string;
            if (suffix.includes('k')) {
              formatted = current.toFixed(1);
              if (formatted.endsWith('.0')) formatted = parseInt(formatted).toString();
            } else {
              formatted = Math.floor(current).toString();
            }
            setCount(formatted);
          }, 16);

          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div className="stat-item" ref={counterRef}>
      <span className="stat-number">
        {count}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

interface GatiCounterCardProps {
  target: number;
  suffix?: string;
  label: string;
  iconClass: string;
}

export function GatiCounterCard({ target, suffix = '+', label, iconClass }: GatiCounterCardProps) {
  const [count, setCount] = useState<string>('0');
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }

            let formatted: string;
            if (suffix.includes('k')) {
              formatted = current.toFixed(1);
              if (formatted.endsWith('.0')) formatted = parseInt(formatted).toString();
            } else {
              formatted = Math.floor(current).toString();
            }
            setCount(formatted);
          }, 16);

          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div className="gati-counter-box" ref={counterRef}>
      {/* Corner Flag Accent */}
      <div className="gati-corner-flag"></div>

      {/* Left Icon Square Box */}
      <div className="gati-icon-square">
        <i className={iconClass}></i>
      </div>

      {/* Right Content Column */}
      <div className="gati-counter-body">
        <div className="gati-num-row">
          <span className="gati-num-val">{count}</span>
          <span className="gati-num-plus">{suffix}</span>
        </div>
        <span className="gati-counter-title">{label}</span>
      </div>
    </div>
  );
}
