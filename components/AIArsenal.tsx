import Link from 'next/link';

const PRODUCTS = [
  {
    num: '01',
    title: 'AI Inventory Oracle',
    body: 'Trained on 5 years of your sales data + live market signals — predicts exactly which products will profit and which will drain cash before you spend a rupee.',
    tags: ['MACHINE LEARNING', 'PREDICTIVE ANALYTICS', 'SHOPIFY', 'MEESHO'],
    featured: true,
  },
  {
    num: '02',
    title: 'COD Guardian',
    body: 'COD order placed → instant WhatsApp sent → auto-call if ignored → confirmed or cancelled.',
    tags: ['SHOPIFY', 'MEESHO', 'AMAZON', 'FLIPKART'],
  },
  {
    num: '03',
    title: 'WhatsApp Command Center',
    body: 'Your brand speaks to thousands simultaneously — personalized, intelligent, instant.',
    tags: ['WHATSAPP API', 'AI', 'AUTOMATION'],
  },
  {
    num: '04',
    title: 'AI Voice Calling Agent',
    body: 'Calls leads, confirms orders, books appointments. Speaks naturally. Runs 24/7.',
    tags: ['LLM', 'VOICE AI', 'TWILIO'],
  },
  {
    num: '05',
    title: 'AI Email Intelligence',
    body: 'Reads every professional email. Understands context. Sends perfect replies automatically.',
    tags: ['GPT-4O', 'GMAIL API', 'AUTOMATION'],
  },
  {
    num: '06',
    title: 'Data Extraction Engine',
    body: 'Automated extraction of competitor pricing and market trends from any platform.',
    tags: ['SCRAPING', 'PYTHON', 'MARKET INTEL'],
  },
];

export default function AIArsenal() {
  return (
    <>
      <div className="section-divider" />
      <section
        id="products"
        className="relative overflow-hidden px-5 py-20 text-text sm:px-8 md:px-12 lg:px-20"
      >
        {/* Subtle top glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-full -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(240, 147, 43, 0.07) 0%, transparent 65%)' }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="font-heading font-bold text-[32px] leading-tight text-white sm:text-[40px] md:text-[48px]">
              AI Arsenal
            </h2>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">
              {'// 7 intelligent systems. Built in Surat. Deployed everywhere.'}
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Featured large card */}
            <div className="bento-card flex flex-col justify-between p-6 sm:col-span-2 sm:p-8 lg:row-span-2">
              <div>
                <div className="mb-5 inline-block font-mono text-[9px] uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  PRODUCT 01
                </div>
                <h3 className="mb-3 font-heading font-bold text-white text-2xl md:text-3xl">
                  AI Inventory Oracle
                </h3>
                <p className="text-muted text-sm leading-relaxed sm:text-base">
                  Trained on 5 years of your sales data + live market signals — predicts exactly which products will profit and which will drain cash before you spend a rupee.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['MACHINE LEARNING', 'PREDICTIVE ANALYTICS', 'SHOPIFY', 'MEESHO'].map(tag => (
                  <span key={tag} className="font-mono text-[9px] border border-primary/20 px-2.5 py-1 rounded-full uppercase tracking-wider text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Regular cards */}
            {PRODUCTS.slice(1).map((p) => (
              <div key={p.num} className="bento-card flex flex-col justify-between p-6">
                <div>
                  <div className="mb-3 font-mono text-[9px] uppercase tracking-widest text-muted">{`PRODUCT ${p.num}`}</div>
                  <h3 className="mb-2 font-heading font-bold text-white text-lg">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.body}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="font-mono text-[9px] text-primary/80 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Custom Builds CTA */}
            <div className="bento-card relative overflow-hidden p-8 text-center sm:col-span-2 lg:col-span-3 lg:p-12">
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(240, 147, 43, 0.08) 0%, transparent 65%)' }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4 font-mono text-[9px] uppercase tracking-widest text-primary/80">CUSTOM BUILDS</div>
                <h3 className="mb-8 font-heading font-bold text-white text-2xl sm:text-3xl md:text-4xl tracking-tight">
                  Your Industry. Your Workflow. Your AI.
                </h3>
                <Link
                  href="/contact/contract"
                  className="inline-block bg-primary text-black px-8 py-4 rounded-full font-heading font-bold uppercase tracking-widest text-sm transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_30px_rgba(240,147,43,0.35)]"
                >
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
