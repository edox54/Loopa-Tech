import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type PointerEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { pickLang, useLang } from '../lib/i18nData';
import type { Localized } from '../types';

// Small hand-made SVG/HTML charts. ponytail: no chart library for 5 static, illustrative charts.
// Every chart is labelled "illustrative data": the client has no real figures to publish yet.

type L = Localized<string>;
type Color = 'coral' | 'cyan' | 'navy';

const STROKE: Record<Color, string> = {
  coral: 'stroke-brand-coral',
  cyan: 'stroke-brand-cyan',
  navy: 'stroke-brand-navy dark:stroke-white',
};
const FILL: Record<Color, string> = {
  coral: 'fill-brand-coral',
  cyan: 'fill-brand-cyan',
  navy: 'fill-brand-navy dark:fill-white',
};
const BG: Record<Color, string> = {
  coral: 'bg-brand-coral',
  cyan: 'bg-brand-cyan',
  navy: 'bg-brand-navy dark:bg-white',
};

// Starts the drawing animation the first time the chart scrolls into view.
function useDrawn<T extends Element>() {
  const ref = useRef<T>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, drawn] as const;
}

function ChartCard({ title, text, legend, children }: { title: string; text?: string; legend?: ReactNode; children: ReactNode }) {
  const { i18n } = useTranslation();
  const en = useLang(i18n.language) === 'en';
  return (
    <figure className="rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-white dark:bg-brand-navy p-5 sm:p-6 space-y-4 text-brand-navy dark:text-white">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1 max-w-xl">
          <figcaption className="font-display text-lg font-bold">{title}</figcaption>
          {text && <p className="text-sm text-brand-navy/70 dark:text-white/70">{text}</p>}
        </div>
        {legend}
      </div>
      {children}
      <p className="text-[11px] font-mono uppercase tracking-widest text-brand-navy/50 dark:text-white/50">
        {en ? 'Illustrative data' : 'Datos ilustrativos'}
      </p>
    </figure>
  );
}

// `key` listed because the project has no @types/react, so JSX does not know about it.
function ToggleButton({ active, onClick, children }: { key?: number; active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
        active
          ? 'border-brand-coral/60 bg-brand-coral/10'
          : 'border-brand-navy/10 dark:border-white/10 opacity-50 hover:opacity-80'
      }`}
    >
      {children}
    </button>
  );
}

/* ---------- Line chart ---------- */

interface Series {
  name: L;
  color: Color;
  values: (number | null)[];
  dashed?: boolean;
}

export interface LineChartProps {
  title: L;
  text?: L;
  x: Localized<string[]>;
  series: Series[];
  unit?: string;
  /** Shaded range (e.g. forecast confidence interval). */
  band?: { lo: (number | null)[]; hi: (number | null)[] };
  /** Highlighted point with a short label, e.g. "early alert". */
  marker?: { series: number; index: number; label: L };
}

const PAD = { l: 34, r: 14, t: 18, b: 26 };

export function LineChart({ title, text, x, series, unit = '', band, marker }: LineChartProps) {
  const { i18n } = useTranslation();
  const lang = useLang(i18n.language);
  const [ref, drawn] = useDrawn<HTMLDivElement>();
  const [hidden, setHidden] = useState<number[]>([]);
  const [hover, setHover] = useState<number | null>(null);
  // The SVG is drawn at the container's real pixel width so axis text keeps its size on every screen.
  const [W, setW] = useState(640);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(Math.round(e.contentRect.width) || 640));
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  const H = W < 500 ? 220 : 280;

  const labels = pickLang(x, lang);
  const n = labels.length;
  const all = [...series.flatMap((s) => s.values), ...(band?.hi || [])].filter((v): v is number => v != null);
  const tick = Math.ceil((Math.max(...all) * 1.1) / 4 / 5) * 5; // round axis steps of 5
  const max = tick * 4;
  const step = (W - PAD.l - PAD.r) / (n - 1);
  const px = (i: number) => PAD.l + i * step;
  const py = (v: number) => PAD.t + (1 - v / max) * (H - PAD.t - PAD.b);

  const path = (values: (number | null)[]) =>
    values.reduce<string>((d, v, i) => {
      if (v == null) return d;
      const cmd = i === 0 || values[i - 1] == null ? 'M' : 'L';
      return `${d}${cmd}${px(i).toFixed(1)},${py(v).toFixed(1)}`;
    }, '');

  const bandPath = band
    ? (() => {
        const idx = band.hi.map((v, i) => (v == null ? -1 : i)).filter((i) => i >= 0);
        const top = idx.map((i) => `${px(i)},${py(band.hi[i]!)}`);
        const bottom = idx.reverse().map((i) => `${px(i)},${py(band.lo[i]!)}`);
        return `M${top.join('L')}L${bottom.join('L')}Z`;
      })()
    : '';

  const visible = (i: number) => !hidden.includes(i);
  const toggle = (i: number) =>
    setHidden((h) => (h.includes(i) ? h.filter((x) => x !== i) : h.length < series.length - 1 ? [...h, i] : h));

  const onMove = (e: PointerEvent<SVGRectElement>) => {
    const rect = e.currentTarget.ownerSVGElement!.getBoundingClientRect();
    const xs = ((e.clientX - rect.left) / rect.width) * W;
    setHover(Math.max(0, Math.min(n - 1, Math.round((xs - PAD.l) / step))));
  };

  const legend = (
    <div className="flex flex-wrap gap-2">
      {series.map((s, i) => (
        <ToggleButton key={i} active={visible(i)} onClick={() => toggle(i)}>
          <span className={`w-3 h-0.5 rounded ${BG[s.color]}`} />
          {pickLang(s.name, lang)}
        </ToggleButton>
      ))}
    </div>
  );

  const grid = [0, 0.25, 0.5, 0.75, 1].map((k) => Math.round(max * k));
  const mk = marker && visible(marker.series) ? marker : undefined;
  const mkValue = mk ? series[mk.series].values[mk.index] : null;

  return (
    <ChartCard title={pickLang(title, lang)} text={text && pickLang(text, lang)} legend={legend}>
      <div ref={ref} className={`chart relative ${drawn ? 'is-drawn' : ''}`}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto overflow-visible select-none" role="img" aria-label={pickLang(title, lang)}>
          {grid.map((g) => (
            <g key={g}>
              <line x1={PAD.l} x2={W - PAD.r} y1={py(g)} y2={py(g)} className="stroke-brand-navy/10 dark:stroke-white/10" />
              <text x={PAD.l - 6} y={py(g) + 3} textAnchor="end" className="fill-brand-navy/50 dark:fill-white/50 text-[11px]">
                {g}
              </text>
            </g>
          ))}
          {labels.map((l, i) =>
            i % 2 === 0 || W >= 560 ? (
              <text key={l} x={px(i)} y={H - 8} textAnchor="middle" className="fill-brand-navy/50 dark:fill-white/50 text-[11px]">
                {l}
              </text>
            ) : null
          )}
          {band && <path d={bandPath} className="chart-band fill-brand-coral/15" />}
          {series.map((s, i) =>
            visible(i) ? (
              <path
                key={i}
                d={path(s.values)}
                pathLength={1}
                className={`${s.dashed ? 'chart-fade' : 'chart-line'} fill-none ${STROKE[s.color]}`}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ '--d': `${i * 250}ms`, ...(s.dashed ? { strokeDasharray: '0.015 0.012' } : {}) } as CSSProperties}
              />
            ) : null
          )}
          {mk && mkValue != null && (
            <g className="chart-marker">
              <circle cx={px(mk.index)} cy={py(mkValue)} r={10} className={`${FILL[series[mk.series].color]} chart-ping`} opacity={0.25} />
              <circle cx={px(mk.index)} cy={py(mkValue)} r={4.5} className={FILL[series[mk.series].color]} />
              <text x={px(mk.index) + 10} y={py(mkValue) - 12} className="fill-brand-navy dark:fill-white text-[12px] font-bold">
                {pickLang(mk.label, lang)}
              </text>
            </g>
          )}
          {hover != null && (
            <g pointerEvents="none">
              <line x1={px(hover)} x2={px(hover)} y1={PAD.t} y2={H - PAD.b} className="stroke-brand-navy/25 dark:stroke-white/25" strokeDasharray="3 3" />
              {series.map((s, i) => {
                const v = s.values[hover];
                return visible(i) && v != null ? (
                  <circle key={i} cx={px(hover)} cy={py(v)} r={4} strokeWidth={2} className={`fill-white dark:fill-brand-navy ${STROKE[s.color]}`} />
                ) : null;
              })}
            </g>
          )}
          <rect
            x={PAD.l}
            y={0}
            width={W - PAD.l - PAD.r}
            height={H}
            fill="transparent"
            className="cursor-crosshair touch-pan-y"
            onPointerMove={onMove}
            onPointerDown={onMove}
            onPointerLeave={() => setHover(null)}
          />
        </svg>
        {hover != null && (
          <div
            className="pointer-events-none absolute top-0 z-10 min-w-32 rounded-xl border border-brand-navy/10 dark:border-white/10 bg-white/95 dark:bg-brand-carbon/95 shadow-lg px-3 py-2 text-xs space-y-1"
            style={{
              left: `${(px(hover) / W) * 100}%`,
              transform: hover > n / 2 ? 'translateX(calc(-100% - 12px))' : 'translateX(12px)',
            }}
          >
            <p className="font-bold">{labels[hover]}</p>
            {series.map((s, i) => {
              const v = s.values[hover];
              return visible(i) && v != null ? (
                <p key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${BG[s.color]}`} />
                  <span className="text-brand-navy/70 dark:text-white/70">{pickLang(s.name, lang)}</span>
                  <span className="ml-auto font-bold">{v}{unit}</span>
                </p>
              ) : null;
            })}
          </div>
        )}
      </div>
    </ChartCard>
  );
}

/* ---------- Horizontal bar chart ---------- */

export interface BarChartProps {
  title: L;
  text?: L;
  labels: Localized<string[]>;
  /** One or more data sets; more than one shows toggle buttons (e.g. before / after). */
  sets: { name: L; values: number[] }[];
  unit?: string;
}

export function BarChart({ title, text, labels, sets, unit = '' }: BarChartProps) {
  const { i18n } = useTranslation();
  const lang = useLang(i18n.language);
  const [ref, drawn] = useDrawn<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const values = sets[active].values;
  const max = Math.max(...sets.flatMap((s) => s.values));
  const legend =
    sets.length > 1 ? (
      <div className="flex gap-2">
        {sets.map((s, i) => (
          <ToggleButton key={i} active={active === i} onClick={() => setActive(i)}>
            {pickLang(s.name, lang)}
          </ToggleButton>
        ))}
      </div>
    ) : undefined;

  return (
    <ChartCard title={pickLang(title, lang)} text={text && pickLang(text, lang)} legend={legend}>
      <div ref={ref} className="space-y-3" onPointerLeave={() => setHover(null)}>
        {pickLang(labels, lang).map((label, i) => (
          <div
            key={label}
            className={`grid grid-cols-[minmax(0,9rem)_1fr_3rem] sm:grid-cols-[12rem_1fr_3rem] items-center gap-3 text-sm transition-opacity ${
              hover != null && hover !== i ? 'opacity-40' : ''
            }`}
            onPointerEnter={() => setHover(i)}
          >
            <span className="truncate text-brand-navy/75 dark:text-white/75" title={label}>{label}</span>
            <span className="h-3 rounded-full bg-brand-navy/5 dark:bg-white/10 overflow-hidden">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-brand-coral to-brand-cyan transition-[width] duration-1000 ease-out"
                style={{ width: drawn ? `${(values[i] / max) * 100}%` : '0%', transitionDelay: drawn ? `${i * 80}ms` : '0ms' }}
              />
            </span>
            <span className="text-right font-display font-bold tabular-nums">{values[i]}{unit}</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}

/* ---------- Chart content ---------- */

const MONTHS: Localized<string[]> = {
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};
const WEEKS: Localized<string[]> = {
  es: Array.from({ length: 12 }, (_, i) => `S${i + 1}`),
  en: Array.from({ length: 12 }, (_, i) => `W${i + 1}`),
};

export const INVENTORY_CHART: LineChartProps = {
  title: { es: 'Inventario de una línea complementaria', en: 'Inventory of a complementary line' },
  text: {
    es: 'Sin alerta temprana el stock se acumula hasta volverse overstock. Con el Agente Predictivo se detecta a tiempo y rota.',
    en: 'Without an early alert, stock piles up into overstock. With the Predictive Agent it is caught in time and rotates.',
  },
  x: MONTHS,
  unit: ' u.',
  series: [
    { name: { es: 'Sin LOOPA', en: 'Without LOOPA' }, color: 'navy', values: [100, 104, 110, 118, 127, 138, 150, 163, 175, 186, 196, 205] },
    { name: { es: 'Con LOOPA', en: 'With LOOPA' }, color: 'coral', values: [100, 103, 106, 104, 99, 95, 92, 90, 89, 88, 88, 87] },
  ],
  marker: { series: 1, index: 2, label: { es: 'Alerta temprana', en: 'Early alert' } },
};

const SERVICE_CHARTS: Record<string, { line?: LineChartProps; bar?: BarChartProps }> = {
  'rentabilidad-comercial': { line: INVENTORY_CHART },
  'limpieza-datos': {
    bar: {
      title: { es: 'Calidad de una base de clientes', en: 'Quality of a customer database' },
      text: { es: 'Cambia entre antes y después de la depuración.', en: 'Switch between before and after the clean-up.' },
      labels: {
        es: ['Registros válidos', 'Duplicados', 'Incompletos', 'Inconsistentes'],
        en: ['Valid records', 'Duplicates', 'Incomplete', 'Inconsistent'],
      },
      sets: [
        { name: { es: 'Antes', en: 'Before' }, values: [58, 17, 15, 10] },
        { name: { es: 'Después', en: 'After' }, values: [96, 1, 2, 1] },
      ],
      unit: '%',
    },
  },
  'analitica-predictiva': {
    line: {
      title: { es: 'Pronóstico de demanda', en: 'Demand forecast' },
      text: {
        es: 'Ventas reales y pronóstico con su rango de confianza. Pasa el cursor o toca para ver cada mes.',
        en: 'Actual sales and forecast with its confidence range. Hover or tap to see each month.',
      },
      x: MONTHS,
      unit: 'k',
      series: [
        { name: { es: 'Ventas reales', en: 'Actual sales' }, color: 'navy', values: [62, 58, 66, 71, 69, 75, 80, 78, null, null, null, null] },
        { name: { es: 'Pronóstico', en: 'Forecast' }, color: 'coral', dashed: true, values: [null, null, null, null, null, null, null, 78, 84, 88, 86, 93] },
      ],
      band: {
        lo: [null, null, null, null, null, null, null, 78, 79, 80, 76, 80],
        hi: [null, null, null, null, null, null, null, 78, 89, 96, 96, 106],
      },
    },
  },
  'servicios-econometricos': {
    bar: {
      title: { es: 'Contribución de cada esfuerzo a los ingresos', en: 'Contribution of each effort to revenue' },
      text: { es: 'Qué palancas mueven más tus ventas.', en: 'Which levers move your sales the most.' },
      labels: {
        es: ['Fuerza de ventas', 'Precio', 'Distribución', 'Promociones', 'Marketing digital', 'Eventos'],
        en: ['Sales force', 'Pricing', 'Distribution', 'Promotions', 'Digital marketing', 'Events'],
      },
      sets: [{ name: { es: 'Contribución', en: 'Contribution' }, values: [34, 24, 18, 12, 8, 4] }],
      unit: '%',
    },
  },
  'imagen-politica': {
    line: {
      title: { es: 'Sentimiento de la conversación pública', en: 'Public conversation sentiment' },
      text: {
        es: 'Menciones positivas y negativas por semana. La alerta salta cuando lo negativo se dispara.',
        en: 'Positive and negative mentions per week. The alert fires when negativity spikes.',
      },
      x: WEEKS,
      unit: '%',
      series: [
        { name: { es: 'Positivo', en: 'Positive' }, color: 'cyan', values: [52, 54, 53, 55, 50, 41, 38, 44, 49, 53, 56, 58] },
        { name: { es: 'Negativo', en: 'Negative' }, color: 'coral', values: [18, 17, 19, 18, 24, 36, 40, 31, 24, 20, 18, 16] },
      ],
      marker: { series: 1, index: 4, label: { es: 'Alerta de crisis', en: 'Crisis alert' } },
    },
  },
};

export function ServiceChart({ id }: { id: string }) {
  const chart = SERVICE_CHARTS[id];
  if (!chart) return null;
  return chart.line ? <LineChart {...chart.line} /> : chart.bar ? <BarChart {...chart.bar} /> : null;
}
