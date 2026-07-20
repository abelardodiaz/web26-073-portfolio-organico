import type { Metadata } from "next";
import { CvView } from "@/components/cv/CvView";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV de Abelardo Diaz: Full-Stack Developer & AI Agent Architect. Agentes de IA con Claude, SaaS multi-tenant e infraestructura propia.",
  alternates: {
    canonical: "/cv",
    languages: { es: "/cv", en: "/cv/en" },
  },
};

export default function CvPage() {
  return (
    <>
      <style>{`@media print { header, footer { display: none !important; } }`}</style>
      <CvView locale="es" />
    </>
  );
}
