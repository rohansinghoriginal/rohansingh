'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/content/site';
import { contactContent } from '@/content/contact';
import { SocialIcon, type IconName } from '@/components/ui/Icons';
import { fadeUp } from '@/lib/animations';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-4 footer-shell" role="contentinfo">
      <div className="container">
        <motion.div
          className="glass-primary rounded-3xl p-8 lg:p-12 relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="font-semibold text-xl tracking-tight text-foreground">{siteConfig.name}</span>
              <p className="text-sm text-muted mt-1">{siteConfig.role}</p>
              <p className="text-sm text-muted mt-5 leading-relaxed max-w-sm">{siteConfig.tagline}</p>
              <div className="mt-7">
                <a
                  href={`mailto:${contactContent.email}`}
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground hover:text-muted transition-colors duration-200"
                >
                  <SocialIcon name="mail" className="w-4 h-4 text-muted" />
                  {contactContent.email}
                </a>
              </div>
            </div>

            <nav className="lg:col-span-3" aria-label="Footer navigation">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Explore</p>
              <ul className="space-y-2.5" role="list">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Connect</p>
              <div className="flex items-center gap-3 mb-6">
                {siteConfig.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg glass-secondary hover:shadow-[var(--glass-shadow-hover)] hover:-translate-y-0.5 transition-all duration-200"
                    aria-label={link.label}
                  >
                    <SocialIcon name={link.icon as IconName} className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <a
                href={siteConfig.resumeLink.href}
                target={siteConfig.resumeLink.external ? '_blank' : undefined}
                rel={siteConfig.resumeLink.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
                {siteConfig.resumeLink.label}
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--glass-border)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-muted">
            <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <p className="hidden sm:block">Designed &amp; built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion</p>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full glass-secondary hover:shadow-[var(--glass-shadow-hover)] hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Back to top"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}