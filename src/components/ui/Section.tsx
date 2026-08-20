'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { accentVar, tintedBackground, type AccentName } from '@/lib/accents';

interface SectionHeaderProps {
  id?: string;
  title: string;
  description?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ id, title, description, eyebrow, align = 'left', className = '' }: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'items-center text-center mx-auto' : 'items-start';

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-10 lg:mb-14 ${alignClasses} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {eyebrow && (
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-muted"
          variants={staggerItem}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 id={id} className="text-h2 text-foreground" variants={staggerItem}>
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={`text-base text-muted max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
          variants={staggerItem}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

interface TagProps {
  children: ReactNode;
  color?: AccentName;
  tinted?: boolean;
  className?: string;
}

export function Tag({ children, color = 'blue', tinted = false, className = '' }: TagProps) {
  const base = 'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap';
  const neutral = 'bg-[var(--glass-bg-3)] border border-[var(--glass-edge)] text-muted';

  if (tinted) {
    return (
      <span
        className={`${base} border border-transparent ${className}`}
        style={{ background: tintedBackground(color), color: accentVar(color) }}
      >
        {children}
      </span>
    );
  }

  return <span className={`${base} ${neutral} ${className}`}>{children}</span>;
}