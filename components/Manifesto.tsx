export default function Manifesto() {
  const lines = [
    { text: 'Stop hiring humans for ', bold: 'robotic jobs.', color: 'text-primary' },
    { text: 'Software should ', bold: 'think, not just calculate.', color: 'text-accent' },
    { text: 'If it happens twice, ', bold: 'automate it once.', color: 'text-secondary' },
  ];

  return (
    <>
      <div className="section-divider" />
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 lg:px-20">
        <div className="relative z-10 mx-auto max-w-5xl space-y-5">
          {lines.map((line, i) => (
            <div
              key={i}
              className="glass-card border-b border-[rgba(240,147,43,0.12)] px-6 py-7 sm:px-8 sm:py-8 last:border-b-0 transition-all duration-200 hover:border-[rgba(240,147,43,0.25)]"
            >
              <h3 className="font-heading text-2xl font-normal leading-tight tracking-tight text-text sm:text-3xl md:text-4xl lg:text-5xl">
                {line.text}
                <span className={`font-bold ${line.color}`}>{line.bold}</span>
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
