import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp’tan yazın"
      className="group fixed bottom-6 right-6 z-40 hidden items-center md:flex"
    >
      <span className="pointer-events-none mr-3 translate-x-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-navy opacity-0 shadow-[0_12px_30px_-12px_rgba(0,26,51,0.45)] transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        WhatsApp’tan yazın
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 motion-safe:animate-[wa-ring_5s_ease-out_infinite]"
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.75)] transition-transform duration-300 group-hover:scale-110 motion-safe:animate-[wa-nudge_5s_ease-in-out_infinite] group-hover:[animation-play-state:paused]">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      </span>
    </a>
  );
}
