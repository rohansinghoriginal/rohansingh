'use client';

import { motion } from 'framer-motion';
import { experience } from '@/content/experience';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { accentVar, accentNames } from '@/lib/accents';

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <SectionHeader
        id="experience-heading"
        title="Experience"
        description="Roles where I've built and shipped AI systems, data products, and intelligent applications."
      />

      <motion.div
        variants={staggerContainer}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <GlassSurface variant="primary" size="xl" className="relative" variants={staggerItem}>
          <div className="relative">
            <div
              className="absolute left-[7px] top-4 bottom-4 w-px bg-[var(--glass-border)]"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {experience.map((item, index) => {
                const accent = accentNames[index % accentNames.length];
                return (
                  <div key={`${item.role}-${item.organization}`} className="relative pl-10">
                    <span
                      className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)]"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute left-[3px] top-[7px] w-[9px] h-[9px] rounded-full"
                      style={{ background: accentVar(accent), opacity: 0.55 }}
                      aria-hidden="true"
                    />

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{item.role}</h3>
                        <p className="text-muted">
                          {item.organization}
                          {item.link && (
                            <>
                              <span className="mx-2 text-muted/50">·</span>
                              <a
                                href={item.link.href}
                                target={item.link.external ? '_blank' : undefined}
                                rel={item.link.external ? 'noopener noreferrer' : undefined}
                                className="text-sm font-medium hover:text-foreground transition-colors duration-200"
                              >
                                {item.link.label}
                              </a>
                            </>
                          )}
                        </p>
                      </div>
                      <time className="text-sm font-medium text-muted tabular-nums whitespace-nowrap" dateTime={item.dates}>
                        {item.dates}
                      </time>
                    </div>

                    <p className="text-muted mb-5 leading-relaxed">{item.description}</p>

                    <ul className="space-y-2.5 mb-6" role="list">
                      {item.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-3 text-sm text-muted/80">
                          <span
                            className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                            style={{ background: accentVar(accent), opacity: 0.8 }}
                            aria-hidden="true"
                          />
                          {resp}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                      {item.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </GlassSurface>
      </motion.div>
    </section>
  );
}