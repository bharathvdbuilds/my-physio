"use client";

import { useEffect, useState } from "react";
import { messages, site, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./marks";

export function ContactChrome() {
  const [hideFloat, setHideFloat] = useState(false);
  const href = whatsappHref(messages.general);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHideFloat(entry.isIntersecting),
      { threshold: 0.18 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`group fixed right-5 bottom-5 z-40 hidden size-14 items-center justify-center rounded-2xl bg-[#128C7E] text-white shadow-[0_12px_30px_rgba(16,42,67,0.25)] transition duration-200 hover:-translate-y-0.5 md:flex ${hideFloat ? "pointer-events-none opacity-0" : "opacity-100"}`}
      >
        <span className="pointer-events-none absolute right-16 rounded-lg bg-navy px-3 py-1.5 text-sm font-medium whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          Chat on WhatsApp
        </span>
        <WhatsAppIcon className="size-7" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white md:hidden">
        <div className="grid grid-cols-[1fr_1.4fr] gap-2 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <a href={`tel:${site.phoneTel}`} className="btn btn-secondary">
            Call Now
          </a>
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
