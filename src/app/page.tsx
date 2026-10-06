import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { QuickQuote } from "@/components/home/QuickQuote";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { GalleryPreview } from "@/components/home/GalleryPreview";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="bg-atmosphere">
      <Hero />
      <TrustBadges />
      <ServicesPreview />
      <QuickQuote />
      <ServiceAreas />
      <ProcessSteps />
      <WhyUs />
      <GalleryPreview />
      <BeforeAfterSlider />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
