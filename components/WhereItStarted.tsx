'use client';

const PROJECTS = [
  {
    title: 'Online Movie Platform',
    body: 'Login, search, file handling, and database architecture built from scratch.',
    tags: ['PYTHON', 'SQL', 'FLASK'],
  },
  {
    title: 'Restaurant Ordering System',
    body: 'Dynamic QR menus with automated order processing and billing logic for fast-paced kitchens.',
    tags: ['QR TECH', 'AUTOMATION'],
  },
  {
    title: 'AI Text-to-Image Generator',
    body: 'Turning descriptive prompts into realistic images via cutting-edge AI APIs.',
    tags: ['STABLE DIFFUSION', 'DALL-E'],
  },
  {
    title: 'Smart Shopkeeper AI',
    body: 'Kirana store AI scans inventory via camera, predicts restock, auto-orders via WhatsApp.',
    tags: ['React Native', 'TensorFlow', 'WhatsApp API'],
  },
  {
    title: 'Lead Hunter Bot',
    body: 'Scrapes Google Maps/Facebook for local leads, AI qualifies, WhatsApp outreach.',
    tags: ['Puppeteer', 'GPT-4o', 'Node.js'],
  },
  {
    title: 'Delivery Pilot',
    body: 'AI optimizes delivery routes — 30% fuel savings, 40% faster.',
    tags: ['Google Maps', 'OR-Tools', 'Socket.io'],
  },
  {
    title: 'Voice Commerce',
    body: 'Hindi/Gujarati voice orders via WhatsApp, UPI payments.',
    tags: ['Whisper', 'Razorpay', 'FastAPI'],
  },
];

export default function WhereItStarted() {
  return (
    <>
      <div className="section-divider" />
      <section
        id="work"
        className="relative overflow-hidden px-5 py-20 text-text sm:px-8 md:px-12 lg:px-20"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-full -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(240, 147, 43, 0.06) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="mb-2 font-heading text-[32px] font-bold leading-tight text-white sm:text-[40px] md:text-[48px]">
              Where It Started
            </h2>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">
              {'// Academic roots. Production mindset.'}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="bento-card flex flex-col justify-between p-6"
              >
                <div>
                  <h4 className="mb-3 font-heading text-lg font-bold text-white sm:text-xl">
                    {project.title}
                  </h4>
                  <p className="mb-6 text-sm leading-relaxed text-muted">{project.body}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t, ti) => (
                    <span
                      key={t}
                      className={`font-mono text-[9px] font-bold uppercase tracking-widest ${ti % 2 === 0 ? 'text-primary' : 'text-accent'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
