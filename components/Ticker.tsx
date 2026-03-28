export default function Ticker() {
  const content = (
    <div className="flex items-center">
      <span>AI INVENTORY ORACLE</span> <span className="text-gold mx-6">◆</span>
      <span>COD GUARDIAN</span> <span className="text-gold mx-6">◆</span>
      <span>WHATSAPP AUTOMATION</span> <span className="text-gold mx-6">◆</span>
      <span>AI VOICE CALLER</span> <span className="text-gold mx-6">◆</span>
      <span>EMAIL INTELLIGENCE</span> <span className="text-gold mx-6">◆</span>
      <span>DATA SCRAPER</span> <span className="text-gold mx-6">◆</span>
    </div>
  );

  return (
    <>
      <div className="section-divider" />
      <section className="section-tint-ticker flex h-[48px] w-full cursor-default items-center overflow-hidden border-y border-[rgba(240,147,43,0.12)] hover:[&_div]:![animation-play-state:paused]">
        <div className="font-mono text-[12px] tracking-[0.2em] text-primary uppercase whitespace-nowrap animate-marquee flex items-center">
        {/* Content repeated multiple times for seamless loop */}
        {content}
        {content}
        {content}
        {content}
        {content}
      </div>
      </section>
    </>
  );
}
