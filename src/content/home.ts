import type { HomeContent } from '@/types';

export const homeContent: HomeContent = {
  hero: {
    headline: 'Data Analyst\n&\nAI Builder',
    subheadline: 'I transform raw data into meaningful insights and build intelligent analytics systems that drive real-world impact.',
    ctaPrimary: { label: 'View My Work', href: '/#work' },
    ctaSecondary: { label: 'View Resume', href: '/resume.pdf', external: true },
    ctaTertiary: { label: 'GitHub', href: 'https://github.com/rohansinghoriginal', external: true },
  },
  quickProof: {
    title: 'Technical Focus',
    description: 'A practical stack for moving from raw records to reliable decisions: inspect the data, model the signal, and ship useful analysis.',
    categories: [
      { label: 'Analytics', focus: 'Find the signal before the model.', skills: ['EDA', 'Data Cleaning', 'Data Wrangling', 'Statistics'] },
      { label: 'BI & Viz', focus: 'Turn metrics into decisions.', skills: ['Power BI', 'DAX', 'Power Query', 'Tableau', 'Excel'] },
      { label: 'Data Engineering', focus: 'Build pipelines that stay usable.', skills: ['Microsoft Fabric', 'OneLake', 'Lakehouse', 'ETL Pipelines'] },
      { label: 'SQL & Python', focus: 'Query, transform, and scale analysis.', skills: ['PostgreSQL', 'Pandas', 'NumPy', 'Star Schema', 'Window Functions'] },
    ],
  },
};