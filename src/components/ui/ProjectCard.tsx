'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { type Project } from '@/types';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { GlassLink } from '@/components/ui/GlassButton';
import { Tag } from '@/components/ui/Section';
import { ArrowRightIcon, SocialIcon } from '@/components/ui/Icons';
import { cardVariants } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const accent = project.accent;

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="group relative"
    >
      <GlassSurface
        variant="primary"
        size="md"
        className="overflow-hidden p-0 h-full flex flex-col"
        glow={accent}
      >
        <div className="relative aspect-video overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt=""
              width={640}
              height={360}
              unoptimized
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[var(--glass-tertiary)]">
              <div className="w-16 h-16 rounded-2xl glass-secondary flex items-center justify-center">
                <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}

          <div
            className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />

          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-lg bg-white/80 backdrop-blur-sm text-foreground border border-black/10 shadow-sm hover:bg-white transition-colors"
                aria-label={link.label}
              >
                {link.label === 'GitHub' ? (
                  <SocialIcon name="github" className="w-4 h-4" />
                ) : (
                  <ArrowRightIcon className="w-4 h-4" />
                )}
              </a>
            ))}
          </div>

          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/80 backdrop-blur-sm text-foreground border border-black/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-3">
            <Tag tinted color={accent}>{project.category}</Tag>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>

          <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{project.tagline}</p>

          {project.metrics && (
            <dl className="flex flex-wrap gap-x-5 gap-y-2 mb-5" role="list">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="flex items-baseline gap-1.5">
                  <dt className="text-xs font-medium text-muted uppercase tracking-wider">{key}</dt>
                  <dd className="text-sm font-semibold text-foreground tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--glass-border)]">
            {project.links.slice(0, 2).map((link) => (
              <GlassLink
                key={link.label}
                size="sm"
                variant={link.label === 'Case Study' ? 'primary' : 'ghost'}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex-1 min-w-0 justify-center"
              >
                {link.label}
              </GlassLink>
            ))}
          </div>
        </div>
      </GlassSurface>
    </motion.article>
  );
}