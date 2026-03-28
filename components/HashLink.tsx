'use client';

import Link from 'next/link';
import { useHashNavigation } from '@/hooks/useHashNavigation';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function HashLink({ href, className, children }: Props) {
  const goToHash = useHashNavigation();

  if (!href.startsWith('/#')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  const hash = href.replace('/', '');

  return (
    <Link
      href={href}
      scroll={false}
      prefetch={false}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        goToHash(hash);
      }}
    >
      {children}
    </Link>
  );
}
