export const easeEditorial = [0.22, 1, 0.36, 1] as const;

export const navVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeEditorial },
  },
};

export const navItemVariants = {
  rest: { opacity: 1, scale: 1 },
  hover: { opacity: 1, scale: 1.02 },
  active: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeEditorial },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeEditorial },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeEditorial },
  },
  hover: {
    y: -6,
    transition: { duration: 0.4, ease: easeEditorial },
  },
};

export const springLiquid = { type: 'spring', stiffness: 380, damping: 34, mass: 0.9 } as const;
export const springLiquidSlow = { type: 'spring', stiffness: 220, damping: 28, mass: 1.2 } as const;