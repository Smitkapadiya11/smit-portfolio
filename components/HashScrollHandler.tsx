'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '@/context/LenisContext';

const NAV_HASH_KEY = 'navHash';

export default function HashScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();
  const attemptsRef = useRef(0);

  useEffect(() => {
    if (pathname !== '/') return;
    const raw = sessionStorage.getItem(NAV_HASH_KEY);
    if (!raw) return;

    attemptsRef.current = 0;

    const tryScroll = () => {
      const el = document.querySelector(raw);
      if (!el) {
        attemptsRef.current += 1;
        if (attemptsRef.current < 45) {
          requestAnimationFrame(tryScroll);
        }
        return;
      }

      if (lenis) {
        lenis.scrollTo(raw, {
          offset: -100,
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        });
      } else {
        const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'smooth' });
        setTimeout(() => ScrollTrigger.refresh(), 200);
      }
      sessionStorage.removeItem(NAV_HASH_KEY);
      setTimeout(() => ScrollTrigger.refresh(), 400);
    };

    const t = window.setTimeout(tryScroll, 0);
    return () => clearTimeout(t);
  }, [pathname, lenis]);

  return null;
}
