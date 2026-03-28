import Link from 'next/link';
import { Instagram, Github } from 'lucide-react';
import HashLink from './HashLink';
import { INSTAGRAM_URL } from '@/lib/social';

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(240,147,43,0.2)] bg-[rgba(26,26,46,0.5)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(26,26,46,0.4)]">
      <div className="mb-16 h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-8 py-10 md:flex-row md:items-start md:py-20">
        <div className="text-center md:text-left">
          <div className="mb-4 font-heading text-3xl font-black tracking-widest text-white">SMIT KAPADIYA</div>
          <div className="max-w-sm font-mono text-sm leading-relaxed tracking-tight text-muted">
            Engineering intelligence for the next generation of business. Based in Surat, Gujarat.
          </div>
          <div className="mt-8 space-y-2 font-mono text-[11px] text-muted">
            <div>smit.kapadiya1412005@gmail.com</div>
            <div>+91 7575807483</div>
            <div>Surat, Gujarat, India 🇮🇳</div>
          </div>
        </div>

        <nav className="flex flex-col items-center gap-4 md:items-start">
          <HashLink href="/#work" className="font-heading text-sm font-bold uppercase tracking-wider text-muted transition-colors hover:text-primary">
            Work
          </HashLink>
          <HashLink href="/#products" className="font-heading text-sm font-bold uppercase tracking-wider text-muted transition-colors hover:text-primary">
            Products
          </HashLink>
          <HashLink href="/#about" className="font-heading text-sm font-bold uppercase tracking-wider text-muted transition-colors hover:text-primary">
            About
          </HashLink>
          <Link href="/contact" className="font-heading text-sm font-bold uppercase tracking-wider text-muted transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex flex-col items-center gap-8 md:items-end">
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-glow font-mono text-sm font-bold uppercase tracking-widest text-muted underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/SmitKapadiya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-glow flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-muted underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <Github className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              GitHub
            </Link>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-glow flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-muted underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <Instagram className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden />
              Instagram
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="font-mono text-xs uppercase text-muted transition-colors hover:text-text">
              Press Kit
            </Link>
            <Link href="/contact" className="font-mono text-xs uppercase text-muted transition-colors hover:text-text">
              Privacy
            </Link>
          </div>
          <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted/60">
            © {new Date().getFullYear()} SMIT KAPADIYA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
