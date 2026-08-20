'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutContent } from '@/content/about';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { SocialIcon, type IconName } from '@/components/ui/Icons';
import { accentNames } from '@/lib/accents';

export function About() {
  const paragraphs = aboutContent.text.split('\n\n');

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <SectionHeader id="about-heading" title="About" />

      <motion.div
        className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start"
        variants={staggerContainer}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div className="lg:col-span-2" variants={staggerItem}>
          <div className="space-y-6 mb-10">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-lg text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-10 border-t border-[var(--glass-border)]">
            <h3 className="text-lg font-semibold text-foreground mb-4">Currently Exploring</h3>
            <ul className="flex flex-wrap gap-2" role="list">
              {aboutContent.currentlyExploring.map((topic, index) => (
                <li key={topic}>
                  <Tag tinted color={accentNames[index % accentNames.length]}>{topic}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.aside className="lg:col-span-1" variants={staggerItem}>
          <GlassSurface variant="primary" size="lg">
            <div className="aspect-square rounded-xl overflow-hidden bg-[var(--glass-tertiary)] mb-6">
              {aboutContent.image ? (
                <Image
                  src={aboutContent.image}
                  alt=""
                  width={512}
                  height={512}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl glass-secondary flex items-center justify-center">
                    <svg className="w-12 h-12 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2">{aboutContent.heading}</h3>
            <p className="text-sm text-muted mb-6">{aboutContent.subtitle}</p>

            <div className="flex flex-wrap gap-2" role="list" aria-label="Social links">
              {aboutContent.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg glass-secondary hover:shadow-[var(--shadow-glass-hover)] transition-all duration-200"
                  aria-label={link.label}
                >
                  <SocialIcon name={link.icon as IconName} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </GlassSurface>
        </motion.aside>
      </motion.div>
    </section>
  );
}