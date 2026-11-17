import { messages, whatsappHref } from "@/lib/site";
import { ActionLink } from "@/components/ui";

export default function NotFound() {
  return (
    <main id="content" className="shell py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">MY PHYSIO</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-navy">This page is not available.</h1>
      <p className="mt-3 max-w-md text-base leading-relaxed">
        The home physiotherapy page is still here, and you can enquire with Dr. Vikas directly.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ActionLink href="/" icon="none">
          Back to home
        </ActionLink>
        <ActionLink href={whatsappHref(messages.general)} variant="secondary" icon="whatsapp">
          Book a Home Visit
        </ActionLink>
      </div>
    </main>
  );
}
