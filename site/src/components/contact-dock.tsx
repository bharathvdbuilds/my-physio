"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/marks";
import { cx } from "@/lib/cx";
import { messages, site, whatsappHref } from "@/lib/site";

export function ContactDock() {
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const href = whatsappHref(messages.general);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cx(
          "dock-desktop fixed right-6 bottom-6 z-40 min-h-11 items-center gap-2 rounded-2xl bg-whatsapp px-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(16,42,67,0.18)]",
          contactVisible && "dock-off",
        )}
      >
        <WhatsAppIcon className="size-5" />
        WhatsApp
        <span className="sr-only"> Opens a chat with {site.businessName}</span>
      </a>
      <div
        className={cx(
          "dock-mobile fixed inset-x-0 bottom-0 z-40 grid-cols-2 border-t border-line bg-white",
          contactVisible && "dock-off",
        )}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={`tel:${site.phoneTel}`}
          className="inline-flex min-h-14 items-center justify-center gap-2 text-[15px] font-semibold text-navy"
        >
          <Phone aria-hidden className="size-4" />
          Call Now
        </a>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 items-center justify-center gap-2 bg-whatsapp text-[15px] font-semibold text-white"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
