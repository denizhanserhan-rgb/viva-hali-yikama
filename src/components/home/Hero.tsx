"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { site } from "@/content/site";
import { buildTelHref, buildWhatsAppUrl } from "@/lib/whatsapp";
import { useIsClient } from "@/lib/use-is-client";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const mounted = useIsClient();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const play = () => {
      void video.play().catch(() => undefined);
    };

    play();
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);

    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
    };
  }, []);

  const animateIn = mounted && !reduceMotion;

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy-deep">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
        aria-label="Viva Halı Yıkama tesis videosu"
      >
        <source src="/videos/hero-facility.mp4?v=landscape-4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/70 to-navy-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/35" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[min(42rem,58%)] bg-gradient-to-r from-navy-deep/55 to-transparent" />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-24 pt-28 sm:pt-32">
        <motion.div
          initial={animateIn ? { opacity: 0, y: 18 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="font-display text-[3.75rem] leading-[0.92] tracking-tight text-white sm:text-7xl">
            Viva
          </p>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky">
            Halı Yıkama
          </p>

          <div className="mt-8 h-px w-12 bg-sky/70" />

          <h1 className="mt-7 max-w-md text-balance font-display text-[1.9rem] leading-[1.12] tracking-tight text-white sm:text-[2.5rem]">
            Çorlu ve Ergene’de {site.tagline}
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80 sm:text-base">
            Çorlu, Ergene, Çerkezköy ve Kapaklı’da halı yıkama: kendi tesisimizde
            yıkama, ücretsiz servis ve zamanında teslimat.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={buildTelHref()} size="lg" variant="secondary">
              <Phone className="h-4 w-4" />
              Hemen Ara
            </Button>
            <Button
              href={buildWhatsAppUrl()}
              size="lg"
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button href="/servis-cagir" size="lg" variant="soft">
              <CalendarCheck className="h-4 w-4" />
              Servis Çağır
            </Button>
          </div>

          <p className="mt-10 text-xs tracking-[0.04em] text-white/50">
            %100 hijyen · Ücretsiz servis · Zamanında teslimat
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
