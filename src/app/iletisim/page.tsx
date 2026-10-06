import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "İletişim & Randevu | Çorlu – Ergene",
  description:
    "VİVA HALI YIKAMA iletişim: Cumhuriyet Mah. 1336. Sk. No:10/2, Ergene / Tekirdağ. Çorlu ve çevresine ücretsiz servis. Telefon: 0530 031 75 36",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return (
    <div className="bg-atmosphere">
      <PageHero
        eyebrow="İletişim"
        title="Randevu alın"
        description="Adresinizi, uygun gün/saatinizi ve ihtiyacınızı paylaşın. Ücretsiz keşif ve net bir planla size dönüş yapalım."
      />

      <section
        id="iletisim-form"
        className="relative overflow-hidden bg-navy-deep section-pad"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_10%_0%,rgba(196,165,116,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_100%_80%,rgba(42,95,150,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
        </div>

        <Container className="relative">
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <ContactInfo />
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-deep pb-20 pt-4 sm:pb-28 sm:pt-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(196,165,116,0.08),transparent_60%)]" />
        <Container className="relative">
          <Reveal>
            <MapEmbed />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
