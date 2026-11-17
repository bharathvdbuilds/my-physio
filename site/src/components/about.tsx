import { WhatsAppIcon } from "@/components/marks";
import { Portrait } from "@/components/portrait";
import { actionClass, Eyebrow, Shell, WhatsAppLink } from "@/components/ui";
import { site } from "@/lib/site";

export function About() {
  const details: { title: string; items: string[] }[] = [];

  if (site.qualifications.length > 0) {
    details.push({ title: "Qualifications", items: site.qualifications });
  }
  if (site.experienceYears != null) {
    details.push({ title: "Experience", items: [`${site.experienceYears} years`] });
  }
  if (site.hospitalAffiliations.length > 0) {
    details.push({ title: "Hospital affiliations", items: site.hospitalAffiliations });
  }

  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 md:py-28" aria-labelledby="about-title">
      <Shell className="grid items-center gap-12 lg:grid-cols-12">
        <div className="portrait-frame aspect-[5/6] min-w-0 sm:aspect-[4/5] lg:col-span-5">
          <Portrait image={site.images.about} />
        </div>
        <div className="min-w-0 lg:col-span-7">
          <Eyebrow>The physiotherapist</Eyebrow>
          <h2 id="about-title" className="text-[2rem] leading-[1.12] text-navy sm:text-[2.5rem] lg:text-[2.75rem]">
            About {site.doctorName}
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-8 text-mist">
            <p>
              {site.doctorName} leads {site.businessName} as {site.professionalTitle}. Appointments are home visits,
              arranged after you share your location and what you need.
            </p>
            {site.specialInterest ? <p>{site.specialInterest}</p> : null}
            <p>{site.locationLabel}</p>
          </div>
          {details.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {details.map((detail) => (
                <div key={detail.title}>
                  <h3 className="text-lg text-navy">{detail.title}</h3>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-mist">
                    {detail.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
          <WhatsAppLink className={actionClass("navy", "mt-8")}>
            <WhatsAppIcon className="size-5" />
            Book a Home Visit
          </WhatsAppLink>
        </div>
      </Shell>
    </section>
  );
}
