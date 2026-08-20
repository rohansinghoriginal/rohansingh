'use client';

import { motion } from 'framer-motion';
import { buildSteps } from '@/content/process';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { SectionHeader } from '@/components/ui/Section';
import { accentVar } from '@/lib/accents';

export function HowIBuild() {
  return (
    <section id="how-i-build" className="section" aria-labelledby="how-i-build-heading">
      <SectionHeader
        id="how-i-build-heading"
        title="How I Build"
        description="Engineering discipline applied to AI systems. Seven principles that guide every project."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        variants={staggerContainer}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {buildSteps.map((step) => (
          <GlassSurface
            key={step.number}
            variant="secondary"
            size="lg"
            className="h-full"
            variants={staggerItem}
          >
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold tabular-nums text-foreground/20">{step.number}</span>
              <span
                className="w-px h-8"
                style={{ background: `linear-gradient(to bottom, ${accentVar('blue')}, transparent)` }}
                aria-hidden="true"
              />
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{step.description}</p>
          </GlassSurface>
        ))}
      </motion.div>
    </section>
  );
}