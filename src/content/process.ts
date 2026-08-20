import type { ProcessStep } from '@/types';

export const buildSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand the Problem',
    description: 'Deep dive into the domain, stakeholders, and constraints. Define success metrics before writing code.',
  },
  {
    number: '02',
    title: 'Explore the Data',
    description: 'Profile distributions, find patterns, identify quality issues. Data understanding drives model choices.',
  },
  {
    number: '03',
    title: 'Design the Solution',
    description: 'Architecture diagrams, technology selection, evaluation criteria. Prototype critical paths first.',
  },
  {
    number: '04',
    title: 'Build the System',
    description: 'Modular, tested, observable code. CI/CD from day one. Infrastructure as code.',
  },
  {
    number: '05',
    title: 'Evaluate Rigorously',
    description: 'Offline metrics, online A/B tests, edge cases, failure modes. Automate evaluation pipelines.',
  },
  {
    number: '06',
    title: 'Deploy & Monitor',
    description: 'Gradual rollout, feature flags, alerting on drift and latency. Observability built-in.',
  },
  {
    number: '07',
    title: 'Iterate Fast',
    description: 'Feedback loops drive improvement. Retrain, refine, rebuild. Compound learning over time.',
  },
];