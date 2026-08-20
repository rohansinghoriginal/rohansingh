'use client';

import { motion } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';
import { useGlassGlint } from '@/lib/useGlassGlint';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: 'glass-primary text-foreground',
  secondary: 'glass-secondary text-foreground border-[var(--glass-edge)]',
  ghost: 'text-muted hover:text-foreground hover:bg-[var(--glass-bg-3)]',
  outline: 'text-foreground border border-[var(--glass-edge)] hover:bg-[var(--glass-bg-3)]',
};

const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-5 py-2.5 text-base gap-2.5',
  lg: 'px-7 py-3 text-lg gap-3',
};

const baseButtonClasses =
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus-ring rounded-full select-none';

function Spinner() {
  return (
    <motion.span
      className="h-4 w-4"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
      </svg>
    </motion.span>
  );
}

interface GlassButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, children, className = '', disabled, ...props }, ref) => {
    const glintRef = useGlassGlint<HTMLButtonElement>();

    const setRefs = (node: HTMLButtonElement | null) => {
      glintRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    };

    return (
      <motion.button
        ref={setRefs}
        className={`${baseButtonClasses} ${buttonVariantClasses[variant]} ${buttonSizeClasses[size]} ${className}`}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 26 }}
        {...props}
      >
        {loading && <Spinner />}
        {children}
      </motion.button>
    );
  }
);

GlassButton.displayName = 'GlassButton';

interface GlassLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'onAnimationStart' | 'onDragStart' | 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
  disabled?: boolean;
}

export const GlassLink = forwardRef<HTMLAnchorElement, GlassLinkProps>(
  ({ variant = 'primary', size = 'md', loading = false, children, className = '', disabled, ...props }, ref) => {
    const glintRef = useGlassGlint<HTMLAnchorElement>();

    const setRefs = (node: HTMLAnchorElement | null) => {
      glintRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    };

    return (
      <motion.a
        ref={setRefs}
        className={`${baseButtonClasses} ${buttonVariantClasses[variant]} ${buttonSizeClasses[size]} ${className}`}
        aria-disabled={disabled || loading}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 26 }}
        {...props}
      >
        {loading && <Spinner />}
        {children}
      </motion.a>
    );
  }
);

GlassLink.displayName = 'GlassLink';

export type { ButtonVariant, ButtonSize };