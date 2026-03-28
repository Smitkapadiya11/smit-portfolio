"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Menu, X, Instagram } from 'lucide-react';
import { useHashNavigation } from '@/hooks/useHashNavigation';
import { INSTAGRAM_URL } from '@/lib/social';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navCollapsedRef = useRef(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const goToHash = useHashNavigation();
  const scrollTickRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTickRef.current !== null) return;
      scrollTickRef.current = requestAnimationFrame(() => {
        scrollTickRef.current = null;
        const scrollY = window.scrollY;
        if (scrollY > 80 && !navCollapsedRef.current) {
          navCollapsedRef.current = true;
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(10, 10, 15, 0.72)',
            borderColor: 'rgba(240, 147, 43, 0.45)',
            backdropFilter: 'blur(20px)',
            duration: 0.3,
          });
        } else if (scrollY <= 80 && navCollapsedRef.current) {
          navCollapsedRef.current = false;
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(26, 26, 46, 0.52)',
            borderColor: 'rgba(240, 147, 43, 0.28)',
            backdropFilter: 'blur(24px)',
            duration: 0.3,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTickRef.current !== null) cancelAnimationFrame(scrollTickRef.current);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        duration: 0.4,
        ease: 'power3.out',
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        pointerEvents: 'none',
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHashNav = useCallback(
    (e: React.MouseEvent, href: string) => {
      if (!href.startsWith('/#')) return;
      e.preventDefault();
      const hash = href.replace('/', '');
      goToHash(hash);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    },
    [goToHash, isMobileMenuOpen]
  );

  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Products', href: '/#products' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-6 left-1/2 z-[100] flex w-[90%] items-center justify-between gap-10 rounded-full border border-[rgba(240,147,43,0.28)] bg-[rgba(26,26,46,0.55)] px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_40px_rgba(240,147,43,0.08)] backdrop-blur-[24px] supports-[backdrop-filter]:bg-[rgba(26,26,46,0.42)] md:w-max md:justify-center"
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold text-text tracking-widest font-heading uppercase">
            SMIT KAPADIYA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <Link
                key={link.label}
                href={link.href}
                scroll={false}
                prefetch={false}
                onClick={(e) => handleHashNav(e, link.href)}
                className="text-muted font-heading font-bold tracking-tighter uppercase hover:text-primary hover:scale-105 transition-transform active:scale-95 duration-150"
                data-cursor="hover"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted font-heading font-bold tracking-tighter uppercase hover:text-primary hover:scale-105 transition-transform active:scale-95 duration-150"
                data-cursor="hover"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="relative hidden md:block group">
          <button
            type="button"
            className="flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-wider text-muted outline-none transition-colors hover:text-primary"
            aria-haspopup="menu"
            data-cursor="hover"
          >
            Social
            <span className="translate-y-px text-[10px] text-primary/90" aria-hidden>
              ▾
            </span>
          </button>
          <div
            className="pointer-events-none invisible absolute right-0 top-full z-[110] min-w-[220px] translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            role="menu"
          >
            <div className="rounded-xl border border-primary/35 bg-[rgba(26,26,46,0.96)] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_28px_rgba(240,147,43,0.2)] backdrop-blur-xl">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-text transition-colors hover:bg-primary/10 hover:text-primary"
                data-cursor="hover"
                role="menuitem"
              >
                <Instagram
                  className="h-5 w-5 shrink-0 text-primary drop-shadow-[0_0_10px_rgba(240,147,43,0.65)]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-primary text-black px-6 py-2 rounded-none font-heading font-bold uppercase text-xs tracking-wider hover:brightness-110 transition-colors"
          data-cursor="hover"
        >
          Book a Call
        </Link>

        <button
          className="md:hidden text-primary p-1 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          data-cursor="hover"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-[#0a0a0f]/92 backdrop-blur-xl z-[90] flex flex-col items-center justify-center opacity-0 pointer-events-none"
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
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 font-heading text-xl font-bold uppercase tracking-widest text-primary drop-shadow-[0_0_12px_rgba(240,147,43,0.55)] transition-colors hover:text-secondary"
            onClick={toggleMenu}
          >
            <Instagram className="h-7 w-7" strokeWidth={1.75} aria-hidden />
            Instagram
          </Link>
          <Link
            href="/contact"
            className="mt-4 bg-primary text-black px-10 py-4 rounded-none font-heading font-bold uppercase tracking-wider hover:brightness-110 transition-colors"
            onClick={toggleMenu}
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </>
  );
}
