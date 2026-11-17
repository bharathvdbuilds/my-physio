import { messages, nav, services, site, whatsappHref } from "@/lib/site";
import { Wordmark } from "./ui";

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-[calc(6.5rem+env(safe-area-inset-bottom))] text-white/80 md:pb-24">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark tone="light" />
          <p className="mt-4 font-display text-lg text-gold">{site.brandTagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Home physiotherapy focused on spine, shoulder, and knee rehabilitation, led by{" "}
            {site.doctorName} around Chandapura–Anekal Road, Bengaluru.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#service-${service.id}`} className="hover:text-white">
                  {service.menuTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-white">{site.doctorName}</li>
            <li>{site.locationLabel}</li>
            {site.workingHours && <li>{site.workingHours}</li>}
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappHref(messages.general)} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp Booking
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            )}
            {site.social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shell border-t border-white/10 py-6 text-sm leading-relaxed">
        <p>© 2026 MY PHYSIO. All rights reserved.</p>
        <p className="mt-2">{site.disclaimer}</p>
        {site.preview && <p className="mt-2 text-gold">{site.previewNote}</p>}
      </div>
    </footer>
  );
}
