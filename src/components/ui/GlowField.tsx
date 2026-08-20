'use client';

import { type ReactNode } from 'react';

const forms = [
  {
    key: 'a',
    style: {
      width: '560px',
      height: '560px',
      top: '-140px',
      right: '-120px',
      background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 65%)',
      animation: 'liquid-drift-a 18s ease-in-out infinite',
    },
  },
  {
    key: 'b',
    style: {
      width: '500px',
      height: '500px',
      bottom: '-160px',
      left: '-120px',
      background: 'radial-gradient(circle, rgba(24,24,24,0.045) 0%, transparent 65%)',
      animation: 'liquid-drift-b 22s ease-in-out infinite',
      animationDelay: '-6s',
    },
  },
  {
    key: 'c',
    style: {
      width: '440px',
      height: '440px',
      top: '18%',
      left: '48%',
      background: 'radial-gradient(circle, rgba(91,127,191,0.06) 0%, transparent 65%)',
      animation: 'liquid-drift-c 26s ease-in-out infinite',
      animationDelay: '-12s',
    },
  },
];

interface BreathingBackgroundProps {
  className?: string;
  children?: ReactNode;
}

export function BreathingBackground({ className = '', children }: BreathingBackgroundProps) {
  return (
    <div className={`breathing-bg ${className}`} aria-hidden="true">
      {forms.map((form) => (
        <div key={form.key} className="liquid-form" style={form.style} />
      ))}
      {children}
    </div>
  );
}