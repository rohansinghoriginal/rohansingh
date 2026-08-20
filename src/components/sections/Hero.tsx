'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassLink } from '@/components/ui/GlassButton';
import { ArrowRightIcon, SocialIcon, type IconName } from '@/components/ui/Icons';
import { homeContent } from '@/content/home';
import { siteConfig } from '@/content/site';
import { accentVar } from '@/lib/accents';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function Hero() {
  return (
    <section
      className="hero relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="hero-network" aria-hidden="true" />
      <div className="hero-liquid hero-liquid-one" aria-hidden="true" />
      <div className="hero-liquid hero-liquid-two" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-20 items-center">
          <motion.div
            className="flex flex-col items-start gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="hero-kicker inline-flex w-fit items-center gap-2.5 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted glass-secondary rounded-full"
              variants={staggerItem}
            >
              <span className="accent-dot" style={{ background: accentVar('green') }} aria-hidden="true" />
              Data · AI · Insights
            </motion.span>

            <motion.h1
              id="hero-heading"
              className="hero-title text-foreground"
              variants={staggerItem}
            >
              <span className="block">Data Analyst</span>
              <span className="block text-muted font-light">&amp; AI Builder</span>
            </motion.h1>

            <motion.div className="hero-rule" variants={staggerItem} aria-hidden="true" />

            <motion.p className="text-base md:text-lg text-muted max-w-lg leading-relaxed" variants={staggerItem}>
              {homeContent.hero.subheadline}
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-3 pt-1" variants={staggerItem}>
              <GlassLink size="lg" variant="primary" href={homeContent.hero.ctaPrimary.href} className="hero-primary-cta">
                {homeContent.hero.ctaPrimary.label}
                <ArrowRightIcon className="h-4 w-4" />
              </GlassLink>
              <GlassLink
                size="lg"
                variant="secondary"
                href={homeContent.hero.ctaSecondary.href}
                target={homeContent.hero.ctaSecondary.external ? '_blank' : undefined}
                rel={homeContent.hero.ctaSecondary.external ? 'noopener noreferrer' : undefined}
              >
                View Resume
                <span className="hero-download-icon" aria-hidden="true">↓</span>
              </GlassLink>
            </motion.div>

            <motion.div className="hero-socials" variants={staggerItem}>
              <span>Find me on</span>
              <div className="flex gap-3 mt-2">
                {siteConfig.socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <SocialIcon name={social.icon as IconName} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-portrait-stage relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-portrait-3d">
              <div className="hero-portrait-zone" aria-hidden="true" />
              <div className="hero-portrait-zone" aria-hidden="true" />
              <div className="hero-portrait-zone" aria-hidden="true" />
              <div className="hero-portrait-zone" aria-hidden="true" />
              <div className="hero-portrait-zone" aria-hidden="true" />
              <div className="hero-portrait-zone" aria-hidden="true" />
              <div className="hero-portrait-zone" aria-hidden="true" />
              <div className="hero-portrait-zone" aria-hidden="true" />

              <div className="hero-portrait-frame">
                <Image
                  src="/profile.jpg"
                  alt={`${siteConfig.name} profile portrait`}
                  width={400}
                  height={400}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}