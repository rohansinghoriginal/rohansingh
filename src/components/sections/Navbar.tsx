'use client';

import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { GlassLink } from '@/components/ui/GlassButton';
import { LiquidBlob } from '@/components/ui/LiquidBlob';
import { siteConfig } from '@/content/site';
import { accentVar } from '@/lib/accents';
import { navVariants, navItemVariants } from '@/lib/animations';

function getSectionId(href: string) {
  const hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : decodeURIComponent(href.slice(hashIndex + 1));
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const clusterRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const selectedIndexRef = useRef<number | null>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const selectionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const blobX = useMotionValue(0);
  const blobY = useMotionValue(0);
  const blobWidth = useMotionValue(0);
  const blobHeight = useMotionValue(0);

  const navItems = siteConfig.navLinks;
  const sectionIds = navItems.map((link) => getSectionId(link.href));

  const positionBlob = useCallback((index: number) => {
    const item = itemsRef.current[index];
    const cluster = clusterRef.current;
    if (!item || !cluster) return;
    const itemRect = item.getBoundingClientRect();
    const clusterRect = cluster.getBoundingClientRect();
    blobX.set(itemRect.left - clusterRect.left);
    blobY.set(itemRect.top - clusterRect.top);
    blobWidth.set(itemRect.width);
    blobHeight.set(itemRect.height);
  }, [blobX, blobY, blobWidth, blobHeight]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);

      if (selectedIndexRef.current !== null) {
        const selectedSection = document.getElementById(sectionIds[selectedIndexRef.current]);
        if (selectedSection && Math.abs(selectedSection.getBoundingClientRect().top - 96) > 12) return;
        selectedIndexRef.current = null;
      }

      let current = activeIndexRef.current;
      sectionIds.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 128) current = index;
      });
      if (current !== activeIndexRef.current) {
        activeIndexRef.current = current;
        setActiveIndex(current);
      }
    };

    const onScroll = () => {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = window.requestAnimationFrame(() => {
        scrollFrameRef.current = null;
        handleScroll();
      });
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
      if (selectionTimeoutRef.current !== null) clearTimeout(selectionTimeoutRef.current);
    };
  }, [sectionIds]);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  useLayoutEffect(() => {
    positionBlob(activeIndex);
    const handleResize = () => positionBlob(activeIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, positionBlob]);

  const selectNavigation = (index: number, closeMenu = true) => {
    selectedIndexRef.current = index;
    if (selectionTimeoutRef.current !== null) clearTimeout(selectionTimeoutRef.current);
    selectionTimeoutRef.current = setTimeout(() => {
      selectedIndexRef.current = null;
      selectionTimeoutRef.current = null;
    }, 1600);
    activeIndexRef.current = index;
    setActiveIndex(index);
    if (closeMenu) setMobileOpen(false);
  };

  const navigateMobileSection = (href: string, index: number) => {
    const id = getSectionId(href);
    selectNavigation(index, false);
    setMobileOpen(false);

    if (window.location.pathname === '/' && id) {
      window.history.pushState(null, '', href);
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    window.location.assign(href);
  };

  return (
    <motion.nav
      className="fixed top-0 inset-x-0 z-[var(--z-nav)] px-3 sm:px-4 nav-shell pointer-events-none"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`pointer-events-auto relative w-full min-w-0 overflow-hidden glass-primary rounded-2xl transition-shadow duration-500 ${
            scrolled ? 'shadow-[var(--glass-shadow)]' : 'shadow-[var(--glass-shadow-soft)]'
          }`}
        >
          <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-5">
            <motion.a
              href="/"
              className="min-w-0 truncate font-semibold text-lg tracking-tight text-foreground hover:text-foreground/70 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`${siteConfig.name} - Home`}
            >
              {siteConfig.name}
            </motion.a>

            <div ref={clusterRef} className="hidden md:flex items-center gap-1 relative">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  onMouseEnter={() => {
                    setHoverIndex(index);
                    positionBlob(index);
                  }}
                  onMouseLeave={() => {
                    setHoverIndex(null);
                    positionBlob(activeIndexRef.current);
                  }}
                >
                  <motion.a
                    href={item.href}
                    className={`relative z-10 px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      activeIndex === index ? 'text-foreground' : 'text-muted hover:text-foreground'
                    }`}
                    onClick={() => selectNavigation(index)}
                    variants={navItemVariants}
                    initial="rest"
                    animate={activeIndex === index ? 'active' : hoverIndex === index ? 'hover' : 'rest'}
                    aria-current={activeIndex === index ? 'page' : undefined}
                  >
                    {item.label}
                  </motion.a>
                </div>
              ))}
              <LiquidBlob
                x={blobX}
                y={blobY}
                width={blobWidth}
                height={blobHeight}
                halo={`radial-gradient(circle, rgba(255,255,255,0.85) 0%, ${accentVar('blue')} 30%, transparent 72%)`}
              />
            </div>

            <div className="flex items-center gap-2">
              <GlassLink
                size="sm"
                variant="primary"
                href={siteConfig.resumeLink.href}
                target={siteConfig.resumeLink.external ? '_blank' : undefined}
                rel={siteConfig.resumeLink.external ? 'noopener noreferrer' : undefined}
                className="hidden lg:inline-flex"
              >
                {siteConfig.resumeLink.label}
              </GlassLink>

              <button
                className="md:hidden p-2 glass-secondary rounded-xl"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((open) => !open)}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                id="mobile-nav"
                className="md:hidden border-t border-[var(--glass-edge)]"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
              >
                <div className="px-4 py-3 flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                        activeIndex === index ? 'text-foreground bg-[var(--glass-bg-3)]' : 'text-muted hover:text-foreground'
                      }`}
                      onClick={(event) => {
                        event.preventDefault();
                        navigateMobileSection(item.href, index);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <GlassLink
                    size="sm"
                    variant="secondary"
                    href={siteConfig.resumeLink.href}
                    target={siteConfig.resumeLink.external ? '_blank' : undefined}
                    rel={siteConfig.resumeLink.external ? 'noopener noreferrer' : undefined}
                    className="mt-2 justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    {siteConfig.resumeLink.label}
                  </GlassLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}