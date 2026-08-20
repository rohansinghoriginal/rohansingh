'use client';

import { motion } from 'framer-motion';
import { interests } from '@/content/interests';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { SectionHeader } from '@/components/ui/Section';
import { accentVar, accentNames } from '@/lib/accents';

const interestIcons: Record<string, string> = {
  rocket: 'M13 19c-2.3 0-4.178-2-6-2s-3.701 2-6 2v-2a4 4 0 014-4h1v-4a1 1 0 011-1h3a1 1 0 011 1v4h1a4 4 0 014 4v2zM5 10v-2a6 6 0 0112 0v2M5 10l4 8m12-8l-4 8',
  lightbulb: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  camera: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z',
  palette: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17a4 4 0 01-4-4v-4',
};

export function BeyondAI() {
  return (
    <section id="beyond-ai" className="section" aria-labelledby="beyond-ai-heading">
      <SectionHeader
        id="beyond-ai-heading"
        title="Beyond AI"
        description="Interests that shape how I think, build, and see the world."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12 lg:mb-16"
        variants={staggerContainer}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {interests.map((interest, index) => {
          const accent = accentNames[index % accentNames.length];
          return (
            <GlassSurface
              key={interest.title}
              variant="tertiary"
              size="lg"
              className="h-full"
              variants={staggerItem}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass-secondary flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={interestIcons[interest.icon ?? 'rocket'] ?? interestIcons.rocket}
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{interest.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{interest.description}</p>
                </div>
                <span
                  className="accent-dot mt-2"
                  style={{ background: accentVar(accent) }}
                  aria-hidden="true"
                />
              </div>
            </GlassSurface>
          );
        })}
      </motion.div>
    </section>
  );
}