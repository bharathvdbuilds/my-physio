import { WhatsAppIcon } from "@/components/marks";
import { Portrait } from "@/components/portrait";
import { actionClass, Shell, WhatsAppLink } from "@/components/ui";
import { ratingVerified, site } from "@/lib/site";

export function Hero() {
  const verified = ratingVerified();
  const road = site.locationLabel.split(",")[0]?.trim() || site.locationLabel;

  return (
    <section id="top" className="relative overflow-x-clip bg-ice pt-28 pb-20 md:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] bg-white lg:block" />
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block" />
      <Shell className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-7 lg:py-6">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-teal-ink">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            {site.brandDescriptor}
          </p>
          <h1 className="text-[2.35rem] leading-[1.02] text-navy sm:text-5xl lg:text-[3.7rem]">
            <span className="block">Expert</span>
            <span className="block">Physiotherapy.</span>
            <span className="mt-2 block">
              In the Comfort of <span className="text-teal-ink">Your Home</span>.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-mist">
            {site.brandExtension} for spine, shoulder, and knee rehabilitation, led by{" "}
            {site.doctorName}. Home visits are arranged around {road}, {site.city}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink className={actionClass("navy", "w-full sm:w-auto")}>
              <WhatsAppIcon className="size-5" />
              Book a Home Visit
            </WhatsAppLink>
            <a href="#services" className={actionClass("outline", "w-full sm:w-auto")}>
              Explore Our Services
            </a>
          </div>
          <ul className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-line pt-6">
            {site.googleRating != null ? (
              <li className="min-w-0">
                <p className="font-display text-2xl text-navy">{site.googleRating.toFixed(1)}</p>
                <p className="text-xs leading-5 text-mist">{verified ? "Google rating" : "Reported rating"}</p>
              </li>
            ) : null}
            {site.googleReviewCount != null ? (
              <li className="min-w-0">
                <p className="font-display text-2xl text-navy">{site.googleReviewCount}</p>
                <p className="text-xs leading-5 text-mist">Reviews</p>
              </li>
            ) : null}
            <li className="min-w-0">
              <p className="font-display text-2xl text-navy">Home</p>
              <p className="text-xs leading-5 text-mist">Visits</p>
            </li>
          </ul>
          {site.preview ? <p className="mt-6 max-w-md text-sm leading-6 text-mist">{site.previewNote}</p> : null}
        </div>

        <div className="relative min-w-0 lg:col-span-5">
          <div className="portrait-frame aspect-[5/6] sm:aspect-[4/5]">
            <Portrait image={site.images.hero} priority />
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-3 lg:mt-0">
            <li className="rounded-2xl border border-line bg-white p-4 shadow-[0_12px_32px_rgba(16,42,67,0.07)] lg:absolute lg:left-0 lg:top-8 lg:w-44 lg:-translate-x-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-ink">Home visits</p>
              <p className="mt-1 font-display text-sm text-navy">Arranged at your home</p>
            </li>
            <li className="rounded-2xl bg-navy p-4 text-white lg:absolute lg:right-0 lg:bottom-8 lg:w-48 lg:translate-x-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">Focus</p>
              <p className="mt-1 font-display text-sm">Spine, shoulder, knee</p>
            </li>
          </ul>
        </div>
      </Shell>
    </section>
  );
}
