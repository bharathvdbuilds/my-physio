"use client";

import { useEffect, useState } from "react";
import {
  buildEnquiryMessage,
  enquiryServices,
  messages,
  site,
  validateEnquiry,
  whatsappHref,
  type EnquiryErrors,
  type EnquiryInput,
} from "@/lib/site";
import { cx } from "@/lib/cx";
import { ActionLink } from "./ui";

const empty: EnquiryInput = {
  name: "",
  mobile: "",
  location: "",
  service: "",
  date: "",
  message: "",
};

export function Booking() {
  const [values, setValues] = useState<EnquiryInput>(empty);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [today, setToday] = useState("");
  const [readyHref, setReadyHref] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    setToday(local);
  }, []);

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setReadyHref(null);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEnquiry(values, today);
    setErrors(nextErrors);
    const first = (Object.keys(nextErrors) as Array<keyof EnquiryInput>)[0];
    if (first) {
      setReadyHref(null);
      document.getElementById(first)?.focus();
      return;
    }
    const href = whatsappHref(buildEnquiryMessage(values));
    setReadyHref(href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="scroll-mt-28 relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <svg aria-hidden className="pointer-events-none absolute -top-24 -right-16 h-[460px] w-[460px] opacity-60">
        <circle cx="230" cy="200" r="170" fill="none" stroke="#12A89D" strokeWidth="1.25" />
        <circle cx="250" cy="230" r="96" fill="none" stroke="#12A89D" strokeWidth="1.25" />
      </svg>
      <div className="shell relative grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-5xl">
            Ready to Take the Next Step Toward Better Movement?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Connect with Dr. Vikas V V (PT) to enquire about personalized physiotherapy at home.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={whatsappHref(messages.general)} variant="inverse" icon="whatsapp">
              Book on WhatsApp
            </ActionLink>
            <ActionLink href={`tel:${site.phoneTel}`} variant="ghost" icon="phone">
              Call {site.phoneDisplay}
            </ActionLink>
          </div>
          <p className="mt-5 text-sm text-white/70">
            Home visits subject to appointment and location availability.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-[24px] bg-white p-5 text-navy shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-7 lg:col-span-7"
        >
          <p className="font-display text-2xl font-semibold">Home visit enquiry</p>
          <p className="mt-1 text-sm text-mist">
            Send Enquiry opens WhatsApp with this message. This website does not store it.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label="Full name"
              value={values.name}
              error={errors.name}
              autoComplete="name"
              onValue={(value) => update("name", value)}
            />
            <Field
              id="mobile"
              label="Mobile number"
              value={values.mobile}
              error={errors.mobile}
              autoComplete="tel"
              inputMode="tel"
              onValue={(value) => update("mobile", value)}
            />
            <Field
              id="location"
              label="Location / area"
              value={values.location}
              error={errors.location}
              autoComplete="address-level3"
              onValue={(value) => update("location", value)}
            />
            <label className="block text-sm font-semibold text-navy" htmlFor="service">
              Service required
              <select
                id="service"
                name="service"
                className="field mt-1.5"
                value={values.service}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
                onChange={(event) => update("service", event.target.value)}
              >
                <option value="">Select a service</option>
                {enquiryServices.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span id="service-error" className="mt-1 block text-sm font-medium text-danger">
                  {errors.service}
                </span>
              )}
            </label>
            <Field
              id="date"
              label="Preferred appointment date"
              type="date"
              value={values.date}
              error={errors.date}
              min={today || undefined}
              required={false}
              onValue={(value) => update("date", value)}
            />
            <label className="block text-sm font-semibold text-navy sm:col-span-2" htmlFor="message">
              Short message <span className="font-medium text-mist">(optional)</span>
              <textarea
                id="message"
                name="message"
                className="field mt-1.5"
                value={values.message}
                maxLength={400}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="A brief note about what you would like to discuss."
                onChange={(event) => update("message", event.target.value)}
              />
              {errors.message && (
                <span id="message-error" className="mt-1 block text-sm font-medium text-danger">
                  {errors.message}
                </span>
              )}
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-full mt-5">
            Send Enquiry
          </button>
          <p className="mt-3 text-sm leading-relaxed text-mist" role="status">
            {readyHref
              ? "Your enquiry is ready in WhatsApp. If a chat did not open, use the link below. Nothing was saved on this website."
              : "You are continuing to WhatsApp to send the enquiry. Please do not include detailed medical records."}
          </p>
          {readyHref && (
            <a href={readyHref} target="_blank" rel="noopener noreferrer" className={cx("btn btn-secondary mt-3")}>
              Continue in WhatsApp
            </a>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onValue,
  type = "text",
  required = true,
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onValue: (value: string) => void;
  type?: string;
  required?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "id">) {
  return (
    <label className="block text-sm font-semibold text-navy" htmlFor={id}>
      {label}
      {!required && <span className="font-medium text-mist"> (optional)</span>}
      <input
        id={id}
        name={id}
        type={type}
        className="field mt-1.5"
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onValue(event.target.value)}
        {...rest}
      />
      {error && (
        <span id={`${id}-error`} className="mt-1 block text-sm font-medium text-danger">
          {error}
        </span>
      )}
    </label>
  );
}
