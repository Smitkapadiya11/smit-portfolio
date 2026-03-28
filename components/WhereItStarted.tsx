'use client';

import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    title: 'Online Movie Platform',
    body: 'Login, search, file handling, and database architecture built from scratch.',
    tags: ['PYTHON', 'SQL', 'FLASK'],
  },
  {
    title: 'Restaurant Ordering System',
    body: 'Dynamic QR menus with automated order processing and billing logic for fast-paced kitchens.',
    tags: ['QR TECH', 'AUTOMATION'],
  },
  {
    title: 'AI Text-to-Image Generator',
    body: 'Turning descriptive prompts into realistic images via cutting-edge AI APIs.',
    tags: ['STABLE DIFFUSION', 'DALL-E'],
  },
  {
    title: 'Smart Shopkeeper AI',
    body: 'Kirana store AI scans inventory via camera, predicts restock, auto-orders via WhatsApp.',
    tags: ['React Native', 'TensorFlow', 'WhatsApp API'],
  },
  {
    title: 'Lead Hunter Bot',
    body: 'Scrapes Google Maps/Facebook for local leads, AI qualifies, WhatsApp outreach.',
    tags: ['Puppeteer', 'GPT-4o', 'Node.js'],
  },
  {
    title: 'Delivery Pilot',
    body: 'AI optimizes delivery routes — 30% fuel savings, 40% faster.',
    tags: ['Google Maps', 'OR-Tools', 'Socket.io'],
  },
  {
    title: 'Voice Commerce',
    body: 'Hindi/Gujarati voice orders via WhatsApp, UPI payments.',
    tags: ['Whisper', 'Razorpay', 'FastAPI'],
  },
];

export default function WhereItStarted() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root || typeof IntersectionObserver === 'undefined') return;

    const cards = root.querySelectorAll<HTMLElement>('[data-work-card]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add('is-visible');
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="section-divider" />
      <section
        ref={sectionRef}
        id="work"
        className="section-tint-a relative overflow-hidden border-y border-primary/10 px-6 py-24 text-text md:px-12 lg:px-24"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(240, 147, 43, 0.07) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-2 font-heading text-[40px] font-bold leading-tight text-white md:text-[56px]">
              Where It Started
            </h2>
            <div className="font-mono text-xs uppercase tracking-widest text-primary md:text-sm">
              {`// Academic roots. Production mindset.`}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                data-work-card
                className="work-tilt reveal-on-scroll bento-card glass-card flex flex-col justify-between p-8"
                data-cursor="hover"
              >
                <div>
                  <h4 className="mb-4 font-heading text-2xl font-bold text-white">
                    {project.title}
                  </h4>
                  <p className="mb-10 text-sm leading-relaxed text-muted">{project.body}</p>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[9px] font-bold uppercase tracking-widest md:gap-x-4">
                  {project.tags.map((t, ti) => (
                    <span
                      key={t}
                      className={ti % 2 === 0 ? 'text-primary' : 'text-accent'}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
