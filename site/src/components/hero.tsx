import { House, MapPin, Star } from "lucide-react";
import { messages, site, whatsappHref } from "@/lib/site";
import { ActionLink, Eyebrow, Photo } from "./ui";

export function Hero() {
  const reported = site.googleRatingStatus !== "verified";
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#eaf5fa_100%)] pt-24 pb-14 sm:pt-28 lg:pb-20"
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-20 top-16 hidden h-[540px] w-[540px] lg:block"
      >
        <circle cx="270" cy="230" r="190" fill="none" stroke="#12A89D" strokeOpacity="0.28" />
        <circle cx="310" cy="270" r="96" fill="none" stroke="#176B91" strokeOpacity="0.22" />
      </svg>
      <div className="shell relative grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <Eyebrow>Personalized physiotherapy at home</Eyebrow>
          <h1 className="settle mt-5 font-display text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.035em] text-navy sm:text-[2.75rem] lg:text-[3.9rem]">
            <span className="block sm:inline">Expert </span>
            <span className="block sm:inline">Physiotherapy.</span>
            <span className="mt-1 block">
              In the Comfort of <span className="whitespace-nowrap text-lagoon-ink">Your Home.</span>
            </span>
          </h1>
          <p className="rise d1 mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
            Personalized physiotherapy care for spine, shoulder, and knee rehabilitation. Get
            professional attention from Dr. Vikas V V (PT), conveniently at home.
          </p>
          <p className="rise d2 mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">
            <MapPin className="size-4 text-lagoon-ink" strokeWidth={1.75} aria-hidden />
            {site.locationLabel}
          </p>
          <div className="rise d3 mt-7 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={whatsappHref(messages.general)} icon="whatsapp">
              Book a Home Visit
            </ActionLink>
            <ActionLink href="#services" variant="secondary" icon="none">
              Explore Our Services
            </ActionLink>
          </div>
          <ul className="rise d4 mt-8 flex flex-col gap-3 border-t border-navy/10 pt-5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {site.googleRating != null && (
              <li className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Star className="size-4 fill-gold text-gold" strokeWidth={1.5} aria-hidden />
                {site.googleRating.toFixed(1)} Google rating
                {reported && <span className="font-medium text-mist">Reported</span>}
              </li>
            )}
            {site.googleReviewCount != null && (
              <li className="text-sm font-semibold text-navy">
                {site.googleReviewCount} Google reviews
              </li>
            )}
            <li className="flex items-center gap-2 text-sm font-semibold text-navy">
              <House className="size-4 text-lagoon-ink" strokeWidth={1.75} aria-hidden />
              Home visit services
            </li>
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[440px]">
            <Photo
              src={site.images.hero.src}
              alt={site.images.hero.alt}
              priority
              position="center 15%"
              className="rounded-[24px] shadow-[0_28px_60px_rgba(16,42,67,0.16)]"
            />
            <div className="absolute bottom-4 left-4 max-w-[15rem] rounded-2xl border border-line bg-white/95 p-3.5 shadow-[0_12px_30px_rgba(16,42,67,0.12)]">
              <p className="font-display text-base font-semibold leading-tight text-navy">
                {site.doctorName}
              </p>
              <p className="mt-1 text-sm leading-snug text-mist">{site.professionalTitle}</p>
            </div>
            <div className="absolute top-4 right-4 rounded-2xl border border-line bg-white/95 px-3 py-2 text-sm font-semibold text-navy shadow-[0_10px_24px_rgba(16,42,67,0.1)]">
              Spine • Shoulder • Knee Rehab
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
