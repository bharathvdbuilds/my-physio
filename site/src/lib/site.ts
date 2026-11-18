/**
 * MY PHYSIO — single source of business facts.
 *
 * Public sections hide anything left empty. Add a value only after Dr. Vikas
 * confirms it. Do not invent qualifications, years of experience, fees, hours,
 * hospital affiliations, testimonials, a street-level address, or a coverage radius.
 *
 * Photographs: place approved files in /public/images and set the src, for example
 * "/images/dr-vikas-hero.jpg". Until then, the site shows a marked placeholder.
 *
 * Confirm before display (intentionally not published): qualifications noted in the
 * original brief were BPT, CTTP, CDNT, and DND. Experience in years is also unconfirmed.
 */

export type RatingStatus = "reported" | "verified";

export type Testimonial = {
  quote: string;
  attribution: string;
  context?: string;
};

export type ServiceDefinition = {
  id: "spine" | "shoulder" | "knee" | "home";
  number: string;
  title: string;
  menuTitle: string;
  description: string;
  tags: string[];
  cta: string;
  message: string;
  focusTitle?: string;
  focusText?: string;
  tone: "light" | "navy";
};

export type SiteConfig = {
  businessName: string;
  brandExtension: string;
  brandDescriptor: string;
  brandTagline: string;
  metaTitle: string;
  metaDescription: string;
  doctorName: string;
  doctorSignoff: string;
  professionalTitle: string;
  specialInterest: string;
  qualifications: string[];
  experienceYears: number | null;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  email: string;
  locationLabel: string;
  city: string;
  region: string;
  country: string;
  confirmedServiceAreas: string[];
  consultationFees: string | null;
  workingHours: string | null;
  googleRating: number | null;
  googleReviewCount: number | null;
  googleRatingStatus: RatingStatus;
  googleBusinessProfileURL: string;
  publicSiteUrl: string;
  verifiedTestimonials: Testimonial[];
  hospitalAffiliations: string[];
  social: { label: string; href: string }[];
  images: {
    hero: { src: string; alt: string };
    about: { src: string; alt: string };
    session: { src: string; alt: string };
    setting: { src: string; alt: string };
  };
  preview: boolean;
  disclaimer: string;
  previewNote: string;
  testimonialsNote: string;
  assessmentNote: string;
};

export function withBasePath(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  if (!base || href === base || href.startsWith(`${base}/`)) return href;
  return `${base}${href}`;
}

export const messages = {
  general:
    "Hello Dr. Vikas, I found MY PHYSIO through your website. I would like to enquire about a home physiotherapy appointment.",
  spine:
    "Hello Dr. Vikas, I would like to enquire about home physiotherapy for spine or back rehabilitation. Please share appointment availability.",
  shoulder:
    "Hello Dr. Vikas, I would like to enquire about shoulder rehabilitation services at home.",
  knee:
    "Hello Dr. Vikas, I would like to enquire about knee rehabilitation services at home.",
  area:
    "Hello Dr. Vikas, I would like to check whether MY PHYSIO provides home physiotherapy in my area.",
} as const;

export const site: SiteConfig = {
  businessName: "MY PHYSIO",
  brandExtension: "Advanced Home Physiotherapy Services",
  brandDescriptor: "Advanced Home Physiotherapy",
  brandTagline: "Move Better. Live Better.",
  metaTitle: "MY PHYSIO | Home Physiotherapy in Chandapura, Bengaluru",
  metaDescription:
    "MY PHYSIO offers home physiotherapy services focused on spine, shoulder and knee rehabilitation around Chandapura–Anekal Road, Bengaluru. Contact Dr. Vikas V V (PT).",
  doctorName: "Dr. Vikas V V (PT)",
  doctorSignoff: "Dr. Vikas V V",
  professionalTitle: "Senior Consultant Physiotherapist",
  specialInterest: "Special interest in spine, shoulder, and knee rehabilitation.",
  qualifications: [],
  experienceYears: null,
  phoneDisplay: "+91 76196 09413",
  phoneTel: "+917619609413",
  whatsappNumber: "917619609413",
  email: "",
  locationLabel: "Chandapura–Anekal Road, Bengaluru, Karnataka",
  city: "Bengaluru",
  region: "Karnataka",
  country: "India",
  confirmedServiceAreas: [],
  consultationFees: null,
  workingHours: null,
  googleRating: 5,
  googleReviewCount: 30,
  googleRatingStatus: "reported",
  googleBusinessProfileURL: "",
  publicSiteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, ""),
  verifiedTestimonials: [],
  hospitalAffiliations: [],
  social: [],
  images: {
    hero: {
      src: "/images/dr-vikas-formal.jpg",
      alt: "Dr. Vikas V V (PT), Senior Consultant Physiotherapist",
    },
    about: {
      src: "/images/dr-vikas-clinical.jpg",
      alt: "Dr. Vikas V V (PT), physiotherapist, in clinical scrubs",
    },
    session: {
      src: "/images/dr-vikas-consult.jpg",
      alt: "Dr. Vikas V V (PT) during a consultation",
    },
    setting: {
      src: "",
      alt: "A calm home setting prepared for physiotherapy",
    },
  },
  preview: true,
  disclaimer:
    "Website information is general and does not replace individualized professional assessment or emergency medical care.",
  previewNote: "Website preview. Business details subject to final confirmation.",
  testimonialsNote: "Individual testimonials will be added after approval.",
  assessmentNote:
    "An in-person assessment may be necessary to determine suitable care.",
};

export const services: ServiceDefinition[] = [
  {
    id: "spine",
    number: "01",
    title: "Spine & Back Rehabilitation",
    menuTitle: "Spine Rehabilitation",
    description:
      "Physiotherapy-focused assessment and rehabilitation support for back discomfort, spinal mobility concerns, and movement-related limitations.",
    tags: ["Back Pain", "Mobility", "Spine Rehab"],
    cta: "Enquire About This Service",
    message: messages.spine,
    focusTitle: "Spine",
    focusText: "Supporting spinal mobility and movement-related rehabilitation.",
    tone: "light",
  },
  {
    id: "shoulder",
    number: "02",
    title: "Shoulder Rehabilitation",
    menuTitle: "Shoulder Rehabilitation",
    description:
      "Individualized physiotherapy support focused on shoulder movement, strength, and functional recovery.",
    tags: ["Shoulder Mobility", "Strength", "Rehabilitation"],
    cta: "Enquire About This Service",
    message: messages.shoulder,
    focusTitle: "Shoulder",
    focusText: "Helping address shoulder movement and functional limitations.",
    tone: "light",
  },
  {
    id: "knee",
    number: "03",
    title: "Knee Rehabilitation",
    menuTitle: "Knee Rehabilitation",
    description:
      "Tailored rehabilitation support focused on knee movement, strength, stability, and day-to-day function.",
    tags: ["Knee Mobility", "Strength", "Functional Movement"],
    cta: "Enquire About This Service",
    message: messages.knee,
    focusTitle: "Knee",
    focusText: "Supporting knee mobility, stability, and rehabilitation goals.",
    tone: "light",
  },
  {
    id: "home",
    number: "04",
    title: "Physiotherapy at Home",
    menuTitle: "Home Physiotherapy",
    description:
      "Receive convenient, personalized physiotherapy visits in your home, subject to location and appointment availability.",
    tags: ["Home Visits", "Personal Attention", "Convenience"],
    cta: "Book a Home Visit",
    message: messages.general,
    tone: "navy",
  },
];

export const enquiryServices = [
  { value: "spine", label: "Spine Rehabilitation", message: messages.spine },
  { value: "shoulder", label: "Shoulder Rehabilitation", message: messages.shoulder },
  { value: "knee", label: "Knee Rehabilitation", message: messages.knee },
  {
    value: "general",
    label: "General Home Physiotherapy Enquiry",
    message: messages.general,
  },
] as const;

export const nav = [
  { href: "#top", id: "top", label: "Home" },
  { href: "#services", id: "services", label: "Our Services" },
  { href: "#about", id: "about", label: "About Doctor" },
  { href: "#how-it-works", id: "how-it-works", label: "How It Works" },
  { href: "#faqs", id: "faqs", label: "FAQs" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export const principles = [
  { title: "Individualized Care", text: "Guided by your own assessment." },
  { title: "Professional Guidance", text: "Led by Dr. Vikas V V (PT)." },
  { title: "Home Visit Convenience", text: "Care arranged in your home." },
] as const;

export const benefits = [
  {
    number: "01",
    title: "Comfort of Home",
    text: "Receive physiotherapy support in a familiar environment.",
  },
  {
    number: "02",
    title: "Personalized Attention",
    text: "Discuss your concerns and receive care guided by individual assessment.",
  },
  {
    number: "03",
    title: "Less Travel Hassle",
    text: "Avoid unnecessary travel for eligible home-visit appointments.",
  },
  {
    number: "04",
    title: "Focused Rehabilitation",
    text: "Work toward mobility and functional goals with professional guidance.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Book Your Appointment",
    text: "Contact MY PHYSIO through WhatsApp or phone and share your location and requirements.",
  },
  {
    number: "02",
    title: "Discuss Your Needs",
    text: "Connect with Dr. Vikas to discuss your concerns and confirm home-visit availability.",
  },
  {
    number: "03",
    title: "Begin Your Care",
    text: "Your physiotherapist can assess your needs and recommend an appropriate rehabilitation approach during the consultation.",
  },
] as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function hasImage(src: string) {
  return src.trim().startsWith("/");
}

export function ratingVerified() {
  return (
    site.googleRatingStatus === "verified" &&
    site.googleRating != null &&
    site.googleReviewCount != null &&
    site.googleBusinessProfileURL.length > 0
  );
}

export function businessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.businessName,
    alternateName: site.brandExtension,
    description: site.metaDescription,
    telephone: site.phoneTel,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Chandapura–Anekal Road, Bengaluru",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chandapura–Anekal Road",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: site.doctorSignoff,
      jobTitle: site.professionalTitle,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home physiotherapy",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.menuTitle,
          description: service.description,
        },
      })),
    },
  };

  if (site.publicSiteUrl) data.url = site.publicSiteUrl;
  if (site.email) data.email = site.email;
  return data;
}

export type EnquiryInput = {
  name: string;
  mobile: string;
  location: string;
  service: string;
  date: string;
  message: string;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>;

export function validateEnquiry(input: EnquiryInput, today: string): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const name = input.name.trim();

  if (name.length < 2 || !/^[\p{L}\s.'()-]{2,80}$/u.test(name)) {
    errors.name = "Please enter your name.";
  }

  const digits = input.mobile.replace(/\D/g, "");
  const local =
    digits.length === 12 && digits.startsWith("91")
      ? digits.slice(2)
      : digits.length === 11 && digits.startsWith("0")
        ? digits.slice(1)
        : digits;

  if (!/^[6-9]\d{9}$/.test(local)) {
    errors.mobile = "Enter a 10-digit Indian mobile number.";
  }

  if (input.location.trim().length < 2) {
    errors.location = "Please share your area or locality.";
  }

  if (!enquiryServices.some((item) => item.value === input.service)) {
    errors.service = "Please choose a service.";
  }

  if (input.date && today && input.date < today) {
    errors.date = "Choose today or a later date.";
  }

  if (input.message.trim().length > 400) {
    errors.message = "Please keep this note under 400 characters.";
  }

  return errors;
}

export function buildEnquiryMessage(input: EnquiryInput) {
  const selected =
    enquiryServices.find((item) => item.value === input.service) ?? enquiryServices[3];
  const clean = (value: string) => value.trim().replace(/\s+/g, " ");
  const lines = [
    selected.message,
    "",
    `Name: ${clean(input.name)}`,
    `Mobile: ${clean(input.mobile)}`,
    `Location: ${clean(input.location)}`,
    `Service: ${selected.label}`,
  ];

  if (input.date) lines.push(`Preferred date: ${input.date}`);
  if (input.message.trim()) lines.push(`Note: ${clean(input.message)}`);

  return lines.join("\n");
}

export function faqs() {
  const areas =
    site.confirmedServiceAreas.length > 0
      ? ` Confirmed areas currently include ${site.confirmedServiceAreas.join(", ")}.`
      : "";

  const fees = site.consultationFees
    ? ` Current details shared by the practice: ${site.consultationFees}.`
    : "";

  return [
    {
      question: "Does MY PHYSIO provide physiotherapy at home?",
      answer:
        "Yes. MY PHYSIO offers home-visit physiotherapy services. Contact us to confirm availability for your location.",
    },
    {
      question: "How can I book an appointment?",
      answer: `You can request an appointment by calling or sending a WhatsApp message to ${site.phoneDisplay}.`,
    },
    {
      question: "What rehabilitation services does MY PHYSIO focus on?",
      answer:
        "Our key focus areas include spine, shoulder, and knee rehabilitation. Contact us to discuss your specific requirements.",
    },
    {
      question: "Which locations are covered for home visits?",
      answer: `Home-visit availability depends on your location and scheduling. Share your area on WhatsApp to confirm.${areas}`,
    },
    {
      question: "What are the consultation charges?",
      answer: `Please contact MY PHYSIO for current consultation charges and any applicable home-visit fees.${fees}`,
    },
    {
      question: "What should I expect when enquiring about physiotherapy?",
      answer:
        "You can share your location and a brief description of your concerns. Dr. Vikas can guide you on appointment availability and the next appropriate steps.",
    },
  ];
}
