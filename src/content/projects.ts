import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'swiggy-sales-intelligence',
    title: 'Swiggy Sales Intelligence Platform',
    category: 'End-to-End Data Analytics',
    tagline: 'An analytics pipeline and Power BI dashboard turning 200K+ sales records into clear revenue and growth insights.',
    description: 'Built a Microsoft Fabric pipeline across OneLake, Lakehouse, Warehouse, and Data Pipelines. Modeled the data in SQL, analyzed it with Python, and delivered a live Power BI dashboard tracking revenue, orders, average order value, and year-over-year trends.',
    image: '/projects/swiggy_intelligence.jpg',
    tags: ['Microsoft Fabric', 'SQL', 'Python', 'Power BI', 'Pandas', 'DAX'],
    links: [
      { label: 'GitHub', href: 'https://github.com/rohansinghoriginal/Swiggy-Sales-Analysis---Fabric_PowerBI_SQL_Python', external: true },
      { label: 'Case Study', href: '/work/swiggy-sales-intelligence' },
    ],
    metrics: { records: '200K+', revenue: 'Rs. 53M', orders: '197K', manualReporting: '-80%' },
    featured: true,
    accent: 'blue',
    caseStudy: {
      overview: 'Swiggy Sales Intelligence Platform is an end-to-end analytics solution for understanding sales performance, customer preferences, and regional growth.',
      problem: 'Large sales data needed to be organized into a reliable analytical model and an accessible reporting experience.',
      whyItMattered: 'Automated reporting and clear KPIs make it easier to identify growth trends, regional concentration, and product preferences.',
      solution: 'Processed 200K+ records through Microsoft Fabric, designed a star schema in SQL, performed EDA in Python, and built an interactive Power BI dashboard.',
      architecture: ['OneLake storage', 'Fabric Lakehouse', 'Fabric Warehouse', 'SQL star schema', 'Python EDA with Pandas and NumPy', 'Power BI dashboard'],
      implementation: 'Created automated Fabric data pipelines, optimized joins and transformations, explored the data with Python, and translated the findings into DAX measures and Power BI visuals.',
      technicalDecisions: ['Microsoft Fabric for an integrated analytics workflow', 'Star schema for clearer reporting relationships', 'Python for repeatable exploratory analysis', 'Power BI for interactive KPI reporting'],
      challenges: ['Maintaining consistency across pipeline stages', 'Optimizing SQL transformations across a large sales dataset', 'Turning exploratory findings into decision-ready dashboard views'],
      results: ['Rs. 53M revenue tracked', '197K orders analyzed', '60%+ preference for vegetarian items', '70% revenue concentrated in top regions', 'Manual reporting effort reduced by 80%'],
      lessonsLearned: ['A clean analytical model makes every downstream insight easier', 'Automation creates more time for interpretation', 'Dashboard KPIs should answer business questions directly'],
    },
  },
  {
    slug: 'samsung-supply-chain',
    title: 'Samsung Supply Chain Analytics Dashboard',
    category: 'Business Intelligence',
    tagline: 'A Power BI supply chain dashboard connecting procurement, inventory, logistics, and sales across 10K+ transactions.',
    description: 'Designed a scalable fact and dimension model with advanced DAX measures for revenue, profit margin, inventory turnover, lead time, and service-level KPIs.',
    image: '/projects/samsung_supply_chain.jpg',
    tags: ['Power BI', 'DAX', 'Data Modeling', 'SQL', 'Supply Chain'],
    links: [
      { label: 'GitHub', href: 'https://github.com/rohansinghoriginal/Samsung-Supply-Chain', external: true },
      { label: 'Case Study', href: '/work/samsung-supply-chain' },
    ],
    metrics: { transactions: '10K+', shipmentDelay: '15%', dashboards: 'KPI-driven' },
    featured: true,
    accent: 'green',
    caseStudy: {
      overview: 'Samsung Supply Chain Analytics Dashboard brings operational data together so teams can monitor procurement, inventory, logistics, and sales performance.',
      problem: 'Supply chain signals were distributed across operational areas, making supplier bottlenecks and inventory imbalances difficult to spot quickly.',
      whyItMattered: 'A unified view of operational KPIs improves visibility into delays, inventory health, and service-level performance.',
      solution: 'Built a Power BI dashboard over 10K+ transactions with a scalable fact and dimension model, DAX measures, drill-through reports, and KPI monitoring.',
      architecture: ['Fact and dimension model', 'Procurement and supplier data', 'Inventory and logistics data', 'Sales transactions', 'DAX KPI layer', 'Interactive Power BI reports'],
      implementation: 'Integrated the core supply chain datasets, shaped the model for reporting, developed measures for revenue, margin, turnover, lead time, and service level, then added drill-through analysis for operational follow-up.',
      technicalDecisions: ['Fact and dimension modeling for scalability', 'DAX measures for reusable KPI logic', 'Drill-through reports for root-cause exploration', 'Power BI for accessible operational monitoring'],
      challenges: ['Aligning metrics across procurement, inventory, logistics, and sales', 'Creating a model that supports both executive summaries and detailed investigation', 'Making delays and imbalances visible without overwhelming the dashboard'],
      results: ['10K+ transactions integrated', '15% shipment delay rate identified', 'Supplier bottlenecks surfaced', 'Inventory imbalances made visible', 'Operational visibility improved through interactive KPI monitoring'],
      lessonsLearned: ['Good data modeling is the foundation of trustworthy BI', 'A KPI is most useful when it leads to a specific next question', 'Drill-through makes high-level dashboards actionable'],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
