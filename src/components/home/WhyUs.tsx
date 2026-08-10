import { BadgeCheck, Clock3, FlaskConical, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: FlaskConical,
    title: "Modern tesis teknolojisi",
    text: "Endüstriyel yıkama hatları ile derinlemesine, standartlara uygun temizlik.",
  },
  {
    icon: BadgeCheck,
    title: "Uzman kalite kontrol",
    text: "Her parça teslimattan önce özenle kontrol edilir; standartlarımızdan ödün vermeyiz.",
  },
  {
    icon: Clock3,
    title: "Zamanında teslim sözü",
    text: "Planlanan günde alım ve teslimat. Süreci takip edilebilir tutarız.",
  },
  {
    icon: Sparkles,
    title: "Viva farkı",
    text: "Hijyen, doğa dostu ürünler ve özenli paketleme ile yenilenmiş his.",
  },
];

export function WhyUs() {
  return (
    <section className="section-pad relative overflow-hidden bg-section-soft">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Neden Viva?"
            eyebrowPill
            title="Güven veren, premium bir temizlik deneyimi"
            description="Kurumsal hizmet standardını evinize taşıyoruz — hızlı, hijyenik ve takip edilebilir."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {reasons.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="flex gap-4 rounded-3xl border border-slate-200/60 bg-white/85 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-navy">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
