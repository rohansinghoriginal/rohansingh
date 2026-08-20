'use client';

import { motion } from 'framer-motion';
import { contactContent } from '@/content/contact';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { GlassLink } from '@/components/ui/GlassButton';
import { SectionHeader } from '@/components/ui/Section';
import { SocialIcon, type IconName } from '@/components/ui/Icons';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { accentVar } from '@/lib/accents';

export function Contact() {
  const methodLabel = (href: string) => {
    if (href.startsWith('mailto:')) return href.replace('mailto:', '');
    return href.replace(/^https?:\/\/(www\.)?/, '').split('/')[0] || href;
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <SectionHeader
        id="contact-heading"
        title={contactContent.heading}
        description={contactContent.subheading}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <GlassSurface variant="primary" size="xl" glow="blue" variants={staggerItem} className="relative">
          <div
            className="liquid-form pointer-events-none"
            style={{
              width: '420px',
              height: '420px',
              top: '-180px',
              right: '-120px',
              background: 'radial-gradient(circle, rgba(91,127,191,0.05) 0%, transparent 65%)',
              animation: 'liquid-drift-b 22s ease-in-out infinite',
            }}
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16">
            <div className="min-w-0">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-6">
                <span className="accent-dot" style={{ background: accentVar('green') }} aria-hidden="true" />
                Direct channels
              </p>

              <div className="flex w-full min-w-0 flex-wrap gap-3" role="list" aria-label="Contact channels">
                {contactContent.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group flex w-full items-center gap-4 p-4 rounded-2xl glass-secondary transition-all duration-300 hover:shadow-[var(--glass-shadow-hover)] hover:-translate-y-0.5 sm:flex-1 sm:min-w-[220px]"
                    role="listitem"
                  >
                    <div className="w-11 h-11 rounded-xl glass-tertiary flex items-center justify-center flex-shrink-0">
                      <SocialIcon
                        name={link.icon as IconName}
                        className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors duration-300"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted mb-0.5">{link.label}</p>
                      <p className="font-medium text-foreground truncate">{methodLabel(link.href)}</p>
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            <div className="min-w-0 flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping"
                    style={{ background: accentVar('green') }}
                    aria-hidden="true"
                  />
                  <span
                    className="relative inline-flex rounded-full h-2.5 w-2.5"
                    style={{ background: accentVar('green') }}
                    aria-hidden="true"
                  />
                </span>
                <p className="font-medium text-foreground">Open to full-time &amp; contract</p>
              </div>

              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-medium text-muted uppercase tracking-wider mb-1">Response Time</dt>
                  <dd className="text-foreground">Usually within 24 hours</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-muted uppercase tracking-wider mb-1">Preferred Contact</dt>
                  <dd className="text-foreground">Email for detailed inquiries</dd>
                </div>
              </dl>

              <div className="mt-auto">
                <GlassLink
                  size="lg"
                  variant="primary"
                  href={contactContent.resumeLink.href}
                  target={contactContent.resumeLink.external ? '_blank' : undefined}
                  rel={contactContent.resumeLink.external ? 'noopener noreferrer' : undefined}
                  className="w-full justify-center"
                >
                  {contactContent.resumeLink.label}
                </GlassLink>
              </div>
            </div>
          </div>
        </GlassSurface>
      </motion.div>
    </section>
  );
}