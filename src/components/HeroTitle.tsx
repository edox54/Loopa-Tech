import { useEffect, useRef, ReactNode } from 'react';
import { animate, stagger } from 'animejs';

interface HeroTitleProps {
  lines: ReactNode[];
  className?: string;
}

// ponytail: anime.js clip-reveal per line for the hero headline — the createtoday/refero
// "oversized bold typography" hook moment. Framer Motion still owns page transitions elsewhere.
export function HeroTitle({ lines, className = '' }: HeroTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rows = Array.from(el.querySelectorAll<HTMLElement>('[data-hero-row]'));
    animate(rows, {
      translateY: ['110%', '0%'],
      delay: stagger(120),
      duration: 900,
      ease: 'outExpo',
    });
  }, []);

  return (
    <h1 ref={ref} className={`font-display font-black tracking-tighter leading-[0.95] ${className}`}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden">
          <span data-hero-row className="block">
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
