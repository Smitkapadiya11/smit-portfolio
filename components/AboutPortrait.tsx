'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AboutPortrait() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="relative mx-auto flex h-[480px] w-full max-w-[360px] items-center justify-center rounded-[20px] border border-primary/40 bg-bg-secondary text-center font-mono text-xs uppercase tracking-widest text-muted lg:mx-0"
        style={{ boxShadow: '0 0 48px rgba(240, 147, 43, 0.25)' }}
      >
        Add <span className="text-primary">public/about.jpg</span>
      </div>
    );
  }

  return (
    <div
      className="about-photo-frame group relative mx-auto w-full max-w-[360px] lg:mx-0"
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative rounded-[20px] p-[3px] transition-shadow duration-500 ease-out"
        style={{
          background: 'linear-gradient(145deg, rgba(40,40,55,0.95) 0%, rgba(18,18,28,1) 40%, rgba(240,147,43,0.35) 100%)',
          boxShadow:
            '0 0 0 1px rgba(240, 147, 43, 0.35), 0 25px 60px rgba(0,0,0,0.45), 0 0 50px rgba(240, 147, 43, 0.22)',
        }}
      >
        <div
          className="overflow-hidden rounded-[17px] transition-[transform,box-shadow] duration-500 ease-out will-change-transform group-hover:[transform:rotateY(-7deg)_rotateX(4deg)_translateZ(12px)] group-hover:shadow-[0_0_40px_rgba(255,210,63,0.55),inset_0_0_0_1px_rgba(255,210,63,0.4)]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Image
            src="/about.jpg"
            alt="Smit Kapadiya — AI automation engineer"
            width={360}
            height={480}
            className="h-auto w-full object-cover"
            style={{
              filter: 'grayscale(1) contrast(1.06) brightness(0.95)',
            }}
            priority
            onError={() => setFailed(true)}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-[17px] mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-80"
            style={{
              background:
                'linear-gradient(135deg, rgba(240,147,43,0.22) 0%, transparent 45%, rgba(0,245,255,0.08) 100%)',
              boxShadow: 'inset 0 0 60px rgba(240, 147, 43, 0.12)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
