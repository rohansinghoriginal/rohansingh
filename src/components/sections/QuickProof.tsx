'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/content/home';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { SectionHeader } from '@/components/ui/Section';
import { accentVar, accentNames } from '@/lib/accents';

export function QuickProof() {
  return (
    <section id="quick-proof" className="section" aria-labelledby="quick-proof-heading">
      <SectionHeader
        id="quick-proof-heading"
        title={homeContent.quickProof.title}
        description={homeContent.quickProof.description}
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        variants={staggerContainer}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {homeContent.quickProof.categories.map((category, index) => {
          const accent = accentNames[index % accentNames.length];
          return (
            <GlassSurface
              key={category.label}
              variant="secondary"
              size="lg"
              className="h-full"
              variants={staggerItem}
              glow={accent}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl glass-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-muted tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-h3 text-foreground">{category.label}</h3>
                <span
                  className="accent-dot ml-auto"
                  style={{ background: accentVar(accent) }}
                  aria-hidden="true"
                />
              </div>

              <p className="text-sm text-muted leading-relaxed mb-5 min-h-[2.75rem]">
                {category.focus}
              </p>

              <div className="h-px bg-[var(--glass-border)] mb-4" aria-hidden="true" />

              <ul className="flex flex-wrap gap-2" role="list" aria-label={`${category.label} tools`}>
                {category.skills.map((skill) => (
                  <li key={skill} className="quick-proof-skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </GlassSurface>
          );
        })}
      </motion.div>
    </section>
  );
}