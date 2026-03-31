import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const DEALS = [
  {
    label: 'Consultation',
    href: '/contact/consultation',
    heading: 'Pick My Brain',
    body: 'A focused strategy session. We audit your business, map automation opportunities, and give you a clear action plan — no fluff.',
    badge: 'FREE 30-MIN CALL',
    badgeColor: 'text-accent',
  },
  {
    label: 'Contract',
    href: '/contact/contract',
    heading: 'Build My AI Agent',
    body: 'You have a specific workflow to automate. We scope it, build it, and deploy it — fully integrated into your existing tools.',
    badge: 'CUSTOM QUOTE',
    badgeColor: 'text-primary',
  },
  {
    label: 'Partnership',
    href: '/contact/partnership',
    heading: 'Long-Term Partnership',
    body: 'Ongoing AI operations, continuous improvements, and a dedicated automation engineer embedded in your team.',
    badge: 'MONTHLY RETAINER',
    badgeColor: 'text-secondary',
  },
];

export default function ContactPage() {
  return (
    <main className="relative z-[1] flex min-h-screen flex-col items-center px-5 pb-24 pt-32 text-text sm:px-8 md:px-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(240,147,43,0.1), transparent)',
        }}
      />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
            [ INITIATE CONNECTION ]
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Choose Your Move.
          </h1>
          <p className="mt-5 text-base text-muted sm:text-lg">
            Select the path that best describes what you&apos;re looking for.
          </p>
        </div>

        {/* Deal Cards */}
        <div className="flex flex-col gap-5">
          {DEALS.map((deal) => (
            <Link
              key={deal.label}
              href={deal.href}
              className="group bento-card flex flex-col gap-4 p-6 sm:p-8 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className={`mb-2 font-mono text-[9px] uppercase tracking-widest ${deal.badgeColor}`}>
                    {deal.badge}
                  </div>
                  <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
                    {deal.heading}
                  </h2>
                </div>
                <ArrowRight
                  className="mt-1 h-5 w-5 shrink-0 text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary"
                  strokeWidth={2}
                />
              </div>
              <p className="text-sm leading-relaxed text-muted sm:text-base">{deal.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
