import { Database, TrendingUp, BarChart3, Sparkles, ShieldCheck, Cpu, Handshake } from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className = 'w-6 h-6' }: ServiceIconProps) {
  switch (name) {
    case 'Database':
      return <Database className={className} id={`icon-db-${name}`} />;
    case 'TrendingUp':
      return <TrendingUp className={className} id={`icon-trend-${name}`} />;
    case 'BarChart3':
      return <BarChart3 className={className} id={`icon-chart-${name}`} />;
    case 'Sparkles':
      return <Sparkles className={className} id={`icon-sparkles-${name}`} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} id={`icon-shield-${name}`} />;
    case 'Cpu':
      return <Cpu className={className} id={`icon-cpu-${name}`} />;
    case 'Handshake':
      return <Handshake className={className} id={`icon-handshake-${name}`} />;
    default:
      return <Database className={className} id={`icon-default-${name}`} />;
  }
}
