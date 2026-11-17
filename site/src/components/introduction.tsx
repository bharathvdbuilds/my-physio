import { SessionScene } from "@/components/scenes";
import { Eyebrow, Shell } from "@/components/ui";
import { principles, site } from "@/lib/site";

export function Introduction() {
  return (
    <section className="scroll-mt-24 bg-white py-20 md:py-28" aria-labelledby="practice-title">
      <Shell className="grid items-center gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-6">
          <Eyebrow>The practice</Eyebrow>
          <h2 id="practice-title" className="text-[2rem] leading-[1.12] text-navy sm:text-[2.5rem] lg:text-[2.75rem]">
            Physiotherapy arranged in your home.
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-8 text-mist">
            <p>
              {site.businessName} offers {site.brandDescriptor.toLowerCase()} led by {site.doctorName},{" "}
              {site.professionalTitle}. Visits are based around {site.locationLabel}.
            </p>
            <p>{site.specialInterest}</p>
            <p>{site.assessmentNote}</p>
          </div>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {principles.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4">
                <span className="font-display text-sm text-teal-ink">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-lg text-navy">{item.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-mist">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-2xl text-navy">{site.brandTagline}</p>
        </div>
        <div className="min-w-0 overflow-hidden rounded-[24px] border border-line bg-ice lg:col-span-6">
          <SessionScene className="block h-auto w-full" />
        </div>
      </Shell>
    </section>
  );
}
