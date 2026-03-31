"use client";

import { useEffect, useRef } from 'react';
import { LenisContext } from '@/context/LenisContext';
import HashScrollHandler from './HashScrollHandler';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = progressBarRef.current;
    if (!bar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <LenisContext.Provider value={null}>
      <HashScrollHandler />
      {/* Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        id="progress-bar"
      />
      <div className="relative z-[1] flex min-h-screen flex-col">
        {children}
      </div>
    </LenisContext.Provider>
  );
}
