import { About } from "@/components/about";
import { Benefits } from "@/components/benefits";
import { Booking } from "@/components/booking";
import { ContactDock } from "@/components/contact-dock";
import { Faq } from "@/components/faq";
import { FocusAreas } from "@/components/focus-areas";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Introduction } from "@/components/introduction";
import { Reviews } from "@/components/reviews";
import { ServiceArea } from "@/components/service-area";
import { Services } from "@/components/services";
import { TrustStrip } from "@/components/trust-strip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <TrustStrip />
        <Introduction />
        <Services />
        <About />
        <Benefits />
        <HowItWorks />
        <FocusAreas />
        <Reviews />
        <ServiceArea />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <ContactDock />
    </>
  );
}
