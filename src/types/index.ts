import type { AccentName } from '@/lib/accents';

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink extends Link {
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image?: string;
  gallery?: string[];
  tags: string[];
  links: Link[];
  metrics?: Record<string, string | number>;
  featured: boolean;
  accent: AccentName;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  whyItMattered: string;
  solution: string;
  architecture: string[];
  implementation: string;
  technicalDecisions: string[];
  challenges: string[];
  results: string[];
  lessonsLearned: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  dates: string;
  description: string;
  highlights: string[];
  subjects: string[];
  link?: Link;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface InterestCard {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  navLinks: Link[];
  resumeLink: Link;
  socialLinks: SocialLink[];
}

export interface HomeContent {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: Link;
    ctaSecondary: Link;
    ctaTertiary?: Link;
  };
  quickProof: {
    title: string;
    description: string;
    categories: QuickProofCategory[];
  };
}

export interface QuickProofCategory {
  label: string;
  focus?: string;
  skills: string[];
}

export interface AboutContent {
  heading: string;
  subtitle: string;
  text: string;
  image?: string;
  currentlyExploring: string[];
  socialLinks: SocialLink[];
}

export interface ContactContent {
  heading: string;
  subheading: string;
  email: string;
  socialLinks: SocialLink[];
  resumeLink: Link;
}