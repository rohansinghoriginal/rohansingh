import type { Link } from '@/types';

interface ExperienceItem {
  role: string;
  organization: string;
  dates: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  link?: Link;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Membership Chair',
    organization: 'IEEE Student Branch - BBDU',
    dates: 'Nov 2024 - Present',
    description: 'Supporting the university technology community through member engagement, recruitment, and technical events.',
    responsibilities: [
      'Coordinated technical workshops and events for the student branch.',
      'Led member recruitment through interviews and candidate shortlisting.',
      'Managed member engagement initiatives and role assignments across students and faculty.',
    ],
    technologies: ['Event Coordination', 'Recruitment', 'Community Engagement'],
  },
  {
    role: 'Social Media Head',
    organization: 'National Service Scheme (NSS)',
    dates: 'Nov 2022 - Sep 2024',
    description: 'Led digital outreach and volunteer communications while using engagement data to improve campaign performance.',
    responsibilities: [
      'Led a team of 10 volunteers across social media campaigns and digital outreach.',
      'Completed 240+ hours of community service through volunteer initiatives and special camps.',
      'Analyzed engagement metrics to optimize content performance and campaign reach.',
    ],
    technologies: ['Social Analytics', 'Digital Outreach', 'Team Leadership'],
  },
];
