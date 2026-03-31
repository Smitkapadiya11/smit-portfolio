'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const NAV_HASH_KEY = 'navHash';

export default function HashScrollHandler() {
  const pathname = usePathname();
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
        if (attemptsRef.current < 45) requestAnimationFrame(tryScroll);
        return;
      }

      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
      sessionStorage.removeItem(NAV_HASH_KEY);
    };

    const t = window.setTimeout(tryScroll, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
