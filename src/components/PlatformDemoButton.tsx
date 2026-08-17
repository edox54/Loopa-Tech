import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

// TODO(env): set VITE_PLATFORM_URL to the live Loopa platform (Facebook login) once available.
const PLATFORM_URL = import.meta.env.VITE_PLATFORM_URL || '';

// ponytail: iframe entry point only — auth already lives on the existing platform, nothing to build here.
export function PlatformDemoButton({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!PLATFORM_URL) return null;

  return (
    <>
      <button
        id="cta-ver-demo-plataforma"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center space-x-2 cursor-pointer ${className}`}
      >
        <span>Ver demo en vivo</span>
        <ExternalLink className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4">
          <div className="bg-brand-navy border border-brand-carbon rounded-2xl w-full max-w-5xl h-[85vh] relative overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-lg bg-brand-carbon border border-brand-navy text-white hover:text-brand-coral cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={PLATFORM_URL}
              title="Plataforma Loopa"
              className="w-full h-full border-0"
              allow="clipboard-write"
            />
          </div>
        </div>
      )}
    </>
  );
}
