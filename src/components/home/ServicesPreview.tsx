import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesGrid } from "@/components/services/ServicesGrid";

export function ServicesPreview() {
  return (
    <section className="section-pad relative overflow-hidden bg-platinum">
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            eyebrowPill
            title="Her tekstil için uzman temizlik"
            description="Halıdan koltuğa, perdeden antika parçalara ve yatak tekstillerine kadar; kumaşa özel protokol, ücretsiz servis ve hijyen odaklı tesis süreciyle profesyonel çözümler sunuyoruz."
          />
        </Reveal>

        <div className="mt-14">
          <ServicesGrid />
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/hizmetler" variant="outline">
            Tüm Hizmetler
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
