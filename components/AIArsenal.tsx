import Link from 'next/link';

export default function AIArsenal() {
  return (
    <>
      <div className="section-divider" />
      <section id="products" className="section-tint-a relative overflow-hidden border-y border-[rgba(240,147,43,0.08)] px-6 py-24 text-text md:px-12 lg:px-24">
        
        {/* Glow Element */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(240, 147, 43, 0.07) 0%, transparent 70%)',
          }}
        />
        
        <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="font-heading font-bold text-[40px] md:text-[56px] leading-tight text-white section-heading">
            AI Arsenal
          </h2>
          <div className="font-mono text-primary text-xs md:text-sm tracking-widest mt-2 uppercase">
            {`// 7 intelligent systems. Built in Surat. Deployed everywhere.`}
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="bento-card glass-card flex flex-col justify-between p-8 lg:row-span-2 lg:p-12" data-cursor="hover">
            <div>
              <div className="font-mono text-[10px] text-gold mb-6 uppercase tracking-widest bg-gold/10 w-max px-3 py-1">PRODUCT 01</div>
              <h3 className="font-heading font-bold text-white text-[28px] mb-4">AI Inventory Oracle</h3>
              <p className="text-muted text-base leading-relaxed mb-8 max-w-sm">
                Trained on 5 years of your sales data + live market signals — predicts exactly which products will profit and which will drain cash before you spend a rupee.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['MACHINE LEARNING', 'PREDICTIVE ANALYTICS', 'SHOPIFY', 'MEESHO'].map(tag => (
                <span key={tag} className="font-mono text-[9px] border border-primary/25 px-3 py-1.5 uppercase tracking-wider text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bento-card glass-card flex flex-col justify-between p-8" data-cursor="hover">
            <div>
              <div className="font-mono text-[10px] text-muted mb-4 uppercase tracking-widest">PRODUCT 02</div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">COD Guardian</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                COD order placed → instant WhatsApp sent → auto-call if ignored → confirmed or cancelled.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 font-mono text-[9px] text-primary font-bold uppercase tracking-widest">
              <span>SHOPIFY</span> <span>MEESHO</span> <span>AMAZON</span> <span>FLIPKART</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bento-card glass-card flex flex-col justify-between p-8" data-cursor="hover">
            <div>
              <div className="font-mono text-[10px] text-muted mb-4 uppercase tracking-widest">PRODUCT 03</div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">WhatsApp Command Center</h3>
              <p className="text-muted text-sm leading-relaxed">
                Your brand speaks to thousands simultaneously — personalized, intelligent, instant.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bento-card glass-card p-8" data-cursor="hover">
            <div className="font-mono text-[10px] text-muted mb-4 uppercase tracking-widest">PRODUCT 04</div>
            <h3 className="font-heading font-bold text-white text-xl mb-3">AI Voice Calling Agent</h3>
            <p className="text-muted text-sm leading-relaxed">Calls leads, confirms orders, books appointments. Speaks naturally. Runs 24/7.</p>
          </div>

          {/* Card 5 */}
          <div className="bento-card glass-card p-8" data-cursor="hover">
            <div className="font-mono text-[10px] text-muted mb-4 uppercase tracking-widest">PRODUCT 05</div>
            <h3 className="font-heading font-bold text-white text-xl mb-3">AI Email Intelligence</h3>
            <p className="text-muted text-sm leading-relaxed">Reads every professional email. Understands context. Sends perfect replies automatically.</p>
          </div>

          {/* Card 6 */}
          <div className="bento-card glass-card p-8 md:col-span-2 lg:col-span-1" data-cursor="hover">
            <div className="font-mono text-[10px] text-muted mb-4 uppercase tracking-widest">PRODUCT 06</div>
            <h3 className="font-heading font-bold text-white text-xl mb-3">Data Extraction Engine</h3>
            <p className="text-muted text-sm leading-relaxed">Automated extraction of competitor pricing and market trends from any platform.</p>
          </div>

          {/* Card 7 - Full Width */}
          <div className="group relative col-span-1 overflow-hidden bento-card glass-card p-12 text-center md:col-span-2 lg:col-span-full lg:p-16" data-cursor="hover">
            {/* Radial Gold Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1)_0%,transparent_60%)] pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="font-mono text-[10px] text-gold mb-6 uppercase tracking-widest">CUSTOM BUILDS</div>
              <h3 className="font-heading font-bold text-white text-3xl md:text-5xl mb-10 tracking-tight">Your Industry. Your Workflow. Your AI.</h3>
              <Link href="/contact/contract" className="bg-gold text-[#0A0E1A] px-10 py-5 font-heading font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-[0_0_30px_rgba(201,168,76,0.2)]" data-cursor="hover">
                Build My Custom Agent
              </Link>
            </div>
          </div>

        </div>
      </div>
      </section>
    </>
  );
}
