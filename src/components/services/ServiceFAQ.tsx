import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { serviceFaqs } from "@/content/faq";

export function ServiceFAQ() {
  return (
    <section className="section-pad relative overflow-hidden bg-section-soft">
      <Container className="max-w-3xl">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-navy sm:text-4xl">
            Sık sorulan sorular
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {serviceFaqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <details className="group rounded-2xl border border-slate-200/60 bg-white/85 px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                <summary className="cursor-pointer list-none text-sm font-semibold text-navy marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-champagne transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
