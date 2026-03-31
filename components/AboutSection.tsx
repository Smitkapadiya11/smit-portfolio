import Link from 'next/link';
import { Instagram, Github } from 'lucide-react';
import AboutPortrait from '@/components/AboutPortrait';
import { INSTAGRAM_URL } from '@/lib/social';

const skills = ['PYTHON', 'AI/ML', 'DATA SCIENCE', 'AUTOMATION', 'FULL-STACK', 'DATA SCRAPING'];

export default function AboutSection() {
  return (
    <>
      <div className="section-divider" />
      <section id="about" className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-full -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(240, 147, 43, 0.07) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Portrait */}
          <div className="flex w-full justify-center lg:justify-start">
            <AboutPortrait />
          </div>

          {/* Content */}
          <div className="space-y-7">
            <div className="inline-block bg-primary/10 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest text-primary">
              [ SMIT KAPADIYA — SURAT, GUJARAT ]
            </div>

            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              BCA Graduate.<br />AI Builder.<br />Automation Obsessed.
            </h2>

            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I graduated from Charotar University of Science &amp; Technology in 2025 with a BCA degree and an obsession for making businesses run smarter. From Surat to every corner of India — one automation at a time.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="glass-card px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-primary transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-5 border-t border-primary/12 pt-7">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Connect</span>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-glow font-mono text-[11px] font-bold uppercase tracking-widest text-muted"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/SmitKapadiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-glow flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-muted"
                >
                  <Github className="h-4 w-4" strokeWidth={2} aria-hidden />
                  GitHub
                </Link>
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-glow flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-muted"
                >
                  <Instagram className="h-4 w-4 text-primary" strokeWidth={2} aria-hidden />
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
