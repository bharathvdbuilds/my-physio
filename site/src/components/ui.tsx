import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { messages, site, whatsappHref } from "@/lib/site";

export function Shell({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-teal-ink">
      <span className="h-px w-8 shrink-0 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="text-[2rem] leading-[1.12] text-navy sm:text-[2.5rem] lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {lede ? <p className="mt-4 max-w-xl text-[17px] leading-8 text-mist">{lede}</p> : null}
    </div>
  );
}

const tones = {
  navy: "bg-navy text-white hover:bg-[#0c2236]",
  outline: "border border-[#C5D5E2] bg-white text-navy hover:border-teal",
  white: "bg-white text-navy hover:bg-ice",
  whatsapp: "bg-whatsapp text-white hover:bg-[#0b5841]",
} as const;

export function actionClass(tone: keyof typeof tones = "navy", className?: string) {
  return cx(
    "relative inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-5 text-center text-[15px] font-semibold motion-safe:transition-colors",
    tones[tone],
    className,
  );
}

export function WhatsAppLink({
  message = messages.general,
  className,
  children,
  hint = "Opens WhatsApp",
}: {
  message?: string;
  className?: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      {hint ? <span className="sr-only"> {hint}</span> : null}
    </a>
  );
}

export function PhoneLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={`tel:${site.phoneTel}`} className={className}>
      {children ?? site.phoneDisplay}
    </a>
  );
}
