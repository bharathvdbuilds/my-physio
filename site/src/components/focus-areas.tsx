import { ArrowRight } from "lucide-react";
import { ServiceMark } from "@/components/marks";
import { SectionHeading, Shell } from "@/components/ui";
import { services, site } from "@/lib/site";

export function FocusAreas() {
  const areas = services.filter((service) => service.focusTitle && service.focusText);

  return (
    <section className="bg-paper py-20 md:py-28" aria-labelledby="focus-title">
      <Shell>
        <SectionHeading id="focus-title" eyebrow="Focus" title="Spine, shoulder, and knee" lede={site.specialInterest} />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {areas.map((service) => (
            <li key={service.id}>
              <a
                href={`#${service.id}`}
                className="group flex h-full flex-col rounded-[24px] border border-line bg-white p-6 motion-safe:transition hover:border-teal motion-safe:hover:-translate-y-1 sm:p-8"
              >
                <ServiceMark id={service.id} className="size-12 text-brand" />
                <h3 className="mt-6 text-2xl text-navy">{service.focusTitle}</h3>
                <p className="mt-3 text-[15px] leading-7 text-mist">{service.focusText}</p>
                <span className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-ink">
                  View service
                  <ArrowRight
                    aria-hidden
                    className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
