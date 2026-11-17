"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading, Shell } from "@/components/ui";
import { cx } from "@/lib/cx";
import { faqs } from "@/lib/site";

export function Faq() {
  const items = faqs();
  const [open, setOpen] = useState<number | null>(null);

  function moveFocus(index: number) {
    document.getElementById(`faq-button-${index}`)?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = items.length - 1;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus(index === last ? 0 : index + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(index === 0 ? last : index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveFocus(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveFocus(last);
    }
  }

  return (
    <section id="faqs" className="scroll-mt-24 bg-white py-20 md:py-28" aria-labelledby="faq-title">
      <Shell className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQs"
            title="Questions before you enquire"
            lede="Short answers. For your own area or a preferred time, send a message."
          />
        </div>
        <div className="border-t border-line lg:col-span-8">
          {items.map((item, index) => {
            const expanded = open === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.question} className="border-b border-line">
                <h3 className="text-lg sm:text-xl">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-navy"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden
                      className={cx(
                        "size-5 shrink-0 text-teal-ink motion-safe:transition-transform",
                        expanded && "rotate-180",
                      )}
                    />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded} className={expanded ? "pb-6" : "hidden"}>
                  <p className="max-w-3xl text-[16px] leading-7 text-mist">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
