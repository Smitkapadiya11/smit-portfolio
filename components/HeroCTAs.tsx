'use client';

import Link from 'next/link';
import HashLink from './HashLink';

export default function HeroCTAs() {
  return (
    <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row">
      <Link
        href="/contact"
        className="bg-primary px-8 py-4 text-center font-heading text-sm font-bold uppercase tracking-widest text-black transition-all hover:shadow-[0_0_28px_rgba(240,147,43,0.45)]"
        data-cursor="hover"
      >
        Deploy Your AI Agent →
      </Link>
      <HashLink
        href="/#work"
        className="border border-[rgba(240,147,43,0.35)] px-8 py-4 text-center font-heading text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary/10"
        data-cursor="hover"
      >
        See My Work
      </HashLink>
    </div>
  );
}
