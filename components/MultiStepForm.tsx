"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { buildSheetsPayload, submitToSheets, type SheetsDealType } from '@/lib/submitToSheets';
import Link from 'next/link';

interface MultiStepFormProps {
  title: string;
  /** Google Sheet tab name expected by Apps Script (e.g. Partnership Leads). */
  sheet: string;
  dealType: SheetsDealType;
}

function dealTypeToVariant(d: SheetsDealType): 'partnership' | 'contract' | 'consultation' {
  return d.toLowerCase() as 'partnership' | 'contract' | 'consultation';
}

export default function MultiStepForm({ title, sheet, dealType }: MultiStepFormProps) {
  const variant = dealTypeToVariant(dealType);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, watch, setValue } = useForm();

  const totalSteps = 3;
  const progressPercent = (currentStep / totalSteps) * 100;

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const goToPrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: Record<string, string | string[]>) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = buildSheetsPayload(data as Record<string, unknown>, sheet, dealType);
    const result = await submitToSheets(payload);

    setIsSubmitting(false);

    if (result.ok) {
      setIsSuccess(true);
    } else {
      setSubmitError(result.error ?? 'Something went wrong. Please try again.');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SelectPill = ({ label, name, options, multi = false }: any) => {
    const value = watch(name) || (multi ? [] : '');
    return (
      <div className="mb-6">
        <label className="mb-4 block font-mono text-xs uppercase tracking-widest text-primary">{label}</label>
        <div className="flex flex-wrap gap-3">
          {options.map((opt: string) => {
            const isSelected = multi ? value.includes(opt) : value === opt;
            return (
              <button
                key={opt}
                type="button"
                className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${isSelected ? 'border-primary bg-primary/10 text-primary' : 'border-[rgba(240,147,43,0.22)] text-muted hover:border-primary/50'}`}
                onClick={() => {
                  if (multi) {
                    const newVal = isSelected ? value.filter((v: string) => v !== opt) : [...value, opt];
                    setValue(name, newVal);
                  } else {
                    setValue(name, opt);
                  }
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderStep = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          <div>
            <label htmlFor="quiz-name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
              Your Name
            </label>
            <input
              id="quiz-name"
              {...register('name', { required: true })}
              type="text"
              autoComplete="name"
              className="quiz-input w-full"
              placeholder="Full name"
            />
          </div>
          <div>
            <label htmlFor="quiz-email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
              Email Address
            </label>
            <input
              id="quiz-email"
              {...register('email', { required: true })}
              type="email"
              autoComplete="email"
              className="quiz-input w-full"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="quiz-phone" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
              Phone Number
            </label>
            <input
              id="quiz-phone"
              {...register('phone', { required: true })}
              type="tel"
              autoComplete="tel"
              className="quiz-input w-full"
              placeholder="+91 …"
            />
          </div>
        </div>
      );
    }

    if (currentStep === 2) {
      if (variant === 'partnership') {
        return (
          <div className="space-y-8">
            <div className="group relative pt-2">
              <label htmlFor="quiz-partnership-idea" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                What do you want to build together?
              </label>
              <textarea
                id="quiz-partnership-idea"
                {...register('partnership_idea')}
                rows={4}
                className="quiz-input w-full min-h-[120px] resize-y"
                placeholder="Describe the partnership idea…"
              />
            </div>
            <div>
              <label htmlFor="quiz-partnership-offer" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                What do you bring?
              </label>
              <select id="quiz-partnership-offer" {...register('partnership_offer')} className="quiz-input w-full">
                <option value="">Select...</option>
                <option value="Idea">Idea</option>
                <option value="Capital">Capital</option>
                <option value="Network">Network</option>
                <option value="Skills">Skills</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        );
      }
      if (variant === 'contract') {
        return (
          <div className="space-y-8">
            <SelectPill
              label="What do you need built?"
              name="contract_needs"
              multi={true}
              options={[
                'AI Agent',
                'WhatsApp Bot',
                'Voice Caller',
                'Data Scraper',
                'Email Automation',
                'COD System',
                'Inventory System',
                'Full Website',
                'Custom',
                'Other',
              ]}
            />
            <SelectPill
              label="Budget Estimation"
              name="contract_budget"
              options={['Under ₹10K', '₹10K–₹30K', '₹30K–₹1L', '₹1L+', "Let's Discuss"]}
            />
          </div>
        );
      }
      if (variant === 'consultation') {
        return (
          <div className="space-y-8">
            <div>
              <label htmlFor="quiz-consult-business" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                Business Type
              </label>
              <select id="quiz-consult-business" {...register('consult_business_type')} className="quiz-input w-full">
                <option value="">Select industry...</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Agency">Agency</option>
                <option value="SaaS">SaaS</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="quiz-consult-problem" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                Biggest time-wasting task?
              </label>
              <textarea
                id="quiz-consult-problem"
                {...register('consult_problem')}
                rows={4}
                className="quiz-input w-full min-h-[120px] resize-y"
                placeholder="What should automation remove from your day?"
              />
            </div>
          </div>
        );
      }
    }

    if (currentStep === 3) {
      if (variant === 'partnership') {
        return <SelectPill label="Timeline" name="timeline" options={['Immediately', '1 Month', '3 Months', 'Just Exploring']} />;
      }
      if (variant === 'contract') {
        return <SelectPill label="Timeline" name="timeline" options={['ASAP', '1 Month', 'Flexible']} />;
      }
      if (variant === 'consultation') {
        return (
          <div className="space-y-8">
            <SelectPill
              label="Team size doing it manually?"
              name="consult_team_size"
              options={['Just me', '2-5 people', '6-15 people', '15+ people']}
            />
            <SelectPill
              label="Desired Outcome"
              name="consult_outcome"
              multi={true}
              options={['Save Time', 'Reduce Costs', 'Increase Sales', 'Reduce Errors', 'Scale Faster']}
            />
          </div>
        );
      }
    }

    return null;
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030508]/95 backdrop-blur-md">
        <svg className="mb-8 h-32 w-32 text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
          <path d="M30 50L45 65L70 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="mb-4 font-heading text-4xl font-bold text-white md:text-5xl">You&apos;re in.</h2>
        <p className="mb-4 max-w-md text-center font-mono text-sm uppercase tracking-widest text-muted">
          Your answers were sent successfully. Smit will personally reach out within 24 hours.
        </p>
        <p className="mb-12 max-w-md text-center text-sm text-muted">
          Tip: F12 → Console shows &quot;Form data&quot; and &quot;Response&quot; for each submit.
        </p>
        <Link
          href="/"
          className="border border-white/20 px-8 py-4 font-heading text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/5"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-2xl glass-card p-8 shadow-2xl md:p-12">
      <Link
        href="/contact"
        className="absolute right-8 top-8 flex max-w-[calc(100%-2rem)] items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:text-white"
      >
        <span>✕</span> Cancel
      </Link>

      <div className="absolute left-0 top-0 h-[2px] w-full bg-primary/20">
        <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="mb-12 pr-14">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
          Step 0{currentStep} / 0{totalSteps}
        </div>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h1>
      </div>

      <form className="form-quiz" onSubmit={handleSubmit(onSubmit)}>
        {submitError ? (
          <div
            className="mb-8 rounded border border-red-500/35 bg-red-950/35 px-4 py-3 font-mono text-xs uppercase leading-relaxed tracking-wide text-red-100"
            role="alert"
          >
            {submitError}
          </div>
        ) : null}

        <div key={currentStep} className="min-h-[200px]">
          {renderStep()}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[rgba(240,147,43,0.15)] pt-8 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">
          <button
            type="button"
            onClick={goToPrevStep}
            disabled={currentStep === 1 || isSubmitting}
            className={`order-2 min-[400px]:order-1 font-heading text-xs font-bold uppercase tracking-widest transition-colors ${currentStep === 1 ? 'pointer-events-none text-transparent' : 'text-muted hover:text-white'}`}
          >
            ← Back
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={goToNextStep}
              className="order-1 min-[400px]:order-2 w-full min-[400px]:w-auto bg-primary px-8 py-4 font-heading text-xs font-bold uppercase tracking-widest text-black transition-colors hover:brightness-110"
            >
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="order-1 min-[400px]:order-2 flex w-full min-[400px]:w-auto items-center justify-center gap-2 bg-primary px-10 py-4 font-heading text-xs font-bold uppercase tracking-widest text-black transition-all hover:shadow-[0_0_24px_rgba(240,147,43,0.4)]"
            >
              {isSubmitting ? 'Sending...' : 'Submit Proposal ⚡'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
