// Floating buttons, bottom-right on every page:
//  - a navy "back to top" arrow (green arrow, matching the site colours), always visible
//  - the WhatsApp button, which opens a chat with the institute directly.

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { CONTACT } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export function FloatingActions() {
  // Arrow is always visible; it gets a stronger look once the page is scrolled.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-glow/30 bg-navy text-brand-glow shadow-xl shadow-navy/40 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow sm:h-14 sm:w-14 ${
          scrolled ? "opacity-100" : "opacity-85"
        }`}
      >
        <ArrowUp className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.25} aria-hidden />
      </button>

      <a
        href={CONTACT.whatsappFloat}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="wa-float relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:h-16 sm:w-16"
      >
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}
