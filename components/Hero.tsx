import FounderVideo from './FounderVideo';
import HeroCTAs from './HeroCTAs';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-5 pb-16 pt-28 text-text sm:px-8 md:px-12 lg:px-20 lg:pt-20"
    >
      {/* Subtle radial accent */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-full"
        style={{
          background:
            'radial-gradient(circle at 85% 5%, rgba(240, 147, 43, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 pt-20 lg:flex-row lg:gap-16 lg:pt-0">
        
        {/* ── Left: Text Content ─────────────────────────────── */}
        <div className="flex w-full flex-col items-start gap-6 lg:w-[55%]">
          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-primary">
            [ AI Automation Engineer — Surat, India ]
          </div>

          <h1
            className="font-heading text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[48px] md:text-[56px] lg:text-[64px]"
          >
            <span className="block text-text">I Build AI Agents</span>
            <span className="block text-text">That Replace</span>
            <span className="block hero-glow-text text-primary">Manual Work.</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Python · AI/ML · Automation · Data Science — BCA Graduate turning business processes into intelligent systems.
          </p>

          <HeroCTAs />

          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-[10px] uppercase tracking-widest text-muted sm:text-xs">
            <span>⚡ 7 AI Products Live</span>
            <span className="text-primary/30">|</span>
            <span>📍 Surat, India</span>
            <span className="text-primary/30">|</span>
            <span>🎓 CHARUSAT 2025</span>
          </div>
        </div>

        {/* ── Right: Video ───────────────────────────────────── */}
        <div className="flex w-full justify-center lg:w-[45%]">
          <FounderVideo />
        </div>
      </div>
    </section>
  );
}
