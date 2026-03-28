import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import AIArsenal from '@/components/AIArsenal';
import WhereItStarted from '@/components/WhereItStarted';
import ProcessTimeline from '@/components/ProcessTimeline';
import StatsRow from '@/components/StatsRow';
import Manifesto from '@/components/Manifesto';
import AboutSection from '@/components/AboutSection';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <main className="relative z-[1] w-full flex-col overflow-hidden bg-transparent">
      <Hero />
      <Ticker />
      <AIArsenal />
      <WhereItStarted />
      <ProcessTimeline />
      <StatsRow />
      <Manifesto />
      <AboutSection />
      <CTABanner />
    </main>
  );
}
