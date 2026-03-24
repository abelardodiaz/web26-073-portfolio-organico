"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTheme } from "@/components/shared/ThemeProvider";

type FaqItem = { q: string; a: string };

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const { theme } = useTheme();

  return (
    <>
      {/* Editorial */}
      <div className="hidden editorial:block">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
          Preguntas frecuentes
        </h2>
        <Accordion className="max-w-2xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} className="border-b border-border">
              <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Terminal */}
      <div className="hidden terminal:block">
        <div className="mb-6 flex items-center gap-3">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // faq
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        <Accordion className="max-w-2xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} className="border-b border-border">
              <AccordionTrigger className="py-3 text-left text-[15px] font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
