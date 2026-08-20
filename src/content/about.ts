import type { AboutContent } from '@/types';

export const aboutContent: AboutContent = {
  heading: 'Rohan Singh',
  subtitle: 'Data Analyst | AIML Engineer',
  text: `I'm a Data Analyst and Computer Science student specializing in AI at Babu Banarasi Das University. I work across Python, SQL, Power BI, Microsoft Fabric, and statistical analysis to turn complex datasets into useful business decisions.

My recent work includes a Microsoft Fabric analytics pipeline for 200K+ Swiggy sales records and a Power BI supply chain dashboard built across 10K+ transactions. I care about clean data models, meaningful KPIs, and automation that makes reporting faster and more reliable.

Alongside analytics, I continue building my foundation in machine learning, data engineering, and intelligent systems.`,
  image: '/profile.jpg',
  currentlyExploring: [
    'Machine Learning Pipelines',
    'Data Visualization & Storytelling',
    'Microsoft Fabric Analytics',
    'Statistical Analysis',
    'Data Quality at Scale',
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/rohansinghoriginal', external: true, icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/rohansinghbbdu', external: true, icon: 'linkedin' },
    { label: 'Email', href: 'mailto:rohansingh13902@gmail.com', external: true, icon: 'mail' },
  ],
};