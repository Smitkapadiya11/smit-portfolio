"use client";

import MultiStepForm from '@/components/MultiStepForm';

export default function ConsultationPage() {
  return (
    <main className="relative z-[1] flex min-h-screen flex-col items-center justify-center bg-[rgba(3,5,8,0.42)] px-6 pb-24 pt-32 text-text backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(240,147,43,0.1),transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vh,600px)] w-[min(100vw,800px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,245,255,0.07)_0%,transparent_60%)] blur-3xl" />

      <div className="relative z-[2] w-full max-w-3xl">
        <MultiStepForm title="AI Consultation" sheet="Consultation Leads" dealType="Consultation" />
      </div>
    </main>
  );
}
