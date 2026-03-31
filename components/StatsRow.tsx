const STATS = [
  { value: '7+', label: 'AI Products Live' },
  { value: '72h', label: 'Avg Deployment' },
  { value: '24/7', label: 'Agent Uptime' },
  { value: '11', label: 'Automations' },
];

export default function StatsRow() {
  return (
    <>
      <div className="section-divider" />
      <section className="stats-glass relative select-none py-16 sm:py-20">
        {/* Watermark text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="font-heading text-[10vw] font-black tracking-[0.25em] text-white opacity-[0.025]">
            AUTOMATE
          </span>
        </div>

        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 text-center sm:px-8 md:grid-cols-4 md:px-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center ${
                i < 3 ? 'md:border-r md:border-[rgba(240,147,43,0.15)]' : ''
              }`}
            >
              <div className="mb-1 font-heading text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
                {stat.value}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted sm:text-[10px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
