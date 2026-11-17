import { ArrowUpRight, Calendar, Check, House, MapPin, MessagesSquare, PersonStanding, Route, Star, UserRound } from "lucide-react";
import {
  benefits,
  hasImage,
  messages,
  principles,
  ratingVerified,
  services,
  site,
  steps,
  whatsappHref,
} from "@/lib/site";
import { cx } from "@/lib/cx";
import { ServiceMark } from "./marks";
import { AreaScene, SettingScene } from "./scenes";
import { ActionLink, Eyebrow, Photo } from "./ui";

export function TrustStrip() {
  const items = [
    { title: "Home-Based Care", text: "Convenient physiotherapy visits", icon: "home" as const },
    { title: "Focused Rehabilitation", text: "Spine, shoulder & knee", icon: "spine" as const },
    {
      title: "Personalized Attention",
      text: "Care guided by individual assessment",
      icon: "person" as const,
    },
    ratingVerified() && site.googleRating != null && site.googleReviewCount != null
      ? {
          title: "Google Reviews",
          text: `${site.googleRating.toFixed(1)} rating · ${site.googleReviewCount} reviews`,
          icon: "star" as const,
        }
      : { title: "Based in Bengaluru", text: "Chandapura–Anekal Road", icon: "pin" as const },
  ];

  return (
    <section aria-label="Practice highlights" className="border-y border-line bg-white">
      <ul className="shell grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={item.title}
            className={cx(
              "flex gap-3 px-1 py-5 sm:px-4",
              index > 0 && "border-t border-line sm:border-t-0",
              index % 2 === 1 && "sm:border-l",
              index > 0 && "lg:border-l",
            )}
          >
            <span className="mt-0.5 text-lagoon-ink" aria-hidden>
              {item.icon === "home" && <House className="size-5" strokeWidth={1.6} />}
              {item.icon === "spine" && <ServiceMark id="spine" className="size-6" />}
              {item.icon === "person" && <UserRound className="size-5" strokeWidth={1.6} />}
              {item.icon === "pin" && <MapPin className="size-5" strokeWidth={1.6} />}
              {item.icon === "star" && <Star className="size-5 fill-gold text-gold" strokeWidth={1.5} />}
            </span>
            <span>
              <span className="block font-display text-base font-semibold text-navy">{item.title}</span>
              <span className="mt-1 block text-sm leading-snug">{item.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Introduction() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-6">
          <Eyebrow>Welcome to MY PHYSIO</Eyebrow>
          <h2 className="mt-4 max-w-[16ch] font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">
            Professional Physiotherapy, Made More Personal.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
            At MY PHYSIO, we believe access to physiotherapy should be convenient, comfortable, and
            centered around your individual needs. Our home-visit approach brings professional
            assessment and rehabilitation support into a familiar environment.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            Led by Dr. Vikas V V (PT), MY PHYSIO focuses on helping individuals manage movement
            limitations and work toward improved mobility through personalized physiotherapy.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {principles.map((item) => (
              <li key={item.title}>
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-ice text-lagoon-ink">
                  <Check className="size-4" strokeWidth={2} aria-hidden />
                </span>
                <p className="mt-3 font-display text-base font-semibold text-navy">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal lg:col-span-6">
          <div className="relative">
            <div className="absolute top-8 -left-3 hidden h-[86%] w-[78%] rounded-[28px] bg-ice lg:block" aria-hidden />
            {hasImage(site.images.session.src) ? (
              <Photo
                src={site.images.session.src}
                alt={site.images.session.alt}
                position="center 22%"
                ratio="aspect-[4/5]"
                className="relative rounded-[24px] shadow-[0_20px_50px_rgba(16,42,67,0.12)]"
              />
            ) : (
              <SettingScene className="relative w-full rounded-[24px]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="shell">
        <div className="reveal max-w-2xl">
          <Eyebrow>Our expertise</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">
            Specialized Care for Better Movement.
          </h2>
          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            Explore our key rehabilitation focus areas and enquire about physiotherapy support at home.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {services.map((service, index) => {
            const navy = service.tone === "navy";
            const span = services.length === 4 ? (index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5") : "lg:col-span-4";
            return (
              <article
                key={service.id}
                id={`service-${service.id}`}
                className={cx("service-card scroll-mt-28 flex flex-col p-6 sm:p-8", span, navy && "is-navy")}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cx(
                      "grid size-14 place-items-center rounded-2xl",
                      navy ? "bg-white/10 text-white" : "bg-ice text-navy",
                    )}
                  >
                    <ServiceMark id={service.id} className="size-9" />
                  </span>
                  <span className={cx("font-display text-sm font-semibold tracking-[0.14em]", navy ? "text-gold" : "text-brand")}>
                    {service.number}
                  </span>
                </div>
                <h3 className={cx("mt-6 font-display text-2xl font-semibold tracking-tight", navy ? "text-white" : "text-navy")}>
                  {service.title}
                </h3>
                <p className={cx("mt-3 max-w-prose text-base leading-relaxed", navy ? "text-white/80" : "text-mist")}>
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className={cx(
                        "rounded-md border px-2.5 py-1 text-xs font-medium",
                        navy ? "border-white/20 text-white/85" : "border-line text-brand",
                      )}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx(
                    "mt-7 inline-flex items-center gap-2 text-sm font-semibold",
                    navy ? "text-white" : "text-navy",
                  )}
                >
                  {service.cta}
                  <ArrowUpRight className="arrow size-4" strokeWidth={1.75} aria-hidden />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-paper py-20 sm:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <div className="reveal relative lg:col-span-5">
          <div className="absolute top-10 bottom-6 left-0 hidden w-[72%] rounded-[28px] bg-navy lg:block" aria-hidden />
          <Photo
            src={site.images.about.src}
            alt={site.images.about.alt}
            position="center 10%"
            className="relative rounded-[24px] shadow-[0_22px_50px_rgba(16,42,67,0.16)] lg:ml-8"
          />
        </div>
        <div className="reveal lg:col-span-7">
          <Eyebrow>Meet your physiotherapist</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">
            Expert Guidance. Personal Attention.
          </h2>
          <p className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy">
            {site.doctorName}
          </p>
          <p className="mt-1 text-base font-medium text-brand">{site.professionalTitle}</p>
          <p className="mt-2 text-base">{site.specialInterest}</p>
          {site.experienceYears != null && (
            <p className="mt-3 text-sm font-medium text-navy">{site.experienceYears} years in practice</p>
          )}
          <div className="mt-6 space-y-4 text-base leading-relaxed">
            <p>
              Dr. Vikas V V (PT) leads MY PHYSIO with a focus on personalized physiotherapy and
              rehabilitation. His approach emphasizes understanding each individual&apos;s concerns,
              assessing movement and function, and providing structured physiotherapy support.
            </p>
            <p>
              Through MY PHYSIO, he brings the convenience of home-based physiotherapy to patients
              seeking professional rehabilitation guidance.
            </p>
          </div>
          {site.qualifications.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {site.qualifications.map((item) => (
                <li key={item} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-semibold text-navy">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {site.hospitalAffiliations.length > 0 && (
            <p className="mt-4 text-sm">
              <span className="font-semibold text-navy">Affiliations: </span>
              {site.hospitalAffiliations.join(", ")}
            </p>
          )}
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {services
              .filter((service) => service.focusTitle)
              .map((service) => (
                <li key={service.id}>
                  <a href={`#service-${service.id}`} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <span className="font-display text-lg font-semibold text-navy">{service.focusTitle}</span>
                    <span className="text-sm text-mist">{service.focusText}</span>
                  </a>
                </li>
              ))}
          </ul>
          <p className="mt-8 border-t border-line pt-6 font-display text-3xl font-medium tracking-[-0.03em] text-navy">
            {site.doctorSignoff}
          </p>
          <p className="text-sm">{site.professionalTitle}</p>
        </div>
      </div>
    </section>
  );
}

const benefitIcons = [House, UserRound, Route, PersonStanding];

export function Benefits() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          {hasImage(site.images.setting.src) ? (
            <Photo
              src={site.images.setting.src}
              alt={site.images.setting.alt}
              ratio="aspect-[4/5]"
              className="rounded-[24px]"
            />
          ) : (
            <SettingScene className="w-full rounded-[24px] border border-line" />
          )}
        </div>
        <div className="reveal lg:col-span-7">
          <Eyebrow>Why home physiotherapy</Eyebrow>
          <h2 className="mt-4 max-w-[16ch] font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">
            Your Rehabilitation Journey, Made More Convenient.
          </h2>
          <ol className="mt-8">
            {benefits.map((item, index) => {
              const Icon = benefitIcons[index] ?? House;
              return (
                <li key={item.number} className="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-5">
                  <span className="font-display text-3xl font-semibold tracking-tight text-lagoon-ink/35">
                    {item.number}
                  </span>
                  <span>
                    <span className="flex items-center gap-2 font-display text-xl font-semibold text-navy">
                      <Icon className="size-4 text-brand" strokeWidth={1.75} aria-hidden />
                      {item.title}
                    </span>
                    <span className="mt-1 block text-base leading-relaxed">{item.text}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

const stepIcons = [Calendar, MessagesSquare, PersonStanding];

export function Process() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-ice py-20 sm:py-24">
      <div className="shell">
        <div className="reveal max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">
            Getting Started Is Simple.
          </h2>
          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            Three straightforward steps toward arranging your home physiotherapy visit.
          </p>
        </div>
        <ol className="relative mt-12 grid gap-8 lg:grid-cols-3">
          <div className="absolute top-7 right-0 left-0 hidden h-px bg-navy/15 lg:block" aria-hidden />
          {steps.map((step, index) => {
            const Icon = stepIcons[index] ?? Calendar;
            return (
              <li key={step.number} className="relative">
                <span className="relative z-10 grid size-14 place-items-center rounded-full border border-line bg-white font-display text-lg font-semibold text-navy">
                  {step.number}
                </span>
                <Icon className="mt-5 size-5 text-lagoon-ink" strokeWidth={1.6} aria-hidden />
                <h3 className="mt-3 font-display text-2xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{step.text}</p>
              </li>
            );
          })}
        </ol>
        <div className="mt-10">
          <ActionLink href={whatsappHref(messages.general)} icon="whatsapp">
            Start With a WhatsApp Message
          </ActionLink>
        </div>
      </div>
    </section>
  );
}

export function Focus() {
  const areas = services.filter((service) => service.focusTitle);
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="shell">
        <div className="reveal flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="max-w-[14ch] font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">
            Care Focused on the Way You Move.
          </h2>
          <p className="max-w-sm text-base leading-relaxed">
            Spine, shoulder, and knee rehabilitation, arranged as a home visit when your location allows.
          </p>
        </div>
        <div className="reveal mt-10 grid border-y border-line lg:grid-cols-3">
          {areas.map((area) => (
            <a
              key={area.id}
              href={`#service-${area.id}`}
              className="group border-b border-line px-2 py-10 transition-colors duration-200 last:border-b-0 hover:bg-ice lg:border-r lg:border-b-0 lg:px-8 lg:last:border-r-0"
            >
              <ServiceMark
                id={area.id}
                className="size-16 text-navy transition-transform duration-200 group-hover:-translate-y-1"
              />
              <h3 className="mt-8 font-display text-4xl font-semibold tracking-tight text-navy">
                {area.focusTitle}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-relaxed">{area.focusText}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Enquire about this focus
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const verified = ratingVerified();
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="shell">
        <div className="reveal max-w-2xl">
          <Eyebrow>Patient trust</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">
            Trust Built Through Patient Experiences.
          </h2>
        </div>
        <div className="reveal mt-10 grid gap-6 lg:grid-cols-12">
          <div className="rounded-[24px] bg-navy px-7 py-8 text-white sm:px-8 sm:py-10 lg:col-span-5">
            <p className="font-display text-7xl font-semibold tracking-[-0.04em]">
              {site.googleRating != null ? site.googleRating.toFixed(1) : "—"}
              <span className="ml-2 align-middle text-2xl font-medium text-white/70">/ 5.0</span>
            </p>
            <div className="mt-4 flex gap-1 text-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-5 fill-gold" strokeWidth={1.25} />
              ))}
            </div>
            <p className="mt-4 text-lg font-medium">
              {site.googleReviewCount != null ? `${site.googleReviewCount} Google reviews` : "Google reviews"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {verified
                ? "Rating shown from the confirmed Google Business Profile."
                : "Reported rating. A Google listing link can be added once the business profile URL is confirmed."}
            </p>
            {verified && (
              <a
                href={site.googleBusinessProfileURL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-inverse mt-6"
              >
                View Google Reviews
                <ArrowUpRight className="arrow size-4" aria-hidden />
              </a>
            )}
          </div>
          <div className="flex flex-col justify-between rounded-[24px] border border-line bg-white p-7 sm:p-8 lg:col-span-7">
            <ul className="space-y-5">
              <li>
                <p className="font-display text-xl font-semibold text-navy">Home-visit care</p>
                <p className="mt-1 text-base leading-relaxed">
                  Physiotherapy is arranged at home, subject to location and appointment availability.
                </p>
              </li>
              <li>
                <p className="font-display text-xl font-semibold text-navy">A clear clinical focus</p>
                <p className="mt-1 text-base leading-relaxed">
                  Spine, shoulder, and knee rehabilitation are the published areas of practice.
                </p>
              </li>
              <li>
                <p className="font-display text-xl font-semibold text-navy">Direct contact</p>
                <p className="mt-1 text-base leading-relaxed">
                  Enquiries go to Dr. Vikas V V (PT) by phone or WhatsApp on {site.phoneDisplay}.
                </p>
              </li>
            </ul>
            {site.verifiedTestimonials.length > 0 ? (
              <ul className="mt-8 space-y-4">
                {site.verifiedTestimonials.map((item) => (
                  <li key={item.attribution} className="border-t border-line pt-4">
                    <blockquote className="text-base leading-relaxed text-navy">&ldquo;{item.quote}&rdquo;</blockquote>
                    <p className="mt-2 text-sm font-semibold text-navy">{item.attribution}</p>
                    {item.context && <p className="text-sm">{item.context}</p>}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-8 border-l-2 border-gold pl-4 text-sm leading-relaxed">
                {site.testimonialsNote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Coverage() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="shell grid items-center gap-10 lg:grid-cols-12">
        <div className="reveal lg:col-span-6">
          <Eyebrow>Home visits</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">
            Home Physiotherapy Around Chandapura–Anekal Road.
          </h2>
          <p className="mt-5 text-base leading-relaxed sm:text-lg">
            MY PHYSIO is based around Chandapura–Anekal Road, Bengaluru. Contact us to confirm whether
            home visits are available at your address.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            If you are looking for home physiotherapy in Chandapura, or a physiotherapist near Anekal
            Road, share your area and Dr. Vikas can confirm whether a visit is possible.
          </p>
          {site.confirmedServiceAreas.length > 0 && (
            <p className="mt-4 text-sm font-medium text-navy">
              Confirmed areas: {site.confirmedServiceAreas.join(", ")}
            </p>
          )}
          <div className="mt-7">
            <ActionLink href={whatsappHref(messages.area)} icon="whatsapp">
              Check Home Visit Availability
            </ActionLink>
          </div>
        </div>
        <div className="reveal lg:col-span-6">
          <AreaScene className="w-full border border-line" />
        </div>
      </div>
    </section>
  );
}
