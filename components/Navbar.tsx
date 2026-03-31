"use client";

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram } from 'lucide-react';
import { useHashNavigation } from '@/hooks/useHashNavigation';
import { INSTAGRAM_URL } from '@/lib/social';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const goToHash = useHashNavigation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleHashNav = useCallback(
    (e: React.MouseEvent, href: string) => {
      if (!href.startsWith('/#')) return;
      e.preventDefault();
      goToHash(href.replace('/', ''));
      setIsMobileMenuOpen(false);
    },
    [goToHash]
  );

  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Products', href: '/#products' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
  ];

  const linkCls = 'font-heading font-bold text-xs uppercase tracking-widest text-muted transition-colors duration-200 hover:text-primary';

  return (
    <>
      {/* ── Top Nav Bar ─────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center px-4 pt-4">
        <div
          className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-5 py-3 transition-all duration-300 md:gap-8 md:px-8 md:py-4 ${
            scrolled
              ? 'border border-[rgba(240,147,43,0.35)] bg-[rgba(8,11,20,0.85)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'border border-[rgba(240,147,43,0.18)] bg-[rgba(8,11,20,0.65)]'
          }`}
          style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-white md:text-base">
              SMIT KAPADIYA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <Link key={link.label} href={link.href} scroll={false} prefetch={false}
                  onClick={(e) => handleHashNav(e, link.href)} className={linkCls}>
                  {link.label}
                </Link>
              ) : (
                <Link key={link.label} href={link.href} className={linkCls}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop: Social dropdown + CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="relative group">
              <button type="button" aria-haspopup="menu"
                className="flex items-center gap-1 font-heading font-bold text-xs uppercase tracking-widest text-muted transition-colors hover:text-primary">
                Social <span className="text-[10px] text-primary/80" aria-hidden>▾</span>
              </button>
              <div className="pointer-events-none invisible absolute right-0 top-full z-[110] min-w-[180px] translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100" role="menu">
                <div className="glass-card rounded-xl p-2">
                  <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" role="menuitem"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-text transition-colors hover:bg-primary/10 hover:text-primary">
                    <Instagram className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact"
              className="rounded-full bg-primary px-5 py-2 font-heading font-bold uppercase text-xs tracking-wider text-black transition-all duration-200 hover:brightness-110">
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="flex items-center justify-center rounded-full p-1.5 text-primary transition-colors hover:bg-primary/10 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Full-screen Overlay ──────────────────────── */}
      <div
        className={`fixed inset-0 z-[90] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: 'blur(24px) saturate(180%)', WebkitBackdropFilter: 'blur(24px) saturate(180%)', background: 'rgba(8, 11, 20, 0.95)' }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <Link key={link.label} href={link.href} scroll={false} prefetch={false}
                className="font-heading text-2xl font-bold uppercase tracking-widest text-text transition-colors hover:text-primary"
                onClick={(e) => handleHashNav(e, link.href)}>
                {link.label}
              </Link>
            ) : (
              <Link key={link.label} href={link.href}
                className="font-heading text-2xl font-bold uppercase tracking-widest text-text transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            )
          )}
          <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 font-heading text-xl font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}>
            <Instagram className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            Instagram
          </Link>
          <Link href="/contact"
            className="mt-2 rounded-full bg-primary px-10 py-4 font-heading font-bold uppercase tracking-wider text-black transition-all hover:brightness-110"
            onClick={() => setIsMobileMenuOpen(false)}>
            Book a Call
          </Link>
        </nav>
      </div>
    </>
  );
}
