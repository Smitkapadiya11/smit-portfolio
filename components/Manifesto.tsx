export default function Manifesto() {
  return (
    <>
      <div className="section-divider" />
      <section className="section-tint-a relative overflow-hidden px-6 py-24 md:px-12 lg:px-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(240, 147, 43, 0.07) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl space-y-6">
          <div className="border-b border-[rgba(240,147,43,0.18)] pb-6" data-cursor="hover">
            <h3 className="font-heading text-3xl font-normal leading-tight tracking-tight text-text md:text-5xl lg:text-6xl">
              Stop hiring humans for <span className="font-bold text-primary">robotic jobs.</span>
            </h3>
          </div>

          <div className="border-b border-[rgba(240,147,43,0.18)] pb-6" data-cursor="hover">
            <h3 className="font-heading text-3xl font-normal leading-tight tracking-tight text-text md:text-5xl lg:text-6xl">
              Software should <span className="font-bold text-accent">think, not just calculate.</span>
            </h3>
          </div>

          <div className="border-b border-[rgba(240,147,43,0.18)] pb-6" data-cursor="hover">
            <h3 className="font-heading text-3xl font-normal leading-tight tracking-tight text-text md:text-5xl lg:text-6xl">
              If it happens twice, <span className="font-bold text-secondary">automate it once.</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
