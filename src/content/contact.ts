import type { ContactContent } from '@/types';

export const contactContent: ContactContent = {
  heading: "Let's build something useful.",
  subheading: 'Open to opportunities involving data analytics, business intelligence, machine learning, and data engineering.',
  email: 'rohansingh13902@gmail.com',
  socialLinks: [
    { label: 'Email', href: 'mailto:rohansingh13902@gmail.com', external: true, icon: 'mail' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rohansinghbbbdu/', external: true, icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/rohansinghoriginal', external: true, icon: 'github' },
  ],
  resumeLink: { label: 'Download Resume', href: '/resume.pdf', external: true },
};