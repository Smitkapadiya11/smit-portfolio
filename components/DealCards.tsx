import Link from 'next/link';

export default function DealCards() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl">
      
      {/* Card 1 */}
      <Link href="/contact/partnership" className="group glass-card relative block w-full p-8 transition-all duration-300 hover:-translate-y-2 md:p-10" data-cursor="hover">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-4xl text-gold">🤝</span>
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2 tracking-tight">Let&apos;s Build Together</h3>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Partnership / Co-founder / JV</p>
            </div>
          </div>
          <div className="text-gold font-mono text-2xl group-hover:translate-x-2 transition-transform duration-300">→</div>
        </div>
      </Link>

      {/* Card 2 */}
      <Link href="/contact/contract" className="group glass-card relative block w-full p-8 transition-all duration-300 hover:-translate-y-2 md:p-10" data-cursor="hover">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-4xl">💼</span>
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2 tracking-tight">Hire Me for a Project</h3>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Freelance / Contract Work</p>
            </div>
          </div>
          <div className="text-blue-500 font-mono text-2xl group-hover:translate-x-2 transition-transform duration-300">→</div>
        </div>
      </Link>

      {/* Card 3 */}
      <Link href="/contact/consultation" className="group glass-card relative block w-full p-8 transition-all duration-300 hover:-translate-y-2 md:p-10" data-cursor="hover">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-4xl">🤖</span>
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2 tracking-tight">I Need an AI for My Business</h3>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Consultation / Custom Build</p>
            </div>
          </div>
          <div className="text-primary font-mono text-2xl group-hover:translate-x-2 transition-transform duration-300">→</div>
        </div>
      </Link>

    </div>
  );
}
