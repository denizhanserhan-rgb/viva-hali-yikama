"use client";

import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";
import { buildTelHref, buildWhatsAppUrl } from "@/lib/whatsapp";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy/95 p-3 backdrop-blur-xl md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 text-sm font-medium text-white"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
          WhatsApp
        </a>
        <a
          href={buildTelHref()}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-champagne text-sm font-medium text-navy"
        >
          <Phone className="h-4 w-4" strokeWidth={1.5} />
          Hemen Ara
        </a>
      </div>
      <p className="mt-1.5 text-center text-[11px] text-white/45">
        {site.phoneDisplay}
      </p>
    </div>
  );
}
