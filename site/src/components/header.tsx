"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { messages, nav, whatsappHref } from "@/lib/site";
import { cx } from "@/lib/cx";
import { ActionLink, Wordmark } from "./ui";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const dialogRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((item): item is HTMLElement => Boolean(item));
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = dialogRef.current;
    const previous = document.activeElement as HTMLElement | null;
    const items = () =>
      Array.from(root?.querySelectorAll<HTMLElement>("a, button") ?? []).filter(
        (item) => !item.hasAttribute("disabled"),
      );
    items()[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = items();
      if (focusable.length === 0) return;
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
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open]);

  const barSolid = solid || open;

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        barSolid ? "border-b border-line bg-white" : "bg-transparent",
      )}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-3">
        <a href="#top" className="rounded-md" aria-label="MY PHYSIO, home">
          <Wordmark compact />
        </a>
        <nav className="hidden items-center gap-5 min-[1080px]:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={active === item.id}
              className={cx(
                "relative py-1 text-[0.92rem] font-medium text-mist transition-colors hover:text-navy",
                active === item.id && "font-semibold text-navy",
              )}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-lagoon" />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ActionLink
            href={whatsappHref(messages.general)}
            icon="arrow"
            className="hidden px-3.5 sm:inline-flex"
          >
            Book Home Visit
          </ActionLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-white text-navy min-[1080px]:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-[60] min-[1080px]:hidden">
          <button className="absolute inset-0 bg-navy/40" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div
            ref={dialogRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <Wordmark />
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-xl border border-line"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" aria-hidden />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-lg font-medium text-navy hover:bg-ice"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="border-t border-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <ActionLink
                href={whatsappHref(messages.general)}
                icon="whatsapp"
                className="btn-full"
                onClick={() => setOpen(false)}
              >
                Book Home Visit
              </ActionLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
