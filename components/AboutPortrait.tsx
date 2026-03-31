'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AboutPortrait() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="glass-card mx-auto flex h-[400px] w-full max-w-[340px] items-center justify-center text-center font-mono text-xs uppercase tracking-widest text-muted lg:mx-0">
        Add <span className="ml-1 text-primary">public/about.jpg</span>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[340px] lg:mx-0">
      <div
        className="glass-card overflow-hidden p-1 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(240,147,43,0.2)]"
        style={{ borderRadius: '20px' }}
      >
        <Image
          src="/about.jpg"
          alt="Smit Kapadiya — AI automation engineer"
          width={340}
          height={440}
          className="h-auto w-full rounded-[16px] object-cover"
          style={{ filter: 'grayscale(1) contrast(1.05) brightness(0.95)' }}
          priority
          onError={() => setFailed(true)}
        />
        {/* Color overlay */}
        <div
          className="pointer-events-none absolute inset-1 rounded-[16px]"
          style={{
            background: 'linear-gradient(135deg, rgba(240,147,43,0.15) 0%, transparent 50%, rgba(0,245,255,0.06) 100%)',
          }}
        />
      </div>
    </div>
  );
}
