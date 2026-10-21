import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'ul';
}

// Fades children in, one after another, when the block scrolls into view.
// The motion itself lives in index.css (.reveal); this only flips the class.
export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let settle: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add('is-visible');
        // Drop the stagger delay afterwards so hover effects on children respond instantly.
        settle = window.setTimeout(() => el.classList.add('is-settled'), 1400 + delay);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(settle);
    };
  }, [delay]);

  const Tag = as;
  const style = delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined;
  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
