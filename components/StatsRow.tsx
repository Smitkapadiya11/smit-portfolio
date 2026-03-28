"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StatsRow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const stats = gsap.utils.toArray('.stat-number') as HTMLElement[];

    stats.forEach((stat) => {
      const raw = stat.getAttribute('data-target') || '0';
      const suffix = stat.getAttribute('data-suffix') || '';
      const targetNumber = parseFloat(raw);

      if (Number.isNaN(targetNumber)) return;

      gsap.to(stat, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          invalidateOnRefresh: true,
          once: true,
        },
        innerHTML: targetNumber,
        duration: 2.5,
        ease: 'power2.out',
        snap: { innerHTML: 1 },
        onUpdate() {
          stat.innerHTML = Math.ceil(parseFloat(stat.innerHTML)) + suffix;
        },
      });
    });
  }, []);

  return (
    <>
      <div className="section-divider" />
      <section
        ref={containerRef}
        className="stats-gradient-anim relative select-none overflow-hidden border-y border-[rgba(240,147,43,0.1)] py-24"
      >
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <div className="font-heading text-[12vw] font-black tracking-[0.2em] text-[#F0F4FF] opacity-[0.04] md:text-[15vw]">
            AUTOMATE
          </div>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-y-12 px-6 text-center md:grid-cols-4 md:px-12">
          <div className="flex flex-col items-center justify-center border-b border-[rgba(240,147,43,0.12)] pb-8 md:border-b-0 md:border-r md:border-[rgba(240,147,43,0.2)] md:pb-0">
            <div className="mb-2 font-heading text-5xl font-bold text-primary md:text-7xl lg:text-[80px]">
              <span className="stat-number inline-block min-w-[1ch]" data-target="7" data-suffix="+">
                0
              </span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">AI Products Live</div>
          </div>

          <div className="flex flex-col items-center justify-center border-b border-[rgba(240,147,43,0.12)] pb-8 md:border-b-0 md:border-r md:border-[rgba(240,147,43,0.2)] md:pb-0">
            <div className="mb-2 font-heading text-5xl font-bold text-primary md:text-7xl lg:text-[80px]">
              <span className="stat-number inline-block min-w-[2ch]" data-target="72" data-suffix="h">
                0
              </span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">Avg Deployment</div>
          </div>

          <div className="flex flex-col items-center justify-center border-r-0 border-[rgba(240,147,43,0.2)] md:border-r">
            <div className="mb-2 font-heading text-5xl font-bold text-primary md:text-7xl lg:text-[80px]">
              <span className="stat-number inline-block min-w-[3ch]" data-target="24" data-suffix="/7">
                0
              </span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">Agent Uptime</div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 font-heading text-5xl font-bold text-primary md:text-7xl lg:text-[80px]">
              <span className="stat-number inline-block min-w-[2ch]" data-target="11" data-suffix="">
                0
              </span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">Automations</div>
          </div>
        </div>
      </section>
    </>
  );
}
