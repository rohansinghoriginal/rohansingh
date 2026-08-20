'use client';

import { motion } from 'framer-motion';
import { skills } from '@/content/skills';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { accentVar, accentNames } from '@/lib/accents';

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <SectionHeader
        id="skills-heading"
        title="Skills"
        description="Technologies I use daily. Grouped by domain — no proficiency bars, just practical experience."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        variants={staggerContainer}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {skills.map((group, groupIndex) => {
          const accent = accentNames[groupIndex % accentNames.length];
          return (
            <GlassSurface key={group.category} variant="secondary" size="lg" className="h-full" variants={staggerItem}>
              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="accent-dot" style={{ background: accentVar(accent) }} aria-hidden="true" />
                {group.category}
              </h3>

              <ul className="flex flex-wrap gap-2" role="list">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Tag>{skill}</Tag>
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