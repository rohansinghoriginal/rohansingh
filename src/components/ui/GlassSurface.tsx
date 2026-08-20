'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';
import { useGlassGlint } from '@/lib/useGlassGlint';

type MotionDivProps = Omit<HTMLMotionProps<'div'>, 'onDragStart' | 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop' | 'onAnimationStart'>;

type GlassVariant = 'primary' | 'secondary' | 'tertiary';
type GlassSize = 'sm' | 'md' | 'lg' | 'xl';

const glassClassMap: Record<GlassVariant, string> = {
  primary: 'glass-primary',
  secondary: 'glass-secondary',
  tertiary: 'glass-tertiary',
};

export const glowClassMap = {
  blue: 'glow-field-blue',
  green: 'glow-field-green',
  amber: 'glow-field-amber',
  violet: 'glow-field-violet',
  rose: 'glow-field-rose',
  cyan: 'glow-field-cyan',
} as const;

const sizePaddingMap: Record<GlassSize, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

interface GlassSurfaceProps extends MotionDivProps {
  variant?: GlassVariant;
  children: ReactNode;
  className?: string;
  glow?: keyof typeof glowClassMap;
  size?: GlassSize;
}

export const GlassSurface = forwardRef<HTMLDivElement, GlassSurfaceProps>(
  ({ variant = 'primary', children, className = '', glow, size = 'md', style, ...props }, ref) => {
    const glintRef = useGlassGlint<HTMLDivElement>();

    const setRefs = (node: HTMLDivElement | null) => {
      glintRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    };

    return (
      <motion.div
        ref={setRefs}
        className={`glass-surface ${glassClassMap[variant]} ${sizePaddingMap[size]} ${className}`}
        style={style}
        {...props}
      >
        {glow && <div className={`glow-field ${glowClassMap[glow]}`} aria-hidden="true" />}
        {children}
      </motion.div>
    );
  }
);

GlassSurface.displayName = 'GlassSurface';

export type { GlassVariant, GlassSize };