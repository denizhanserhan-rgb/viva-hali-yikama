"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { useIsClient } from "@/lib/use-is-client";

export function Testimonials() {
  const reduce = useReducedMotion();
  const mounted = useIsClient();

  const animate = mounted && !reduce;

  return (
    <section className="section-pad relative overflow-hidden bg-platinum">
      <Container className="relative">
        <motion.div
          initial={animate ? { opacity: 0, y: 18 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Müşteri Yorumları"
            eyebrowPill
            title="Memnuniyet bizim en güçlü referansımız"
            description="Müşterilerimizin deneyimleri; tüm yorumlara Google üzerinden ulaşabilirsiniz."
          />
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={animate ? { opacity: 0, y: 14 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <a
            href={site.google.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-slate-100 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-champagne">
              <Star className="h-4 w-4 fill-current" strokeWidth={1.5} />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-navy">
                Google yorumlarımız
              </p>
              <p className="text-xs text-muted">
                Tüm değerlendirmeleri Google Haritalar’da inceleyin
              </p>
            </div>
          </a>
        </motion.div>

        <motion.div
          className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: animate ? 0.08 : 0 },
            },
          }}
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.id}
              className="mb-5 break-inside-avoid rounded-3xl border border-slate-100 bg-white/85 p-7 shadow-sm backdrop-blur-sm"
              variants={{
                hidden: animate ? { opacity: 0, y: 22 } : { opacity: 1, y: 0 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-navy">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted">
                    {item.location} · {item.dateLabel}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5 text-champagne">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                “{item.text}”
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
