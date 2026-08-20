import { Metadata } from 'next';
import { projects } from '@/content/projects';
import { siteConfig } from '@/content/site';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/Section';
import { BreathingBackground } from '@/components/ui/GlowField';

export const metadata: Metadata = {
  title: 'All Projects',
  description: `A complete overview of ${siteConfig.name}'s data analytics, business intelligence, and machine learning projects.`,
};

export default function WorkPage() {
  return (
    <>
      <BreathingBackground />
      <section className="section pt-28 lg:pt-32" aria-labelledby="work-index-heading">
        <SectionHeader
          id="work-index-heading"
          title="All Projects"
          description="A complete look at the systems I've designed, built, and shipped."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}