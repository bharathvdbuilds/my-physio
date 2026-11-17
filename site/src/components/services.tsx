import { ArrowRight } from "lucide-react";
import { ServiceMark } from "@/components/marks";
import { SectionHeading, Shell } from "@/components/ui";
import { cx } from "@/lib/cx";
import { services, whatsappHref, type ServiceDefinition } from "@/lib/site";

function ServiceCard({ service, className }: { service: ServiceDefinition; className?: string }) {
  const navy = service.tone === "navy";

  return (
    <article
      id={service.id}
      className={cx(
        "group h-full scroll-mt-28 rounded-[24px] border motion-safe:transition motion-safe:hover:-translate-y-1 hover:border-teal",
        navy ? "border-navy bg-navy text-white" : "border-line bg-white text-navy",
        className,
      )}
    >
      <a
        href={whatsappHref(service.message)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col rounded-[24px] p-6 sm:p-8"
      >
        <span className="flex items-start justify-between gap-4">
          <ServiceMark id={service.id} className={cx("size-12", navy ? "text-white" : "text-brand")} />
          <span className={cx("font-display text-sm", navy ? "text-gold" : "text-mist")}>{service.number}</span>
        </span>
        <h3 className="mt-8 text-2xl leading-tight">{service.title}</h3>
        <p className={cx("mt-3 text-[15px] leading-7", navy ? "text-foam" : "text-mist")}>{service.description}</p>
        <p className={cx("mt-4 text-sm", navy ? "text-foam" : "text-mist")}>{service.tags.join(" · ")}</p>
        <span
          className={cx(
            "mt-auto inline-flex min-h-11 items-center gap-2 pt-8 text-[15px] font-semibold",
            navy ? "text-white" : "text-teal-ink",
          )}
        >
          {service.cta}
          <ArrowRight
            aria-hidden
            className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
          />
          <span className="sr-only"> Opens WhatsApp</span>
        </span>
      </a>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-20 md:py-28" aria-labelledby="services-title">
      <Shell>
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="Rehabilitation, brought to your home."
          lede="Four ways to enquire. Each request opens WhatsApp with a message for that service."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              className={service.id === "spine" || service.id === "home" ? "lg:col-span-7" : "lg:col-span-5"}
            />
          ))}
        </div>
      </Shell>
    </section>
  );
}
