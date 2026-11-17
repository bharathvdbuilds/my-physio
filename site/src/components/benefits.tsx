import { SettingScene } from "@/components/scenes";
import { SectionHeading, Shell } from "@/components/ui";
import { benefits } from "@/lib/site";

export function Benefits() {
  return (
    <section className="bg-ice py-20 md:py-28" aria-labelledby="benefits-title">
      <Shell>
        <SectionHeading
          id="benefits-title"
          eyebrow="At home"
          title="Benefits of home physiotherapy"
          lede="Support in a familiar room, with the visit arranged around your location and appointment availability."
        />
        <div className="mt-12 grid items-center gap-6 lg:grid-cols-12">
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((item) => (
              <li key={item.number} className="rounded-[24px] border border-line bg-white p-6">
                <p className="font-display text-sm text-teal-ink">{item.number}</p>
                <h3 className="mt-4 text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-mist">{item.text}</p>
              </li>
            ))}
          </ol>
          <div className="min-w-0 overflow-hidden rounded-[24px] border border-line bg-white lg:col-span-5">
            <SettingScene className="block h-auto w-full" />
          </div>
        </div>
      </Shell>
    </section>
  );
}
