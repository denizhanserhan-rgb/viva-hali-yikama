import { Phone, CalendarCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { buildTelHref } from "@/lib/whatsapp";

export function CTABanner() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center text-white sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_50%_0%,rgba(196,165,116,0.14),transparent_70%)]" />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne">
              Hemen başlayın
            </p>
            <h2 className="relative mx-auto mt-5 max-w-xl font-display text-3xl tracking-tight sm:text-4xl">
              {site.slogan}
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-sm text-white/55 sm:text-base">
              Ücretsiz servis ve hijyen garantisi ile randevunuzu bugün alın.
            </p>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={buildTelHref()} size="lg" variant="champagne">
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                {site.phoneDisplay}
              </Button>
              <Button href="/iletisim" size="lg" variant="ghost">
                <CalendarCheck className="h-4 w-4" strokeWidth={1.5} />
                Randevu Al
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
