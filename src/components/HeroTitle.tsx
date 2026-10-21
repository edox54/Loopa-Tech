import type { CSSProperties, ReactNode } from 'react';

interface HeroTitleProps {
  lines: ReactNode[];
  className?: string;
}

// Each line rises out of its own mask (CSS .hero-row), so it animates straight from the prerendered HTML.
export function HeroTitle({ lines, className = '' }: HeroTitleProps) {
  return (
    <h1 className={`font-display font-black tracking-tighter leading-[0.95] ${className}`}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden pb-[0.08em]">
          <span className="hero-row block" style={{ '--i': idx } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
