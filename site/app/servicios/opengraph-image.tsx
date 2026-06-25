import { renderServiceOg, ogSize, ogContentType } from "@/lib/og-service";

export const alt = "Servicios de IA y automatizacion";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderServiceOg({
    label: "Servicios",
    title: "Lo que construyo para que tu negocio trabaje menos",
    subtitle: "IA, automatizacion, infraestructura y sitios web. En produccion.",
    tag: "San Luis Potosi",
  });
}
