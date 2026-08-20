import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject } from '@/content/projects';
import { ProjectCaseStudy } from '@/components/sections/ProjectCaseStudy';
import { siteConfig } from '@/content/site';
import { BreathingBackground } from '@/components/ui/GlowField';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.tagline,
      type: 'article',
      images: project.image ? [{ url: project.image, width: 1200, height: 630, alt: project.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.tagline,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <BreathingBackground />
      <ProjectCaseStudy project={project} />
    </>
  );
}