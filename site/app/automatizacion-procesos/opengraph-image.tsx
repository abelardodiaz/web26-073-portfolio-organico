import { renderServiceOg, ogSize, ogContentType } from "@/lib/og-service";

export const alt = "Automatizacion de procesos";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderServiceOg({
    label: "Servicio",
    title: "Automatizacion de procesos",
    subtitle: "Lo que tu equipo hace a mano todo el dia, hecho solo.",
    tag: "A cotizar",
  });
}
