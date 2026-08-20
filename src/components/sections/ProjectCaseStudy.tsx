'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { type Project } from '@/types';
import { GlassLink } from '@/components/ui/GlassButton';
import { Tag } from '@/components/ui/Section';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface ProjectCaseStudyProps {
  project: Project;
}

const listDotStyles = {
  blue: 'var(--accent-blue)',
  rose: 'var(--accent-rose)',
  green: 'var(--accent-green)',
  amber: 'var(--accent-amber)',
} as const;

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const caseStudy = project.caseStudy;
  const accent = project.accent;

  if (!caseStudy) {
    return (
      <section className="section min-h-screen flex items-center justify-center" aria-labelledby="project-heading">
        <div className="container text-center">
          <h1 id="project-heading" className="text-h1 text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-muted">Case study coming soon.</p>
        </div>
      </section>
    );
  }

  const sectionReveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' as const },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <>
      <section className="section pt-24 pb-12" aria-labelledby="project-heading">
        <div className="container max-w-4xl">
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem}>
              <Tag tinted color={accent}>{project.category}</Tag>
            </motion.div>

            <motion.h1 id="project-heading" className="text-display text-foreground" variants={staggerItem}>
              {project.title}
            </motion.h1>

            <motion.p className="text-xl text-muted leading-relaxed" variants={staggerItem}>
              {project.tagline}
            </motion.p>

            <motion.div className="flex flex-wrap gap-2" variants={staggerItem} role="list">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </motion.div>

            {project.metrics && (
              <motion.dl className="flex flex-wrap gap-x-8 gap-y-3" variants={staggerItem} role="list">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-0.5">
                    <dt className="text-xs font-medium text-muted uppercase tracking-wider">{key}</dt>
                    <dd className="text-lg font-bold text-foreground tabular-nums">{value}</dd>
                  </div>
                ))}
              </motion.dl>
            )}

            <motion.div className="flex flex-wrap gap-3" variants={staggerItem}>
              {project.links.map((link) => (
                <GlassLink
                  key={link.label}
                  size="md"
                  variant={link.label === 'GitHub' ? 'primary' : 'secondary'}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </GlassLink>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {project.image && (
        <section className="section pb-12" aria-label="Project visual">
          <div className="container max-w-5xl">
            <motion.figure
              className="relative rounded-3xl p-3 glass-primary shadow-[var(--glass-shadow-soft)]"
              {...sectionReveal}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt=""
                  width={1280}
                  height={720}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.figure>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="overview-heading">
        <div className="container max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.h2 id="overview-heading" className="text-h2 text-foreground mb-6" variants={staggerItem}>
              Overview
            </motion.h2>
            <motion.p className="text-lg text-muted leading-relaxed" variants={staggerItem}>
              {caseStudy.overview}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="problem-heading">
        <div className="container max-w-4xl">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={staggerItem}>
              <h2 id="problem-heading" className="text-h3 text-foreground mb-4">Problem</h2>
              <p className="text-muted leading-relaxed">{caseStudy.problem}</p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h2 className="text-h3 text-foreground mb-4">Why It Mattered</h2>
              <p className="text-muted leading-relaxed">{caseStudy.whyItMattered}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="solution-heading">
        <div className="container max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h2 id="solution-heading" className="text-h2 text-foreground mb-6" variants={staggerItem}>
              Solution
            </motion.h2>
            <motion.p className="text-lg text-muted leading-relaxed mb-8" variants={staggerItem}>
              {caseStudy.solution}
            </motion.p>

            <motion.div variants={staggerItem}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Architecture</h3>
              <ol className="space-y-3" role="list">
                {caseStudy.architecture.map((step, index) => (
                  <li key={step} className="flex items-start gap-4 p-4 glass-secondary rounded-xl">
                    <span
                      className="w-8 h-8 rounded-full glass-secondary flex items-center justify-center text-sm font-bold tabular-nums flex-shrink-0 text-foreground"
                    >
                      {index + 1}
                    </span>
                    <span className="text-foreground font-medium pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="implementation-heading">
        <div className="container max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h2 id="implementation-heading" className="text-h2 text-foreground mb-6" variants={staggerItem}>
              Implementation
            </motion.h2>
            <motion.p className="text-muted leading-relaxed" variants={staggerItem}>
              {caseStudy.implementation}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="decisions-heading">
        <div className="container max-w-4xl">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={staggerItem}>
              <h2 id="decisions-heading" className="text-h3 text-foreground mb-4">Technical Decisions</h2>
              <ul className="space-y-3" role="list">
                {caseStudy.technicalDecisions.map((decision) => (
                  <li key={decision} className="flex items-start gap-3 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: listDotStyles.blue }} />
                    {decision}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h2 className="text-h3 text-foreground mb-4">Challenges</h2>
              <ul className="space-y-3" role="list">
                {caseStudy.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: listDotStyles.rose }} />
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="results-heading">
        <div className="container max-w-4xl">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={staggerItem}>
              <h2 id="results-heading" className="text-h3 text-foreground mb-4">Results</h2>
              <ul className="space-y-3" role="list">
                {caseStudy.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: listDotStyles.green }} />
                    {result}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h2 className="text-h3 text-foreground mb-4">Lessons Learned</h2>
              <ul className="space-y-3" role="list">
                {caseStudy.lessonsLearned.map((lesson) => (
                  <li key={lesson} className="flex items-start gap-3 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: listDotStyles.amber }} />
                    {lesson}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="cta-heading">
        <div className="container max-w-4xl">
          <motion.div className="text-center" {...sectionReveal}>
            <h2 id="cta-heading" className="text-h2 text-foreground mb-4">
              Interested in the details?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              View the source code or get in touch to discuss the architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {project.links.map((link) => (
                <GlassLink
                  key={link.label}
                  size="lg"
                  variant={link.label === 'GitHub' ? 'primary' : 'secondary'}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </GlassLink>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}