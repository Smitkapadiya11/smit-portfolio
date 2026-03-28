'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '@/context/LenisContext';

const NAV_HASH_KEY = 'navHash';

export function useHashNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  const goToHash = useCallback(
    (hash: string) => {
      const selector = hash.startsWith('#') ? hash : `#${hash}`;
      if (pathname === '/') {
        const el = document.querySelector(selector);
        if (!el) return;
        if (lenis) {
          lenis.scrollTo(selector, {
            offset: -100,
            onComplete: () => ScrollTrigger.refresh(),
          });
        } else {
          const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
          setTimeout(() => ScrollTrigger.refresh(), 200);
        }
        setTimeout(() => ScrollTrigger.refresh(), 350);
      } else {
        sessionStorage.setItem(NAV_HASH_KEY, selector);
        router.push('/');
      }
    },
    [pathname, router, lenis]
  );

  return goToHash;
}
