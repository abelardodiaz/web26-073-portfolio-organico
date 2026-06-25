// Spot illustrations por servicio (SVG a medida, theme-aware via currentColor).
// Mix elegido: Diagnostico e VPS = isometrico; Automatizacion y Sitios = motivo
// de icono ampliado. Se colocan como acento sutil en el hero (text-primary/baja
// opacidad), ocultas en mobile.

type ArtProps = { className?: string };

// ── Isometrico: helper de slab (top + cara izquierda + cara derecha) ──
function IsoSlab({
  cx,
  cy,
  w,
  d,
  h,
  op,
}: {
  cx: number;
  cy: number;
  w: number;
  d: number;
  h: number;
  op: number;
}) {
  const top = `${cx},${cy} ${cx + w},${cy + d} ${cx},${cy + 2 * d} ${cx - w},${cy + d}`;
  const left = `${cx - w},${cy + d} ${cx},${cy + 2 * d} ${cx},${cy + 2 * d + h} ${cx - w},${cy + d + h}`;
  const right = `${cx},${cy + 2 * d} ${cx + w},${cy + d} ${cx + w},${cy + d + h} ${cx},${cy + 2 * d + h}`;
  return (
    <g>
      <polygon points={top} fill="currentColor" fillOpacity={op} stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
      <polygon points={left} fill="currentColor" fillOpacity={op * 0.45} stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
      <polygon points={right} fill="currentColor" fillOpacity={op * 0.18} stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
    </g>
  );
}

// VPS: bloques de servidor apilados (isometrico)
export function ArtVps({ className }: ArtProps) {
  const cx = 90;
  const w = 58;
  const d = 29;
  const h = 15;
  return (
    <svg className={className} viewBox="0 0 190 190" fill="none" aria-hidden>
      <IsoSlab cx={cx} cy={16} w={w} d={d} h={h} op={0.35} />
      <IsoSlab cx={cx} cy={62} w={w} d={d} h={h} op={0.28} />
      <IsoSlab cx={cx} cy={108} w={w} d={d} h={h} op={0.22} />
      <circle cx={cx - 42} cy={53} r={2.4} fill="currentColor" />
      <circle cx={cx - 42} cy={99} r={2.4} fill="currentColor" />
      <circle cx={cx - 42} cy={145} r={2.4} fill="currentColor" />
    </svg>
  );
}

// Diagnostico: radar isometrico con barrido y blip
export function ArtDiagnostico({ className }: ArtProps) {
  const cx = 100;
  const cy = 90;
  return (
    <svg className={className} viewBox="0 0 200 180" fill="none" aria-hidden>
      {[58, 40, 23].map((rx, i) => (
        <ellipse key={rx} cx={cx} cy={cy} rx={rx} ry={rx * 0.5} fill="none" stroke="currentColor" strokeWidth={2} strokeOpacity={0.7 - i * 0.15} />
      ))}
      <line x1={cx - 58} y1={cy} x2={cx + 58} y2={cy} stroke="currentColor" strokeWidth={1.4} strokeOpacity={0.4} />
      <line x1={cx} y1={cy - 29} x2={cx} y2={cy + 29} stroke="currentColor" strokeWidth={1.4} strokeOpacity={0.4} />
      <path d={`M${cx} ${cy} L${cx + 52} ${cy - 21} A58 29 0 0 1 ${cx + 36} ${cy + 15} Z`} fill="currentColor" fillOpacity={0.18} />
      <circle cx={cx + 28} cy={cy - 9} r={4} fill="currentColor" />
    </svg>
  );
}

// ── Motivo de icono: icono ampliado a baja opacidad ──
function IconMotif({ className, children }: ArtProps & { children: React.ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 190 170" fill="none" aria-hidden>
      <g
        transform="translate(38,28) scale(5)"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeOpacity={0.5}
        fill="currentColor"
        fillOpacity={0.06}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

// Automatizacion: rayo ampliado
export function ArtAutomatizacion({ className }: ArtProps) {
  return (
    <IconMotif className={className}>
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10.5H13z" />
    </IconMotif>
  );
}

// Sitios web: ventana de navegador ampliada
export function ArtSitios({ className }: ArtProps) {
  return (
    <IconMotif className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M6.5 6.5h.01M9 6.5h.01" fill="none" />
    </IconMotif>
  );
}
