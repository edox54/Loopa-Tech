import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

// ponytail: single reusable "stop and look" callout for embedding inside article bodies.
export function InnerCTA() {
  return (
    <div className="not-prose my-8 bg-brand-navy border-l-4 border-brand-coral rounded-r-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start space-x-3">
        <Sparkles className="w-5 h-5 text-brand-coral shrink-0 mt-0.5" />
        <p className="text-white text-sm font-semibold leading-relaxed">
          ¿Esto suena al reto que tienes hoy? Hablemos de cómo aplicarlo en tu empresa.
        </p>
      </div>
      <Link
        to="/contacto"
        className="inline-flex items-center space-x-1.5 text-brand-coral hover:text-white font-bold text-sm shrink-0 whitespace-nowrap"
      >
        <span>Agenda una consultoría</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
