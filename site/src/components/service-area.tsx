import { AreaScene } from "@/components/scenes";
import { WhatsAppIcon } from "@/components/marks";
import { actionClass, Eyebrow, Shell, WhatsAppLink } from "@/components/ui";
import { messages, site } from "@/lib/site";

export function ServiceArea() {
  return (
    <section className="bg-ice py-20 md:py-28" aria-labelledby="area-title">
      <Shell className="grid items-center gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <Eyebrow>Service area</Eyebrow>
          <h2 id="area-title" className="text-[2rem] leading-[1.12] text-navy sm:text-[2.5rem]">
            Home visits around {site.locationLabel.split(",")[0]}
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-8 text-mist">
            <p>
              {site.businessName} arranges physiotherapy at home around {site.locationLabel}. Availability depends on
              your location and appointment availability.
            </p>
            <p>Share your area on WhatsApp and {site.doctorSignoff} can confirm whether a visit is possible.</p>
          </div>
          {site.confirmedServiceAreas.length > 0 ? (
            <ul className="mt-6 space-y-2 text-[15px] text-navy">
              {site.confirmedServiceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          ) : null}
          <WhatsAppLink message={messages.area} className={actionClass("navy", "mt-8")}>
            <WhatsAppIcon className="size-5" />
            Check my area
          </WhatsAppLink>
        </div>
        <div className="min-w-0 overflow-hidden rounded-[24px] border border-line bg-white">
          <AreaScene className="block h-auto w-full" />
        </div>
      </Shell>
    </section>
  );
}
