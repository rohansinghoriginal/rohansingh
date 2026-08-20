'use client';

import { motion, useSpring, useTransform, useVelocity, type MotionValue } from 'framer-motion';
import { springLiquid, springLiquidSlow } from '@/lib/animations';

interface LiquidBlobProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  width: MotionValue<number>;
  height: MotionValue<number>;
  /** Halo color — a faint ambient tint that trails the blob. */
  halo?: string;
  className?: string;
}

/**
 * A single persistent liquid-glass object that follows navigation targets.
 *
 * The leading edge stretches with velocity, the body lags on a softer
 * spring, and a blurred halo trails behind, so the material reads as a
 * physical membrane being pulled between targets rather than a static
 * selected-state rectangle.
 */
export function LiquidBlob({ x, y, width, height, halo = 'rgba(255,255,255,0.9)', className = '' }: LiquidBlobProps) {
  const sx = useSpring(x, springLiquid);
  const sy = useSpring(y, springLiquid);
  const sw = useSpring(width, springLiquid);
  const sh = useSpring(height, springLiquid);

  const haloX = useSpring(x, springLiquidSlow);
  const haloY = useSpring(y, springLiquidSlow);
  const haloW = useSpring(width, springLiquidSlow);
  const haloH = useSpring(height, springLiquidSlow);

  const velocity = useVelocity(sx);
  const stretch = useSpring(
    useTransform(velocity, [-900, 0, 900], [1.14, 1, 1.14]),
    { stiffness: 320, damping: 26 }
  );
  const radius = useSpring(
    useTransform(velocity, [-900, 0, 900], [20, 14, 20]),
    { stiffness: 320, damping: 28 }
  );

  return (
    <>
      <motion.div
        className={`liquid-blob-halo ${className}`}
        style={{ x: haloX, y: haloY, width: haloW, height: haloH, background: halo }}
        aria-hidden="true"
      />
      <motion.div
        className={`liquid-blob ${className}`}
        style={{ x: sx, y: sy, width: sw, height: sh, scaleX: stretch, borderRadius: radius }}
        aria-hidden="true"
      />
    </>
  );
}