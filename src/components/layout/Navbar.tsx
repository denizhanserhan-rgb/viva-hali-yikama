"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { buildTelHref } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-300",
        solid
          ? "border-b border-white/10 bg-navy-deep/80 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.65)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Soft top glow when transparent over video */}
      {!solid ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy-deep/55 to-transparent" />
      ) : null}

      <Container className="relative flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative shrink-0">
            <span className="absolute -inset-1.5 rounded-full bg-champagne/25 opacity-0 blur-md transition group-hover:opacity-70" />
            <Image
              src="/logo/viva-logo.png"
              alt={site.name}
              width={48}
              height={48}
              className="relative h-11 w-11 rounded-full object-cover shadow-[0_10px_28px_-8px_rgba(0,0,0,0.55)] ring-1 ring-white/35"
              priority
            />
          </span>
          <div className="leading-tight">
            <p
              className="font-display text-lg tracking-tight text-white sm:text-xl"
              style={{
                textShadow:
                  "0 2px 0 rgba(0,0,0,0.25), 0 10px 28px rgba(0,0,0,0.45), 0 0 32px rgba(196,165,116,0.15)",
              }}
            >
              Viva
            </p>
            <p
              className="text-[9px] font-medium uppercase tracking-[0.28em] text-champagne-soft"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}
            >
              Halı Yıkama
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition duration-200",
                  active
                    ? "text-white"
                    : "text-white/65 hover:text-white",
                )}
                style={{
                  textShadow: active
                    ? "0 4px 18px rgba(0,0,0,0.45), 0 0 20px rgba(196,165,116,0.2)"
                    : "0 4px 16px rgba(0,0,0,0.35)",
                }}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-3.5 bottom-1 h-px bg-gradient-to-r from-transparent via-champagne to-transparent shadow-[0_0_10px_rgba(196,165,116,0.7)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/8 text-champagne-soft transition hover:border-champagne/45 hover:bg-white/12 hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <Button
            href={buildTelHref()}
            variant="ghost"
            size="sm"
            className="border-white/25 bg-white/8 shadow-[0_10px_28px_-14px_rgba(0,0,0,0.55)] hover:border-champagne/40 hover:bg-white/12"
          >
            <Phone className="h-4 w-4 text-champagne" strokeWidth={1.5} />
            {site.phoneDisplay}
          </Button>
          <Button
            href="/iletisim"
            size="sm"
            variant="champagne"
            className="shadow-[0_12px_32px_-12px_rgba(196,165,116,0.65)]"
          >
            Randevu Al
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-navy-deep/95 backdrop-blur-xl lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-3 text-sm font-medium tracking-wide transition",
                    active
                      ? "bg-white/10 text-champagne-soft"
                      : "text-white/75 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 grid gap-2">
              <Button
                href={site.social.instagram}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                Instagram
              </Button>
              <Button href={buildTelHref()} variant="ghost">
                <Phone className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                Hemen Ara
              </Button>
              <Button href="/iletisim" variant="champagne">
                Randevu Al
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
