import {
  Sparkles,
  ShieldCheck,
  Truck,
  Layers,
  Check,
} from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTABanner } from "@/components/home/CTABanner";
import { Button } from "@/components/ui/Button";
import { servicesPageContent } from "@/content/about";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Çorlu Halı, Koltuk ve Perde Yıkama",
  description:
    "Çorlu ve Ergene’de halı yıkama, koltuk yıkama, stor perde, el dokuma/antika ve yorgan battaniye hizmetleri. Ücretsiz servis ve hijyen garantisi.",
  alternates: { canonical: "/hizmetler" },
};

const promiseIcons = [Truck, ShieldCheck, Layers, Sparkles];

export default function ServicesPage() {
  const c = servicesPageContent;

  return (
    <div className="bg-atmosphere">
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.description}
        actions={
          <>
            <Button href="/iletisim" size="lg" variant="champagne">
              Randevu Al
            </Button>
            <Button href="/hakkimizda" size="lg" variant="ghost">
              Hakkımızda
            </Button>
          </>
        }
      />

      <section className="section-pad relative overflow-hidden bg-platinum">
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Uzmanlık alanlarımız"
              eyebrowPill
              title="Her tekstil için ayrı özen"
              description="Aşağıdan ihtiyacınıza uygun hizmeti seçin. Her kartta sürecin özeti var; detay sayfasında kapsam, dahil olanlar ve sık sorulan soruları inceleyebilirsiniz."
            />
          </Reveal>
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </Container>
      </section>

      <section className="section-pad bg-section-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Viva standardı"
              eyebrowPill
              title={c.promiseTitle}
              description={c.promiseDescription}
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {c.promises.map((item, index) => {
              const Icon = promiseIcons[index] ?? Sparkles;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                    <Icon
                      className="h-5 w-5 text-champagne"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-5 font-display text-xl text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne">
                Kapsam
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-navy sm:text-4xl">
                {c.includedTitle}
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                Her işte aynı disiplin: ön kontrol, doğru yöntem, hijyen, koruma
                ve zamanında teslim. Kapsamı netleştirmek veya randevu oluşturmak
                için bize ulaşmanız yeterli.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <ul className="space-y-3">
                {c.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white px-5 py-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-champagne">
                      <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </span>
                    <span className="text-sm font-medium text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <ProcessSteps />
      <ServiceFAQ />
      <CTABanner />
    </div>
  );
}
