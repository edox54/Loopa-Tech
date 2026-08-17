import { Image, Video } from 'lucide-react';

interface MediaPlaceholderProps {
  ratio?: '16/9' | '1/1' | '4/3' | '21/9';
  kind?: 'image' | 'video';
  label?: string;
  className?: string;
}

// ponytail: no real assets yet — one reusable placeholder instead of ad-hoc empty boxes per view.
// Swap for a real <img>/<video> by replacing the call site once brand assets land.
export function MediaPlaceholder({ ratio = '16/9', kind = 'image', label, className = '' }: MediaPlaceholderProps) {
  const Icon = kind === 'video' ? Video : Image;
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 bg-brand-carbon/60 border border-dashed border-brand-navy/60 rounded-2xl overflow-hidden text-brand-lavender/30 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Icon className="w-8 h-8" />
      {label && <span className="text-[10px] font-mono uppercase tracking-widest">{label}</span>}
    </div>
  );
}
