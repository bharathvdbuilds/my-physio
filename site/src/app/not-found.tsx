import Link from "next/link";
import { WhatsAppIcon } from "@/components/marks";
import { actionClass, Shell, WhatsAppLink } from "@/components/ui";

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="bg-paper pt-28 pb-24">
      <Shell>
        <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-teal-ink">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          MY PHYSIO
        </p>
        <h1 className="mt-4 max-w-xl text-4xl text-navy sm:text-5xl">This page is not available.</h1>
        <p className="mt-4 max-w-md text-[17px] leading-8 text-mist">
          The home physiotherapy page is still here. You can also enquire with Dr. Vikas on WhatsApp.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={actionClass("navy")}>
            Back to home
          </Link>
          <WhatsAppLink className={actionClass("outline")}>
            <WhatsAppIcon className="size-5" />
            Book a Home Visit
          </WhatsAppLink>
        </div>
      </Shell>
    </main>
  );
}
