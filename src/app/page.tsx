import { CallToAction } from "@/sections/CallToAction";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import { WhyChoose } from "@/sections/WhyChoose";
import { OffsetNeutral } from "@/sections/OffsetNeutral";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <WhyChoose />
      <OffsetNeutral />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
