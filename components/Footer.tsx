import Link from 'next/link';
import { Instagram, Github } from 'lucide-react';
import HashLink from './HashLink';
import { INSTAGRAM_URL } from '@/lib/social';

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(240,147,43,0.15)] glass-pill" style={{ borderRadius: 0 }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 md:gap-8 md:py-16 lg:px-20">

        {/* Brand */}
        <div>
          <div className="mb-3 font-heading text-2xl font-black tracking-widest text-white">
            SMIT KAPADIYA
          </div>
          <p className="mb-6 font-mono text-sm leading-relaxed text-muted">
            Engineering intelligence for the next generation of business. Based in Surat, Gujarat.
          </p>
          <div className="space-y-1.5 font-mono text-[11px] text-muted">
            <div>smit.kapadiya1412005@gmail.com</div>
            <div>+91 7575807483</div>
            <div>Surat, Gujarat, India 🇮🇳</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          <span className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">Navigate</span>
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

        {/* Social */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Follow</span>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-glow font-mono text-sm font-bold uppercase tracking-widest text-muted"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/SmitKapadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-glow flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-muted"
          >
            <Github className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
            GitHub
          </Link>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-glow flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-muted"
          >
            <Instagram className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden />
            Instagram
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(240,147,43,0.08)] px-5 py-4 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted/50">
            © {new Date().getFullYear()} SMIT KAPADIYA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="font-mono text-[10px] uppercase text-muted/50 transition-colors hover:text-muted">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
