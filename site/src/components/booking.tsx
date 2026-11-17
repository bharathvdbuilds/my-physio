"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/marks";
import { actionClass, Eyebrow, PhoneLink, Shell } from "@/components/ui";
import { cx } from "@/lib/cx";
import {
  buildEnquiryMessage,
  enquiryServices,
  site,
  validateEnquiry,
  whatsappHref,
  type EnquiryErrors,
  type EnquiryInput,
} from "@/lib/site";

const empty: EnquiryInput = {
  name: "",
  mobile: "",
  location: "",
  service: "",
  date: "",
  message: "",
};

const fieldOrder: (keyof EnquiryInput)[] = ["name", "mobile", "location", "service", "date", "message"];

function localISODate() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm leading-6 text-danger">
      {message}
    </p>
  );
}

export function Booking() {
  const [values, setValues] = useState<EnquiryInput>(empty);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [today, setToday] = useState("");
  const [readyHref, setReadyHref] = useState("");
  const continueRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setToday(localISODate());
  }, []);

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function describedBy(key: keyof EnquiryInput, hintId?: string) {
    const ids = [errors[key] ? `enquiry-${key}-error` : "", hintId ?? ""].filter(Boolean);
    return ids.length > 0 ? ids.join(" ") : undefined;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const currentDay = localISODate();
    setToday(currentDay);
    const nextErrors = validateEnquiry(values, currentDay);
    setErrors(nextErrors);
    const first = fieldOrder.find((key) => nextErrors[key]);
    if (first) {
      setReadyHref("");
      document.getElementById(`enquiry-${first}`)?.focus();
      return;
    }

    const href = whatsappHref(buildEnquiryMessage(values));
    setReadyHref(href);
    window.open(href, "_blank", "noopener,noreferrer");
    requestAnimationFrame(() => continueRef.current?.focus());
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-navy py-20 text-white md:py-28" aria-labelledby="contact-title">
      <Shell className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>
            <span className="text-[#8FD4CE]">Enquire</span>
          </Eyebrow>
          <h2 id="contact-title" className="text-[2rem] leading-[1.12] text-white sm:text-[2.5rem] lg:text-[2.75rem]">
            Request a home visit
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-foam">
            Add a few details and continue on WhatsApp. You send the message yourself. This website does not save the
            form and does not ask for medical history.
          </p>
          <div className="mt-8 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Call</p>
              <PhoneLink className="mt-1 inline-flex min-h-11 items-center font-display text-2xl text-white">
                {site.phoneDisplay}
              </PhoneLink>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Location</p>
              <p className="mt-1 text-[15px] leading-7 text-foam">{site.locationLabel}</p>
            </div>
            {site.workingHours ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Hours</p>
                <p className="mt-1 text-[15px] leading-7 text-foam">{site.workingHours}</p>
              </div>
            ) : null}
          </div>
          <p className="mt-8 text-sm leading-6 text-foam">{site.assessmentNote}</p>
        </div>

        <div className="rounded-[24px] bg-white p-5 text-navy shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8 lg:col-span-7">
          <noscript>
            <p className="mb-4 text-sm leading-6 text-mist">
              JavaScript is off, so this form cannot open WhatsApp. Call{" "}
              <a className="font-semibold text-teal-ink underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>{" "}
              or message on WhatsApp directly.
            </p>
          </noscript>
          <form className="grid gap-4" noValidate onSubmit={onSubmit}>
            {Object.keys(errors).length > 0 ? (
              <p role="alert" className="text-sm leading-6 text-danger">
                Please correct the highlighted fields. Nothing has been sent.
              </p>
            ) : null}
            {readyHref ? (
              <p role="status" className="rounded-2xl bg-ice px-4 py-3 text-sm leading-6 text-navy">
                Your message is ready in WhatsApp. Continue there to send it. This website does not store what you
                entered.
              </p>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="enquiry-name" className="text-sm font-semibold">
                  Name <span className="font-normal text-mist">(required)</span>
                </label>
                <input
                  id="enquiry-name"
                  name="name"
                  autoComplete="name"
                  maxLength={80}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={describedBy("name")}
                  value={values.name}
                  onChange={(event) => update("name", event.target.value)}
                  className={inputClass(Boolean(errors.name))}
                />
                <FieldError id="enquiry-name-error" message={errors.name} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="enquiry-mobile" className="text-sm font-semibold">
                  Mobile <span className="font-normal text-mist">(required)</span>
                </label>
                <input
                  id="enquiry-mobile"
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.mobile)}
                  aria-describedby={describedBy("mobile")}
                  value={values.mobile}
                  onChange={(event) => update("mobile", event.target.value)}
                  className={inputClass(Boolean(errors.mobile))}
                />
                <FieldError id="enquiry-mobile-error" message={errors.mobile} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="enquiry-location" className="text-sm font-semibold">
                  Area or locality <span className="font-normal text-mist">(required)</span>
                </label>
                <input
                  id="enquiry-location"
                  name="location"
                  maxLength={120}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.location)}
                  aria-describedby={describedBy("location", "enquiry-location-hint")}
                  value={values.location}
                  onChange={(event) => update("location", event.target.value)}
                  className={inputClass(Boolean(errors.location))}
                />
                <p id="enquiry-location-hint" className="text-sm leading-6 text-mist">
                  Your area is enough. A street address is optional.
                </p>
                <FieldError id="enquiry-location-error" message={errors.location} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="enquiry-service" className="text-sm font-semibold">
                  Service <span className="font-normal text-mist">(required)</span>
                </label>
                <div className="relative">
                  <select
                    id="enquiry-service"
                    name="service"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={describedBy("service")}
                    value={values.service}
                    onChange={(event) => update("service", event.target.value)}
                    className={cx(inputClass(Boolean(errors.service)), "appearance-none pr-10")}
                  >
                    <option value="">Choose a service</option>
                    {enquiryServices.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-mist">
                    ▾
                  </span>
                </div>
                <FieldError id="enquiry-service-error" message={errors.service} />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="enquiry-date" className="text-sm font-semibold">
                Preferred date <span className="font-normal text-mist">(optional)</span>
              </label>
              <input
                id="enquiry-date"
                name="date"
                type="date"
                min={today || undefined}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={describedBy("date")}
                value={values.date}
                onChange={(event) => update("date", event.target.value)}
                className={inputClass(Boolean(errors.date))}
              />
              <FieldError id="enquiry-date-error" message={errors.date} />
            </div>

            <div className="grid gap-2">
              <label htmlFor="enquiry-message" className="text-sm font-semibold">
                Note <span className="font-normal text-mist">(optional)</span>
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={4}
                maxLength={400}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={describedBy("message", "enquiry-message-hint")}
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                className={cx(inputClass(Boolean(errors.message)), "min-h-28 resize-y py-3")}
              />
              <p id="enquiry-message-hint" className="text-sm leading-6 text-mist">
                Please do not include medical history. {values.message.length}/400
              </p>
              <FieldError id="enquiry-message-error" message={errors.message} />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <button type="submit" className={actionClass("whatsapp", "w-full sm:w-auto")}>
                <WhatsAppIcon className="size-5" />
                Continue on WhatsApp
              </button>
              {readyHref ? (
                <a
                  ref={continueRef}
                  href={readyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionClass("outline", "w-full sm:w-auto")}
                >
                  Open the WhatsApp message
                </a>
              ) : null}
            </div>
          </form>
        </div>
      </Shell>
    </section>
  );
}

function inputClass(invalid: boolean) {
  return cx(
    "min-h-11 w-full rounded-2xl border bg-white px-4 text-base text-navy placeholder:text-mist",
    invalid ? "border-danger" : "border-[#C5D5E2]",
  );
}
