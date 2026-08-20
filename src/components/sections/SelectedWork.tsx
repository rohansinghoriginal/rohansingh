'use client';

import { motion } from 'framer-motion';
import { featuredProjects } from '@/content/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { staggerContainer } from '@/lib/animations';
import { GlassLink } from '@/components/ui/GlassButton';
import { SectionHeader } from '@/components/ui/Section';

export function SelectedWork() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <SectionHeader
        id="work-heading"
        title="Projects"
        description="Production systems solving real problems. Each project includes a detailed case study."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        variants={staggerContainer}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        role="list"
      >
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-12 lg:mt-16"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <GlassLink size="lg" variant="secondary" href="/work">
          View All Projects
        </GlassLink>
      </motion.div>
    </section>
  );
}