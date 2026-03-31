export default function Ticker() {
  const items = [
    'AI INVENTORY ORACLE',
    'COD GUARDIAN',
    'WHATSAPP AUTOMATION',
    'AI VOICE CALLER',
    'EMAIL INTELLIGENCE',
    'DATA SCRAPER',
    'LEAD HUNTER',
  ];

  const content = (
    <span className="flex items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span>{item}</span>
          <span className="mx-5 text-primary/60" aria-hidden>◆</span>
        </span>
      ))}
    </span>
  );

  return (
    <>
      <div className="section-divider" />
      <section
        className="flex h-[44px] w-full cursor-default items-center overflow-hidden border-y border-[rgba(240,147,43,0.12)]"
        style={{
          backdropFilter: 'blur(16px)',
          background: 'rgba(8, 11, 20, 0.6)',
        }}
        aria-hidden
      >
        <div className="animate-marquee flex shrink-0 items-center font-mono text-[11px] uppercase tracking-[0.18em] text-primary/80 whitespace-nowrap">
          {content}
          {content}
          {content}
          {content}
        </div>
      </section>
    </>
  );
}
