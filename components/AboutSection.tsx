import Link from 'next/link';
import { Instagram, Github } from 'lucide-react';
import AboutPortrait from '@/components/AboutPortrait';
import { INSTAGRAM_URL } from '@/lib/social';

export default function AboutSection() {
  const skills = [
    'PYTHON',
    'AI/ML',
    'DATA SCIENCE',
    'AUTOMATION',
    'FULL-STACK',
    'DATA SCRAPING',
  ];

  return (
    <>
      <div className="section-divider" />
      <section id="about" className="section-tint-b relative overflow-hidden px-6 py-24 md:px-12 lg:px-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(240, 147, 43, 0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="order-1 flex w-full justify-center lg:justify-start">
            <div className="relative w-full">
              <div className="absolute -left-3 top-2 bottom-2 z-20 hidden w-[2px] bg-gradient-to-b from-primary/80 via-secondary/60 to-accent/40 md:-left-5 md:block" />
              <AboutPortrait />
            </div>
          </div>

          <div className="order-2 space-y-8 lg:space-y-10">
            <div className="w-max bg-primary/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary md:text-[11px]">
              [ SMIT KAPADIYA — SURAT, GUJARAT ]
            </div>

            <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
              BCA Graduate. AI Builder. Automation Obsessed.
            </h2>

            <p className="text-lg leading-relaxed text-muted md:text-xl">
              I graduated from Charotar University of Science & Technology in 2025 with a BCA degree and an obsession for making businesses run smarter. From Surat to every corner of India — one automation at a time.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="glass-card px-5 py-2.5 font-mono text-[10px] font-bold uppercase text-primary md:text-[11px]"
                  data-cursor="hover"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-primary/15 pt-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Connect</span>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-glow font-mono text-[11px] font-bold uppercase tracking-widest text-muted transition-colors"
                  data-cursor="hover"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/SmitKapadiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-glow flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-muted transition-colors"
                  data-cursor="hover"
                >
                  <Github className="h-4 w-4" strokeWidth={2} aria-hidden />
                  GitHub
                </Link>
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-glow flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-muted transition-colors"
                  data-cursor="hover"
                >
                  <Instagram className="h-4 w-4 text-primary drop-shadow-[0_0_8px_rgba(240,147,43,0.55)]" strokeWidth={2} aria-hidden />
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
