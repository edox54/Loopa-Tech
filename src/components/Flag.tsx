// Small inline SVG flags for the language switch. ponytail: no emoji flags, Windows shows them as plain letters.
// Spanish uses Ecuador (Loopa's home market); English uses the US. Simplified for 20px: a dot for Ecuador's coat of arms, no stars on the US flag.
export function Flag({ lang, className = 'w-5 h-3.5' }: { lang: string; className?: string }) {
  return lang === 'en' ? (
    <svg viewBox="0 0 19 10" className={`${className} rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]`} aria-hidden="true">
      <rect width="19" height="10" fill="#B22234" />
      {[1, 3, 5, 7, 9, 11].map((i) => (
        <rect key={i} y={(i * 10) / 13} width="19" height={10 / 13} fill="#fff" />
      ))}
      <rect width="7.6" height={(7 * 10) / 13} fill="#3C3B6E" />
    </svg>
  ) : (
    <svg viewBox="0 0 3 2" className={`${className} rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]`} aria-hidden="true">
      <rect width="3" height="1" fill="#FFDD00" />
      <rect y="1" width="3" height="0.5" fill="#034EA2" />
      <rect y="1.5" width="3" height="0.5" fill="#ED1C24" />
      {/* Hint of the coat of arms, so it does not read as Colombia. */}
      <ellipse cx="1.5" cy="1" rx="0.26" ry="0.36" fill="#7DB9E8" stroke="#8A5A00" strokeWidth="0.08" />
    </svg>
  );
}
