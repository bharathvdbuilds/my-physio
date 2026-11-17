"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark, WhatsAppIcon } from "@/components/marks";
import { actionClass, PhoneLink, WhatsAppLink } from "@/components/ui";
import { cx } from "@/lib/cx";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = panelRef.current
      ? Array.from(panelRef.current.querySelectorAll<HTMLElement>("a, button"))
      : [];
    focusable[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 motion-safe:transition-colors",
        scrolled || open ? "border-b border-line bg-white" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex min-h-11 min-w-0 items-center gap-3">
          <LogoMark className="size-10 shrink-0" />
          <span className="min-w-0">
            <span className="block font-display text-[15px] tracking-[0.14em] text-navy">
              {site.businessName}
            </span>
            <span className="mt-0.5 hidden text-[11px] font-medium leading-none text-mist min-[400px]:block">
              {site.brandDescriptor}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-5 min-[1100px]:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
              className={cx(
                "inline-flex min-h-11 items-center whitespace-nowrap text-[14px] font-medium",
                active === item.id ? "text-teal-ink" : "text-navy hover:text-brand",
              )}
            >
              {item.label}
            </a>
          ))}
          <WhatsAppLink className={actionClass("navy", "whitespace-nowrap")}>
            <WhatsAppIcon className="size-4" />
            Book Home Visit
          </WhatsAppLink>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-2xl text-navy min-[1100px]:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-50 overflow-y-auto bg-white min-[1100px]:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex min-h-14 items-center border-b border-line font-display text-2xl text-navy"
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <WhatsAppLink className={actionClass("navy", "mt-6 w-full")} >
              <WhatsAppIcon className="size-5" />
              Book Home Visit
            </WhatsAppLink>
            <PhoneLink className={actionClass("outline", "mt-3 w-full")}>
              Call {site.phoneDisplay}
            </PhoneLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
