import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { cx } from "@/lib/cx";
import { hasImage, site } from "@/lib/site";
import { LogoMark, WhatsAppIcon } from "./marks";

export function Wordmark({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const light = tone === "light";
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="size-11 shrink-0" />
      <span className="min-w-0 text-left">
        <span
          className={cx(
            "block font-display text-[1.02rem] font-extrabold tracking-[0.08em]",
            light ? "text-white" : "text-navy",
          )}
        >
          {site.businessName}
        </span>
        <span
          className={cx(
            "mt-0.5 block text-[0.68rem] font-semibold uppercase tracking-[0.13em]",
            compact && "max-[380px]:sr-only",
            light ? "text-white/75" : "text-mist",
          )}
        >
          {site.brandDescriptor}
        </span>
      </span>
    </span>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brand">
      <span className="size-2 rounded-full bg-lagoon shadow-[0_0_0_4px_rgba(18,168,157,0.16)]" aria-hidden />
      {children}
    </p>
  );
}

type IconName = "arrow" | "whatsapp" | "phone" | "none";
type Variant = "primary" | "secondary" | "inverse" | "ghost";

export function ActionLink({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: IconName;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={cx("btn", `btn-${variant}`, className)}
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon === "whatsapp" && <WhatsAppIcon className="size-5 shrink-0" />}
      {icon === "phone" && <Phone className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />}
      <span>{children}</span>
      {icon === "arrow" && (
        <ArrowUpRight className="arrow size-4 shrink-0" strokeWidth={1.75} aria-hidden />
      )}
    </a>
  );
}

export function Photo({
  src,
  alt,
  priority = false,
  position = "center 18%",
  ratio = "aspect-[4/5]",
  className,
  sizes = "(min-width: 1024px) 520px, 92vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  position?: string;
  ratio?: string;
  className?: string;
  sizes?: string;
}) {
  if (!hasImage(src)) return null;
  return (
    <div className={cx("relative overflow-hidden bg-ice", ratio, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
