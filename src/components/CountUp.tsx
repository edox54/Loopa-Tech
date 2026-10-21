import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

// Counts from 0 to `to` the first time it scrolls into view.
// The prerendered HTML shows the final number, so crawlers and no-JS visitors read the real value.
export function CountUp({ to, prefix = '', suffix = '', duration = 1600, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Already on screen at load: keep the final number instead of jumping back to 0.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setValue(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
