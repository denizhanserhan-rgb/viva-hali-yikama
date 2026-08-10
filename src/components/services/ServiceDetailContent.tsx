import { Check, Info } from "lucide-react";
import type { Service } from "@/types/service";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { buildTelHref, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Phone, MessageCircle } from "lucide-react";

export function ServiceDetailContent({ service }: { service: Service }) {
  return (
    <>
      {/* Overview */}
      <section className="section-pad">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne">
                Hizmet hakkında
              </p>
              <div className="mt-2 h-px w-10 bg-gradient-to-r from-champagne/70 to-transparent" />
              <h2 className="mt-5 font-display text-3xl tracking-tight text-navy sm:text-4xl">
                {service.title} nasıl yapılır?
              </h2>
              <div className="mt-6 space-y-4">
                {service.details.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-[15px] leading-relaxed text-muted sm:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.06}>
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-white p-7 shadow-[0_24px_60px_-40px_rgba(0,26,51,0.25)] sm:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
                  Bu hizmet için uygun
                </p>
                <ul className="mt-5 space-y-3">
                  {service.suitableFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-navy"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-champagne"
                        strokeWidth={1.75}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section-pad relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-champagne/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-royal/20 blur-3xl" />
        </div>
        <Container className="relative">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-champagne-soft">
              Süreç
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
              Adım adım {service.shortTitle.toLowerCase()} hizmeti
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
              Randevudan teslimata kadar her aşama net ve takip edilebilir.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-display text-3xl text-champagne/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-lg tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="section-pad bg-platinum relative overflow-hidden">
        <Container className="relative">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne">
              Hizmet kapsamı
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-navy sm:text-4xl">
              Neler dahil?
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              {service.description}
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.03}>
                <li className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mist text-champagne">
                    <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-navy">
                    {feature}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Good to know */}
      <section className="section-pad">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <Reveal className="lg:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne">
                Bilmeniz gerekenler
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-navy sm:text-4xl">
                Şeffaf süreç, sürpriz yok
              </h2>
            </Reveal>
            <div className="space-y-4 lg:col-span-8">
              {service.goodToKnow.map((item, index) => (
                <Reveal key={item.slice(0, 32)} delay={index * 0.04}>
                  <div className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white px-5 py-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-champagne">
                      <Info className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <p className="text-sm leading-relaxed text-navy/85">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Service FAQ */}
      <section className="section-pad relative overflow-hidden bg-section-soft">
        <Container className="max-w-3xl relative">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-navy sm:text-4xl">
              {service.shortTitle} hakkında sık sorulanlar
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {service.faqs.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.04}>
                <details className="group rounded-2xl border border-slate-200/60 bg-white/90 px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-navy marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {item.question}
                      <span className="text-champagne transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mid CTA */}
      <section className="pb-6">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-deep px-7 py-10 text-white sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_90%_0%,rgba(196,165,116,0.18),transparent_55%)]" />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne-soft">
                    Ücretsiz keşif
                  </p>
                  <h2 className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
                    {service.title} için randevu alın
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    İhtiyacınızı dinleyelim; size uygun günü birlikte planlayalım.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href={buildTelHref()} size="lg" variant="champagne">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                    Hemen Ara
                  </Button>
                  <Button
                    href={buildWhatsAppUrl(
                      `Merhaba Viva, ${service.title} hakkında detaylı bilgi / randevu istiyorum.`,
                    )}
                    size="lg"
                    variant="ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
