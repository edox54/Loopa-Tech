import { Link } from 'react-router-dom';
import { CalendarClock, Briefcase, FlaskConical, TrendingUp, FileStack, ArrowRight } from 'lucide-react';

const QUICK_LINKS = [
  { to: '/servicios', label: 'Servicios', icon: Briefcase },
  { to: '/datalab', label: 'Lab de Datos', icon: FlaskConical },
  { to: '/casos', label: 'Casos de Éxito', icon: TrendingUp },
  { to: '/recursos', label: 'Recursos', icon: FileStack },
];

export function BlogSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-32 h-fit">
      <div className="bg-gradient-to-br from-brand-coral/15 to-brand-cyan/10 border border-brand-coral/25 rounded-2xl p-6 space-y-4">
        <h3 className="font-display text-lg font-bold text-white">¿Hablamos de tu próximo proyecto?</h3>
        <p className="text-brand-lavender text-sm leading-relaxed">
          Un ingeniero de Loopa analiza tu caso sin costo y te da un pre-diagnóstico técnico.
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold text-sm px-5 py-3 rounded-xl transition-all w-full justify-center"
        >
          <CalendarClock className="w-4 h-4" />
          <span>Agendar Consultoría</span>
        </Link>
      </div>

      <div className="bg-brand-carbon border border-brand-navy/60 rounded-2xl p-6 space-y-1">
        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-3">Explora Loopa</h3>
        {QUICK_LINKS.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center justify-between py-2.5 px-2 -mx-2 rounded-lg text-brand-lavender hover:text-white hover:bg-brand-navy/60 transition-colors group text-sm"
          >
            <span className="flex items-center space-x-2.5">
              <Icon className="w-4 h-4 text-brand-coral" />
              <span>{label}</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </aside>
  );
}
