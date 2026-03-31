import Link from 'next/link';

export default function CTABanner() {
  return (
    <>
      <div className="section-divider" />
      <section className="relative overflow-hidden px-5 py-24 text-center sm:px-8 md:px-12 lg:px-20">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-full w-full max-w-3xl -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse at 50% 100%, rgba(240, 147, 43, 0.12) 0%, rgba(0, 245, 255, 0.05) 45%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <div className="mb-6 inline-block font-mono text-[10px] uppercase tracking-widest text-primary">
            [ Ready to automate? ]
          </div>

          <h2 className="mb-6 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Your Business Is Running Manually Right Now.
          </h2>

          <p className="mb-10 font-heading text-lg italic text-secondary sm:text-xl md:text-2xl">
            &quot;Every hour without AI is an hour your competitor is pulling ahead.&quot;
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/contact/contract"
              className="bg-primary px-8 py-4 rounded-full font-heading text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_30px_rgba(240,147,43,0.3)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_40px_rgba(240,147,43,0.45)] hover:-translate-y-0.5"
            >
              Deploy Your AI Agent
            </Link>
            <Link
              href="/contact"
              className="glass-card px-8 py-4 font-heading text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-white/30"
            >
              Choose Your Move
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
