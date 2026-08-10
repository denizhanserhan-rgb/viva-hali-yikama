import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { buildTelHref, buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_0%,rgba(196,165,116,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_90%_100%,rgba(42,95,150,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_18%,transparent_82%,rgba(0,0,0,0.35)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      </div>

      <Container className="relative py-16 sm:py-20">
        <div>
          {/* Brand spotlight */}
          <div className="mb-14 flex flex-col gap-8 border-b border-white/[0.08] pb-12 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:pb-14">
            <div className="max-w-xl">
              <Link href="/" className="group inline-flex items-center gap-4">
                <span className="relative shrink-0">
                  <span className="absolute -inset-2 rounded-full bg-champagne/20 opacity-60 blur-md transition group-hover:opacity-90" />
                  <Image
                    src="/logo/viva-logo.png"
                    alt={site.name}
                    width={64}
                    height={64}
                    className="relative h-14 w-14 rounded-full object-cover shadow-[0_12px_40px_-8px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.18)] sm:h-16 sm:w-16"
                  />
                </span>
                <span>
                  <span
                    className="block font-display text-4xl leading-none tracking-tight text-white sm:text-5xl"
                    style={{
                      textShadow:
                        "0 2px 0 rgba(0,0,0,0.25), 0 12px 40px rgba(0,0,0,0.45), 0 0 48px rgba(196,165,116,0.18)",
                    }}
                  >
                    Viva
                  </span>
                  <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.32em] text-champagne-soft drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                    Halı Yıkama
                  </span>
                </span>
              </Link>

              <p
                className="mt-7 max-w-md font-display text-xl leading-snug tracking-tight text-white/90 sm:text-2xl"
                style={{
                  textShadow: "0 8px 28px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {site.slogan}
              </p>
              <p className="mt-3 text-sm tracking-[0.04em] text-white/45">
                {site.tagline}
              </p>
            </div>

            <a
              href={buildTelHref()}
              className="group inline-flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-champagne/30 hover:bg-white/[0.06]"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne-soft">
                Hemen ara
              </span>
              <span
                className="mt-2 font-display text-2xl tracking-tight text-white transition group-hover:text-champagne-soft sm:text-3xl"
                style={{
                  textShadow: "0 10px 32px rgba(0,0,0,0.5), 0 0 40px rgba(196,165,116,0.12)",
                }}
              >
                {site.phoneDisplay}
              </span>
            </a>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            <FooterColumn title="Hizmetler">
              <ul className="space-y-3.5">
                {footerNav.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-white/55 transition duration-200 hover:text-white"
                      style={{ textShadow: "0 4px 16px rgba(0,0,0,0.25)" }}
                    >
                      <span className="h-px w-0 bg-champagne transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Kurumsal">
              <ul className="space-y-3.5">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-white/55 transition duration-200 hover:text-white"
                      style={{ textShadow: "0 4px 16px rgba(0,0,0,0.25)" }}
                    >
                      <span className="h-px w-0 bg-champagne transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="İletişim">
              <div className="space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-[14px] font-medium tracking-wide text-white/65 transition hover:text-champagne-soft"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                    <Mail className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                  </span>
                  {site.email}
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] font-medium tracking-wide text-white/65 transition hover:text-champagne-soft"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-champagne/30 bg-champagne/10 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                    <InstagramIcon className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                  </span>
                  @viva_hali_yikama
                </a>
                <a
                  href={site.google.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[14px] leading-relaxed tracking-wide text-white/50 transition hover:text-champagne-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                    <MapPin className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                  </span>
                  {site.address.full}
                </a>
                <p className="flex items-start gap-3 text-[13px] leading-relaxed tracking-wide text-white/45">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                    <Clock className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                  </span>
                  <span>
                    {site.hours.weekdays}
                    <br />
                    {site.hours.sunday}
                  </span>
                </p>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-champagne/35 bg-champagne/10 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-champagne-soft shadow-[0_12px_32px_-12px_rgba(196,165,116,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:border-champagne/55 hover:bg-champagne/15"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
                  WhatsApp ile yazın
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" strokeWidth={1.75} />
                </a>
              </div>
            </FooterColumn>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="text-[12px] tracking-wide text-white/35"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
            >
              © {year} {site.name}. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium tracking-wide text-champagne-soft transition hover:text-white"
              >
                Instagram · @viva_hali_yikama
              </a>
              <p
                className="text-[10px] font-medium uppercase tracking-[0.22em] text-champagne/55"
                style={{ textShadow: "0 4px 16px rgba(0,0,0,0.4)" }}
              >
                Premium hijyen · Ücretsiz servis · Zamanında teslimat
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3
        className="text-[11px] font-medium uppercase tracking-[0.3em] text-champagne-soft"
        style={{
          textShadow: "0 2px 12px rgba(196,165,116,0.35), 0 4px 20px rgba(0,0,0,0.35)",
        }}
      >
        {title}
      </h3>
      <div className="mt-2 mb-6 h-px w-10 bg-gradient-to-r from-champagne/70 to-transparent shadow-[0_0_12px_rgba(196,165,116,0.45)]" />
      {children}
    </div>
  );
}
