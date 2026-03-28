'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const MetallicParticles = dynamic(() => import('./MetallicParticles'), {
  ssr: false,
  loading: () => null,
});

const FloatingOctahedrons = dynamic(() => import('./FloatingOctahedrons'), {
  ssr: false,
  loading: () => null,
});

/** Four parallax strata; motion driven by --site-scroll on :root (Lenis). */
function ParallaxStrata() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 will-change-transform"
        aria-hidden
        style={{
          transform: 'translateY(calc(var(--site-scroll, 0) * -80px))',
          background:
            'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(240, 147, 43, 0.09) 0%, transparent 55%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 will-change-transform"
        aria-hidden
        style={{
          transform: 'translateY(calc(var(--site-scroll, 0) * 120px))',
          background:
            'radial-gradient(ellipse 90% 60% at 75% 60%, rgba(0, 245, 255, 0.06) 0%, transparent 50%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 will-change-transform"
        aria-hidden
        style={{
          transform: 'translateY(calc(var(--site-scroll, 0) * -140px))',
          background:
            'radial-gradient(ellipse 70% 50% at 15% 70%, rgba(255, 210, 63, 0.05) 0%, transparent 45%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 will-change-transform mix-blend-soft-light opacity-70"
        aria-hidden
        style={{
          transform: 'translateY(calc(var(--site-scroll, 0) * 200px))',
          background:
            'linear-gradient(180deg, transparent 0%, rgba(26, 26, 46, 0.5) 45%, rgba(10, 10, 15, 0.65) 100%)',
        }}
      />
    </>
  );
}

export default function CinematicBackground() {
  const [mounted, setMounted] = useState(false);
  const [heavy3d, setHeavy3d] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setHeavy3d(mq.matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-[var(--bg)]"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% -10%, rgba(240, 147, 43, calc(0.06 + var(--site-scroll, 0) * 0.04)) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 80% 90%, rgba(0, 245, 255, calc(0.04 + (1 - var(--site-scroll, 0)) * 0.04)) 0%, transparent 45%),
            var(--bg)
          `,
        }}
      />
      <ParallaxStrata />
      {mounted && heavy3d ? (
        <div className="absolute inset-0 [&_canvas]:!bg-transparent">
          <FloatingOctahedrons />
        </div>
      ) : null}
      {mounted ? (
        <div className="absolute inset-0 [&_canvas]:h-full [&_canvas]:w-full">
          <MetallicParticles />
        </div>
      ) : null}
    </div>
  );
}
