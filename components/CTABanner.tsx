import Link from 'next/link';

export default function CTABanner() {
  return (
    <>
      <div className="section-divider" />
      <section className="section-tint-cta relative overflow-hidden border-t border-[rgba(240,147,43,0.15)] px-6 py-32 text-center md:px-12 lg:px-24">
        <div
          className="cta-glow pointer-events-none absolute bottom-0 left-1/2 h-full max-w-4xl w-full -translate-x-1/2 opacity-[0.08]"
          style={{
            background:
              'radial-gradient(ellipse at 50% 100%, rgba(240, 147, 43, 0.9) 0%, rgba(0, 245, 255, 0.15) 45%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <h2 className="mb-8 font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Your Business Is Running Manually Right Now.
          </h2>

          <p className="mb-12 font-heading text-xl italic text-gold md:text-2xl">
            &quot;Every hour without AI is an hour your competitor is pulling ahead.&quot;
          </p>

          <div className="flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
            <Link
              href="/contact/contract"
              className="bg-primary px-10 py-5 font-heading text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_36px_rgba(240,147,43,0.35)] transition-transform hover:scale-105"
              data-cursor="hover"
            >
              Deploy Your AI Agent
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 px-10 py-5 font-heading text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/5"
              data-cursor="hover"
            >
              Choose Your Move
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
