"use client";

import DealCards from '@/components/DealCards';

export default function ContactPage() {
  return (
    <main className="relative z-[1] flex min-h-screen flex-col items-center bg-[rgba(3,5,8,0.4)] px-6 pb-24 pt-32 text-text backdrop-blur-xl md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(240,147,43,0.1),transparent)]" />
      <div className="relative z-10 w-full max-w-3xl">
        <div className="mb-16 text-center">
          <div className="mb-4 font-mono text-[10px] tracking-widest text-accent uppercase">
            [ INITIATE CONNECTION ]
          </div>
          <h1 className="font-heading text-5xl font-bold tracking-tight text-white md:text-6xl">
            Choose Your Move.
          </h1>
          <p className="mt-6 text-lg text-muted">
            Select the path that best describes what you&apos;re looking for.
          </p>
        </div>

        <DealCards />
      </div>
    </main>
  );
}
