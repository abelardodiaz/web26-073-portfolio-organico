import { renderServiceOg, ogSize, ogContentType } from "@/lib/og-service";

export const alt = "Sitios web y landing pages";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderServiceOg({
    label: "Servicio",
    title: "Sitios web y landing pages",
    subtitle: "Rapidos de verdad, bien posicionados. No plantillas genericas.",
    tag: "A cotizar",
  });
}
