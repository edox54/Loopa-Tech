import { useEffect, useLayoutEffect, useRef, ReactNode } from 'react';
import { animate, stagger } from 'animejs';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section';
}

// ponytail: one IntersectionObserver-driven anime.js primitive, reused across every section
// header instead of hand-rolling scroll-reveal timelines per view (refero/createtoday-style staggered entrances).
export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Hide before first paint so there's no flash of visible content pre-animation.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.children.length > 0 ? Array.from(el.children) : [el];
    targets.forEach((t) => ((t as HTMLElement).style.opacity = '0'));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.children.length > 0 ? Array.from(el.children) : [el];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animate(targets, {
          opacity: [0, 1],
          translateY: [24, 0],
          delay: stagger(90, { start: delay }),
          duration: 700,
          ease: 'outQuad',
        });
        observer.disconnect();
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Tag = as;
  return (
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}
