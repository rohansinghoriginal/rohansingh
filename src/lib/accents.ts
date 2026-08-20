export const accentNames = ['blue', 'green', 'amber', 'violet', 'rose', 'cyan'] as const;

export type AccentName = (typeof accentNames)[number];

export const accentVar = (name: AccentName): string => `var(--accent-${name})`;

export const tintedBackground = (name: AccentName, alpha = 14): string =>
  `color-mix(in srgb, ${accentVar(name)} ${alpha}%, transparent)`;