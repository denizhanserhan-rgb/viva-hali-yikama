import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/process";

export function ProcessSteps() {
  return (
    <section className="section-pad bg-navy text-white">
      <Container>
        <Reveal>
          <SectionHeading
            light
            eyebrow="Nasıl Çalışıyoruz?"
            title="4 adımda tertemiz teslimat"
            description="Adresten alımdan tesise, kontrolden kapınıza kadar şeffaf ve hızlı bir süreç."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.06}>
              <div className="relative">
                <p className="font-display text-5xl tracking-tight text-champagne/30">
                  0{step.step}
                </p>
                <h3 className="mt-4 font-display text-xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
