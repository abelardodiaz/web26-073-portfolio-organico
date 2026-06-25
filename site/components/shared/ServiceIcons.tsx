import type { ReactNode } from "react";

// Set de iconos de servicios (stroke consistente). Fuente unica para
// /servicios (bento), la home y los pasos de cada landing. Heredan el color
// via currentColor y el tamano via la className que se les pase.

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconDiagnostico({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconAutomatizacion({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10.5H13z" />
    </svg>
  );
}

export function IconVps({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}

export function IconSitios({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M6.5 6.5h.01M9 6.5h.01" />
    </svg>
  );
}

// Mapa por slug, util para iterar en data-driven (home, bento)
export const serviceIcons: Record<string, (p: IconProps) => ReactNode> = {
  "diagnostico-ia": IconDiagnostico,
  "automatizacion-procesos": IconAutomatizacion,
  "despliegue-vps": IconVps,
  "sitios-web": IconSitios,
};
