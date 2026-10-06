import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "100%", label: "Hijyen odaklı süreç" },
  { value: "4 ilçe", label: "Ücretsiz servis bölgesi" },
  { value: "0 ₺", label: "Servis ücreti" },
  { value: "4", label: "Adımda teslimat" },
];

export function Stats() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div className="text-center">
                <p className="font-display text-4xl tracking-tight text-champagne sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-white/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
