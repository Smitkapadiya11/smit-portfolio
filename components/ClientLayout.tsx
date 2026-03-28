"use client";

import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
import { LenisContext } from '@/context/LenisContext';
import HashScrollHandler from './HashScrollHandler';

const CinematicBackground = dynamic(() => import('./CinematicBackground'), {
  ssr: false,
  loading: () => null,
});

gsap.registerPlugin(ScrollTrigger);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);
  const mouseRafRef = useRef<number | null>(null);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const lenisInstance = new Lenis({
      duration: isMobile ? 0.45 : 1.12,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile,
      wheelMultiplier: 1,
      touchMultiplier: isMobile ? 1.5 : 2,
    });

    setLenis(lenisInstance);

    const onLenisScroll = () => {
      ScrollTrigger.update();
      const p = lenisInstance.progress ?? 0;
      document.documentElement.style.setProperty(
        '--site-scroll',
        Math.min(1, Math.max(0, p)).toFixed(5)
      );
    };

    lenisInstance.on('scroll', onLenisScroll);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    onLenisScroll();

    progressTweenRef.current = gsap.to('#progress-bar', {
      scaleX: 1,
      transformOrigin: 'left center',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.15,
      },
    });

    const resizeLenis = () => {
      lenisInstance.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', resizeLenis);

    let scrollLoopArmed = false;
    const onWheelLoop = (e: WheelEvent) => {
      if (scrollLoopArmed) return;
      if (lenisInstance.progress < 0.985 || e.deltaY <= 0) return;
      scrollLoopArmed = true;
      e.preventDefault();
      lenisInstance.scrollTo(0, {
        duration: 1.85,
        lock: true,
        onComplete: () => {
          scrollLoopArmed = false;
        },
      });
    };
    window.addEventListener('wheel', onWheelLoop, { passive: false });

    const onMouseMove = (e: MouseEvent) => {
      if (mouseRafRef.current !== null) return;
      mouseRafRef.current = requestAnimationFrame(() => {
        mouseRafRef.current = null;
        const cx = e.clientX / window.innerWidth - 0.5;
        const cy = e.clientY / window.innerHeight - 0.5;
        document.documentElement.style.setProperty('--mx', cx.toFixed(4));
        document.documentElement.style.setProperty('--my', cy.toFixed(4));
        document.documentElement.style.setProperty('--warp-rx', `${(-cy * 3.8).toFixed(2)}deg`);
        document.documentElement.style.setProperty('--warp-ry', `${(cx * 4.5).toFixed(2)}deg`);
        document.documentElement.style.setProperty('--mx-n', (cx * 16).toFixed(3));
        document.documentElement.style.setProperty('--my-n', (cy * 16).toFixed(3));
      });
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeLenis);
      window.removeEventListener('wheel', onWheelLoop);
      window.removeEventListener('mousemove', onMouseMove);
      if (mouseRafRef.current !== null) cancelAnimationFrame(mouseRafRef.current);
      progressTweenRef.current?.scrollTrigger?.kill();
      progressTweenRef.current?.kill();
      progressTweenRef.current = null;
      lenisInstance.off('scroll', onLenisScroll);
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <HashScrollHandler />
      {/* Scroll Progress Bar */}
      <div
        id="progress-bar"
        className="fixed top-0 left-0 z-[9999] h-[2px] w-full origin-left scale-x-0 bg-primary pointer-events-none shadow-[0_0_14px_rgba(240,147,43,0.55)]"
      />

      <CinematicBackground />

      <div
        id="content-warp"
        className="relative z-[1] isolate flex min-h-screen flex-col bg-transparent will-change-transform"
      >
        {children}
      </div>
    </LenisContext.Provider>
  );
}
