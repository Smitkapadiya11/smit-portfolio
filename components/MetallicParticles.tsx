'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { loadParticlesLinksInteraction } from '@tsparticles/interaction-particles-links';
import type { ISourceOptions } from '@tsparticles/engine';

export default function MetallicParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadParticlesLinksInteraction(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: 0 },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: typeof window !== 'undefined' && window.innerWidth < 768 ? 28 : 56,
          density: { enable: true, width: 1400, height: 1400 },
        },
        color: { value: ['#f0932b', '#ffd23f', '#00f5ff'] },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.45, max: 0.85 } },
        size: { value: { min: 0.8, max: 2.2 } },
        links: {
          enable: true,
          distance: 130,
          color: '#f0932b',
          opacity: 0.32,
          width: 1,
          triangles: { enable: false },
        },
        move: {
          enable: true,
          speed: 0.35,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'bounce' },
        },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 0.75, blink: false, color: { value: '#ffd23f' } },
          },
        },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      className="absolute inset-0 h-full w-full"
      style={{ opacity: 0.75 }}
      options={options}
    />
  );
}
