'use client';

import { useEffect, useRef } from 'react';

/**
 * Tracks the pointer over an element and exposes its position as
 * `--glint-x` / `--glint-y` CSS custom properties, driving the
 * cursor-following highlight baked into the glass material.
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export function useGlassGlint<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const px = ((event.clientX - rect.left) / rect.width) * 100;
      const py = ((event.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--glint-x', `${px}%`);
      el.style.setProperty('--glint-y', `${py}%`);
    };

    el.addEventListener('pointermove', onMove, { passive: true });
    return () => el.removeEventListener('pointermove', onMove);
  }, []);

  return ref;
}