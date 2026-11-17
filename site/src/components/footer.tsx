import { LogoMark } from "@/components/marks";
import { PhoneLink, Shell, WhatsAppLink } from "@/components/ui";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white pb-28 md:pb-16">
      <Shell className="grid gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a href="#top" className="inline-flex min-h-11 items-center gap-3">
            <LogoMark className="size-10" />
            <span>
              <span className="block font-display text-[15px] tracking-[0.14em] text-navy">{site.businessName}</span>
              <span className="mt-0.5 block text-sm text-mist">{site.brandExtension}</span>
            </span>
          </a>
          <p className="mt-5 font-display text-2xl text-navy">{site.brandTagline}</p>
          {site.preview ? <p className="mt-4 max-w-sm text-sm leading-6 text-navy">{site.previewNote}</p> : null}
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-ink">Explore</p>
          <ul className="mt-3">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="inline-flex min-h-11 items-center text-[15px] text-navy hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-ink">Contact</p>
          <ul className="mt-3">
            <li>
              <PhoneLink className="inline-flex min-h-11 items-center text-[15px] text-navy hover:text-brand">
                {site.phoneDisplay}
              </PhoneLink>
            </li>
            <li>
              <WhatsAppLink className="inline-flex min-h-11 items-center text-[15px] font-semibold text-teal-ink" hint="">
                WhatsApp {site.phoneDisplay}
              </WhatsAppLink>
            </li>
            {site.email ? (
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-11 items-center text-[15px] text-navy hover:text-brand"
                >
                  {site.email}
                </a>
              </li>
            ) : null}
            {site.workingHours ? (
              <li className="py-2 text-[15px] leading-7 text-mist">{site.workingHours}</li>
            ) : null}
            {site.consultationFees ? (
              <li className="py-2 text-[15px] leading-7 text-mist">{site.consultationFees}</li>
            ) : null}
          </ul>
          <p className="mt-2 text-[15px] leading-7 text-mist">{site.locationLabel}</p>
          {site.social.length > 0 ? (
            <ul className="mt-3">
              {site.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[15px] text-navy hover:text-brand"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="border-t border-line pt-6 lg:col-span-12">
          <p className="max-w-3xl text-sm leading-6 text-mist">{site.disclaimer}</p>
          <p className="mt-3 text-sm text-mist">
            © {year} {site.businessName}. {site.city}, {site.region}.
          </p>
        </div>
      </Shell>
    </footer>
  );
}
