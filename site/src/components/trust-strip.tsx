import { Shell } from "@/components/ui";
import { ratingVerified, site } from "@/lib/site";

export function TrustStrip() {
  const verified = ratingVerified();
  const road = site.locationLabel.split(",")[0]?.trim() || site.locationLabel;
  const items = [
    { title: "Home visits", text: "Care arranged in your home." },
    { title: "Clinical focus", text: "Spine, shoulder, and knee." },
    { title: "Practitioner", text: site.doctorName },
    verified
      ? {
          title: "Google reviews",
          text: `${site.googleRating?.toFixed(1)} from ${site.googleReviewCount} reviews`,
        }
      : { title: "Local practice", text: road },
  ];

  return (
    <section className="relative z-10 bg-paper" aria-label="Practice facts">
      <Shell>
        <ul className="-mt-8 grid gap-6 rounded-[24px] border border-line bg-white p-6 shadow-[0_16px_40px_rgba(16,42,67,0.05)] sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          {items.map((item, index) => (
            <li key={item.title} className="min-w-0 border-t-2 border-gold pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-ink">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-display text-lg text-navy">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-mist">{item.text}</p>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
