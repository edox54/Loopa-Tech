import { useEffect } from 'react';

// One document listener feeds the cursor position to any `.spotlight` card (CSS draws the glow).
// Mouse/trackpad only: touch screens get the plain hover-free cards.
export function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.('.spotlight') as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
}
