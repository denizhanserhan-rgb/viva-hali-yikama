import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import {
  StructuredData,
  breadcrumbSchema,
} from "@/components/seo/StructuredData";
import { regions } from "@/content/regions";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Servis Çağır | Ücretsiz Halı Alım",
  description:
    "Çorlu, Ergene, Çerkezköy ve Kapaklı’da ücretsiz halı yıkama servisi çağırın. Formu doldurun, ekibimiz alım gününü sizinle planlasın.",
  alternates: { canonical: "/servis-cagir" },
};

const steps = [
  "Formu doldurun, WhatsApp mesajınız hazır açılsın",
  "Ekibimiz sizi arayıp alım gününü teyit etsin",
  "Halılarınızı kapınızdan ücretsiz alalım",
  "Yıkama sonrası paketli şekilde teslim edelim",
];

export default function ServiceRequestPage() {
  return (
    <div className="bg-atmosphere">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Servis Çağır", path: "/servis-cagir" },
        ])}
      />
      <PageHero
        eyebrow="Servis Çağır"
        title="Kapınıza gelelim"
        description="Bilgilerinizi bırakın; ekibimiz teyit edip ücretsiz alım için sizi arasın. Çorlu, Ergene, Çerkezköy ve Kapaklı’da kapıdan alım, kapıya teslim."
      />

      <section className="section-pad">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne">
                Nasıl çalışır?
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-navy sm:text-4xl">
                4 adımda tertemiz halılar
              </h2>
              <ol className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-white px-5 py-4"
                  >
                    <span className="font-display text-2xl text-champagne/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-sm leading-relaxed text-navy">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
                  Servis bölgelerimiz
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2.5">
                  {regions.map((r) => (
                    <li key={r.slug} className="flex items-center gap-2 text-sm text-navy">
                      <Check className="h-4 w-4 text-champagne" strokeWidth={1.75} />
                      {r.name}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-muted">
                  {site.hours.weekdays} · {site.hours.sunday}
                </p>
              </div>
            </Reveal>

            <Reveal className="order-first lg:order-none lg:col-span-7" delay={0.06}>
              <ServiceRequestForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
