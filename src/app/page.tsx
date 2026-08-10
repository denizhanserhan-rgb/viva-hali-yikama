import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <div className="bg-atmosphere">
      <Hero />
      <TrustBadges />
      <ServicesPreview />
      <BeforeAfterSlider />
      <ProcessSteps />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
