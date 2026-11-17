import { WhatsAppIcon } from "@/components/marks";
import { actionClass, SectionHeading, Shell, WhatsAppLink } from "@/components/ui";
import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white py-20 md:py-28" aria-labelledby="how-title">
      <Shell>
        <SectionHeading
          id="how-title"
          eyebrow="The visit"
          title="How it works"
          lede="A short path from the first message to the consultation."
        />
        <ol className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="rounded-[24px] border border-line bg-paper p-6 sm:p-8">
              <p className="font-display text-4xl text-brand">{step.number}</p>
              <h3 className="mt-5 text-xl text-navy">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
        <WhatsAppLink className={actionClass("navy", "mt-8")}>
          <WhatsAppIcon className="size-5" />
          Book a Home Visit
        </WhatsAppLink>
      </Shell>
    </section>
  );
}
