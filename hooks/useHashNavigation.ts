'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const NAV_HASH_KEY = 'navHash';

export function useHashNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  const goToHash = useCallback(
    (hash: string) => {
      const selector = hash.startsWith('#') ? hash : `#${hash}`;
      if (pathname === '/') {
        const el = document.querySelector(selector);
        if (!el) return;
        const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        sessionStorage.setItem(NAV_HASH_KEY, selector);
        router.push('/');
      }
    },
    [pathname, router]
  );

  return goToHash;
}
