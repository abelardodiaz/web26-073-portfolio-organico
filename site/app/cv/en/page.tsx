import type { Metadata } from "next";
import { CvView } from "@/components/cv/CvView";

export const metadata: Metadata = {
  title: "CV (English)",
  description:
    "Resume of Abelardo Diaz: Full-Stack Developer & AI Agent Architect. AI agents built on Claude, multi-tenant SaaS, and self-hosted infrastructure.",
  alternates: {
    canonical: "/cv/en",
    languages: { es: "/cv", en: "/cv/en" },
  },
};

export default function CvEnPage() {
  return (
    <>
      <style>{`@media print { header, footer { display: none !important; } }`}</style>
      <CvView locale="en" />
    </>
  );
}
