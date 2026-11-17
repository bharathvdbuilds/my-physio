import { Booking } from "@/components/booking";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import {
  About,
  Benefits,
  Coverage,
  Focus,
  Introduction,
  Process,
  Reviews,
  Services,
  TrustStrip,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <TrustStrip />
      <Introduction />
      <Services />
      <About />
      <Benefits />
      <Process />
      <Focus />
      <Reviews />
      <Coverage />
      <Faq />
      <Booking />
    </main>
  );
}
