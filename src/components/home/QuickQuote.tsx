import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";
import { Reveal } from "@/components/ui/Reveal";

const promises = [
  "Ücretsiz keşif ve servis planı",
  "Sürpriz ücret yok",
  "Çorlu, Ergene, Çerkezköy ve Kapaklı’ya kapı servisi",
];

export function QuickQuote() {
  return (
    <section
      id="teklif"
      className="section-pad relative scroll-mt-20 overflow-hidden bg-navy-deep text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_10%_0%,rgba(196,165,116,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_100%_80%,rgba(42,95,150,0.2),transparent_55%)]" />
      </div>
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-champagne-soft">
              30 saniyede teklif
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Formu doldurun, WhatsApp mesajınız hazır açılsın
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              Net bilgi için halı sayısı ve yaklaşık ölçüyü yazmanız ya da
              WhatsApp’tan fotoğraf göndermeniz yeterli.
            </p>
            <ul className="mt-8 space-y-3">
              {promises.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-champagne/15 text-champagne">
                    <Check className="h-3 w-3" strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.06}>
            <ServiceRequestForm title="Teklif ve servis talebi" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
