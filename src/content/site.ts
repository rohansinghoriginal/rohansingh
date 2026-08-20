import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Rohan Singh',
  role: 'Data Analyst | AI Specialization',
  tagline: 'I turn complex datasets into clear business insights through Power BI, SQL, Python, and scalable analytics pipelines.',
  navLinks: [
    { label: 'Work', href: '/#work' },
    { label: 'Education', href: '/#education' },
    { label: 'Skills', href: '/#skills' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
  resumeLink: { label: 'View Resume', href: '/resume.pdf', external: true },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/rohansinghoriginal', external: true, icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/rohansinghbbdu', external: true, icon: 'linkedin' },
    { label: 'Email', href: 'mailto:rohansingh13902@gmail.com', external: true, icon: 'mail' },
  ],
};