"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.process-steps-container',
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <>
      <div className="section-divider" />
      <section className="section-tint-b relative overflow-hidden px-6 py-32 text-text md:px-12 lg:px-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(240, 147, 43, 0.07) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="mb-6 font-heading text-[40px] font-bold leading-tight text-white md:text-[56px]">
              Idea to Automation in 72 Hours.
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-muted lg:text-xl">
              We move at the speed of intelligence. No months-long consulting phases — just absolute focus and rapid deployment.
            </p>
          </div>

          <div className="process-steps-container relative w-full max-w-xl lg:pt-8">
            <div className="absolute top-6 bottom-0 left-[24px] -z-10 w-[2px] overflow-hidden bg-transparent md:left-[34px]">
              <svg className="h-full w-full" preserveAspectRatio="none">
                <path
                  ref={pathRef}
                  d="M 1 0 L 1 10000"
                  stroke="rgba(240, 147, 43, 1)"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            <div className="absolute top-6 bottom-0 left-[24px] -z-20 w-[1px] border-l border-dashed border-[rgba(240,147,43,0.25)] md:left-[34px]" />

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  n: '01',
                  title: 'Discovery Call',
                  body: '30 minutes. We map your business workflow and identify high-ROI automation targets.',
                },
                {
                  n: '02',
                  title: 'Agent Design',
                  body: 'We architect your custom AI pipeline, selecting the right LLMs and logic frameworks.',
                },
                {
                  n: '03',
                  title: 'Build & Connect',
                  body: 'Developing the core logic and hooking the agent directly into your existing tools (CRM, WhatsApp, DB).',
                },
                {
                  n: '04',
                  title: 'Go Live',
                  body: 'Your AI deploys. You get a real-time dashboard to monitor every automated interaction.',
                },
              ].map((step) => (
                <div key={step.n} className="group relative flex gap-6 md:gap-10" data-cursor="hover">
                  <div className="z-10 flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center font-mono text-xl text-primary transition-all glass-card md:h-[70px] md:w-[70px] md:text-2xl group-hover:bg-primary group-hover:text-black">
                    {step.n}
                  </div>
                  <div className="pt-1 md:pt-3">
                    <h4 className="mb-2 font-heading text-2xl font-bold text-white">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-muted md:text-base">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
