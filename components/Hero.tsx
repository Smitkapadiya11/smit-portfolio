import FounderVideo from './FounderVideo';
import HeroCTAs from './HeroCTAs';

export default function Hero() {
  return (
    <section id="hero" className="section-tint-hero relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 py-28 text-text md:px-12 lg:px-24">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[600px] w-full"
        style={{
          background:
            'radial-gradient(circle at 90% 10%, rgba(240, 147, 43, 0.12) 0%, transparent 52%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center pt-24 lg:flex-row lg:items-center lg:pt-0">
        <div className="flex w-full flex-col items-start gap-6 lg:w-[55%] lg:gap-8">
          <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
            [ AI AUTOMATION ENGINEER — SURAT, INDIA ]
          </div>

          <div
            className="font-heading text-[40px] font-bold leading-[1.05] tracking-tight md:text-[56px] lg:text-[72px]"
            style={{
              textShadow:
                '0 0 80px rgba(240, 147, 43, 0.28), 0 0 120px rgba(0, 245, 255, 0.08)',
            }}
          >
            <div className="flex flex-wrap gap-x-4">
              {'I Build AI Agents'.split(' ').map((word, i) => (
                <span key={i} className="inline-block text-text">
                  {word}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-4">
              {'That Replace'.split(' ').map((word, i) => (
                <span key={i} className="inline-block text-text">
                  {word}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-4">
              {'Manual Work.'.split(' ').map((word, i) => (
                <span key={i} className="inline-block text-primary hero-glow-text">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <p className="font-body max-w-xl text-[17px] leading-relaxed text-muted">
            Python · AI/ML · Automation · Data Science — BCA Graduate turning business processes into intelligent systems.
          </p>

          <HeroCTAs />

          <div className="flex flex-wrap items-center gap-3 pt-4 font-mono text-[10px] uppercase tracking-widest text-muted md:pt-6 md:text-xs">
            <span>⚡ 7 AI Products Live</span>
            <span className="hidden text-primary/35 sm:inline">|</span>
            <span>📍 Surat, India</span>
            <span className="hidden text-primary/35 sm:inline">|</span>
            <span>🎓 CHARUSAT 2025</span>
          </div>
        </div>

        <div className="relative mt-16 flex w-full justify-center pb-16 pt-8 md:pt-0 lg:mt-0 lg:w-[45%] lg:justify-center lg:pb-0 lg:pl-16">
          <FounderVideo />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono text-[9px] uppercase tracking-widest text-secondary">SCROLL</span>
        <div className="relative h-12 w-[1px] overflow-hidden bg-primary/25">
          <div className="animate-pulse-line absolute left-0 top-0 h-[50%] w-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
