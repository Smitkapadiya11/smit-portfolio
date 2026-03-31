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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleHashNav = useCallback(
    (e: React.MouseEvent, href: string) => {
      if (!href.startsWith('/#')) return;
      e.preventDefault();
      const hash = href.replace('/', '');
      goToHash(hash);
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

  const linkClass =
    'font-heading font-bold text-xs uppercase tracking-widest text-muted transition-colors duration-200 hover:text-primary';

  return (
    <>
      {/* ── Desktop / Sticky Nav ──────────────────────────────────── */}
      <header
        className={`fixed top-4 left-2 right-2 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[100] flex w-auto sm:w-max items-center justify-between gap-6 md:gap-10 rounded-full px-5 py-3 md:px-8 md:py-4 transition-all duration-300 ${
          scrolled
            ? 'glass-pill shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_40px_rgba(240,147,43,0.08)] border-[rgba(240,147,43,0.35)]'
            : 'glass-pill shadow-[0_4px_20px_rgba(0,0,0,0.25)] border-[rgba(240,147,43,0.18)]'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-text sm:text-base">
            SMIT KAPADIYA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <Link
                key={link.label}
                href={link.href}
                scroll={false}
                prefetch={false}
                onClick={(e) => handleHashNav(e, link.href)}
                className={linkClass}
              >
                {link.label}
              </Link>
            ) : (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Social Dropdown */}
        <div className="relative hidden md:block group">
          <button
            type="button"
            className="flex items-center gap-1 font-heading font-bold text-xs uppercase tracking-widest text-muted transition-colors hover:text-primary"
            aria-haspopup="menu"
          >
            Social
            <span className="text-[10px] text-primary/80" aria-hidden>▾</span>
          </button>
          <div
            className="pointer-events-none invisible absolute right-0 top-full z-[110] min-w-[200px] translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            role="menu"
          >
            <div className="glass-card rounded-xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-text transition-colors hover:bg-primary/10 hover:text-primary"
                role="menuitem"
              >
                <Instagram className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                Instagram
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-primary text-black px-5 py-2 rounded-full font-heading font-bold uppercase text-xs tracking-wider transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_20px_rgba(240,147,43,0.4)]"
        >
          Book a Call
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary p-1 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* ── Mobile Full-screen Menu ───────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[90] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          background: 'rgba(8, 11, 20, 0.92)',
        }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <Link
                key={link.label}
                href={link.href}
                scroll={false}
                prefetch={false}
                className="text-2xl text-text font-heading font-bold tracking-widest uppercase hover:text-primary transition-colors"
                onClick={(e) => handleHashNav(e, link.href)}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xl text-text font-heading font-bold tracking-widest uppercase hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-heading text-xl font-bold uppercase tracking-widest text-primary transition-colors hover:text-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Instagram className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            Instagram
          </Link>
          <Link
            href="/contact"
            className="mt-4 bg-primary text-black px-10 py-4 rounded-full font-heading font-bold uppercase tracking-wider transition-all hover:brightness-110"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </>
  );
}
