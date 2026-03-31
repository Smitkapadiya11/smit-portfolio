const STEPS = [
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
];

export default function ProcessTimeline() {
  return (
    <>
      <div className="section-divider" />
      <section className="relative overflow-hidden px-5 py-20 text-text sm:px-8 md:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-full -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(240, 147, 43, 0.06) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Two-column layout: heading left, steps right */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-4 font-heading text-[32px] font-bold leading-tight text-white sm:text-[40px] md:text-[48px]">
                Idea to Automation in 72 Hours.
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
                We move at the speed of intelligence. No months-long consulting phases — just absolute focus and rapid deployment.
              </p>
            </div>

            {/* Steps list */}
            <div className="relative space-y-8 sm:space-y-10">
              {/* Vertical line */}
              <div className="absolute left-[28px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent sm:left-[34px]" />

              {STEPS.map((step) => (
                <div key={step.n} className="group relative flex gap-5 sm:gap-8">
                  {/* Step number badge */}
                  <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-xl glass-card font-mono text-lg font-bold text-primary transition-all duration-200 group-hover:border-primary/50 group-hover:bg-primary/10 sm:h-[68px] sm:w-[68px]">
                    {step.n}
                  </div>
                  <div className="pt-2 sm:pt-3">
                    <h4 className="mb-1.5 font-heading text-xl font-bold text-white sm:text-2xl">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-muted sm:text-base">{step.body}</p>
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
