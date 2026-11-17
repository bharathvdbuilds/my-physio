"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs, site } from "@/lib/site";
import { cx } from "@/lib/cx";
import { Eyebrow } from "./ui";

export function Faq() {
  const items = faqs();
  const [open, setOpen] = useState<number | null>(0);

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const next = event.key === "ArrowDown" ? index + 1 : index - 1;
    const target = (next + items.length) % items.length;
    document.getElementById(`faq-button-${target}`)?.focus();
  }

  return (
    <section id="faqs" className="scroll-mt-28 bg-paper py-20 sm:py-24">
      <div className="shell grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            A few practical details before you enquire. {site.assessmentNote}
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {items.map((item, index) => {
              const expanded = open === index;
              const panelId = `faq-panel-${index}`;
              return (
                <div key={item.question}>
                  <h3>
                    <button
                      id={`faq-button-${index}`}
                      type="button"
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() => setOpen(expanded ? null : index)}
                      onKeyDown={(event) => onKeyDown(event, index)}
                    >
                      <span className="font-display text-lg font-semibold text-navy sm:text-xl">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cx("size-5 shrink-0 text-brand transition-transform duration-200", expanded && "rotate-180")}
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={`faq-button-${index}`} className={cx("faq-panel", expanded && "is-open")}>
                    <div>
                      <p className="pb-5 pr-8 text-base leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
