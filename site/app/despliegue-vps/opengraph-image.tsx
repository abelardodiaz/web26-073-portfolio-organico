import { renderServiceOg, ogSize, ogContentType } from "@/lib/og-service";

export const alt = "Despliegue y preparacion de servidores VPS";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderServiceOg({
    label: "Servicio",
    title: "Despliegue y preparacion de servidores VPS",
    subtitle: "Seguro, respaldado y en produccion. Sin que aprendas sysadmin.",
    tag: "A cotizar",
  });
}
