import { MapPin } from "lucide-react";

export function ContactFooter() {
  return (
    <footer id="contact" className="contact-section flex min-h-screen snap-start snap-always flex-col bg-background">
      <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
        {/* LEFT */}
        <div className="relative flex flex-col justify-between border-b hairline px-4 py-10 sm:px-6 sm:py-12 md:border-b-0 md:border-r md:px-12 md:py-16">
          <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-molten sm:text-[10px] sm:tracking-[0.3em]">
            /04 — Coordinates
          </div>

          <h2
            className="reveal font-display font-black uppercase leading-[0.82] tracking-[-0.05em] text-fill-anim"
            style={{ fontSize: "clamp(3rem, 12vw, 16rem)" }}
          >
            Visit
            <br />
            us.
          </h2>

          <div className="flex items-end justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_10px_var(--volt)]" />
              Open now
            </span>
            <span className="hidden sm:inline">© 2026 phonezone<span className="text-molten">2.0</span></span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col px-4 py-10 sm:px-6 sm:py-12 md:px-12 md:py-16">
          {/* map placeholder (Clickable) */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Phone+Zone+2.0+Dwarka+Sector+7+Ramphal+Chowk"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group relative mb-6 block h-[24svh] w-full overflow-hidden border hairline bg-card transition-colors hover:bg-card/60 sm:mb-8 sm:h-[28svh]"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px)",
                backgroundSize: "40px 40px, 40px 40px",
              }}
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-2xl transition-transform duration-700 group-hover:scale-125"
              style={{ background: "radial-gradient(circle, var(--molten) 0%, transparent 65%)" }}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <MapPin className="mx-auto h-6 w-6 text-molten transition-transform group-hover:scale-110 sm:h-8 sm:w-8" strokeWidth={1.5} />
              <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                New Delhi · Dwarka ↗
              </div>
            </div>
          </a>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Address
              </div>
              <p className="mt-2 text-base leading-snug sm:mt-3 sm:text-lg md:text-xl">
                Dwarka Sector 7<br />
                Ramphal Chowk Road<br />
                New Delhi, 110075
              </p>
            </div>
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Hours
              </div>
              <p className="mt-2 text-base leading-snug sm:mt-3 sm:text-lg md:text-xl">
                Mon — Sat<br />
                11:00 — 21:00<br />
                <span className="text-muted-foreground">Sunday — Open (12-8)</span>
              </p>
            </div>
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Direct
              </div>
              <p className="mt-2 text-base leading-snug sm:mt-3 sm:text-lg md:text-xl">
                +91 99994 44494<br />
                <a href="mailto:phonezone2.0@gadgetic.in" className="text-molten underline-offset-4 hover:underline">
                  phonezone2.0@gadgetic.in
                </a>
              </p>
            </div>
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Legal & Social
              </div>
              <ul className="mt-2 space-y-1 text-base sm:mt-3 sm:text-lg md:text-xl">
                <li><a href="/privacy" className="hover:text-molten">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-molten">Terms of Service</a></li>
                <li><a href="https://wa.me/919999444494" target="_blank" rel="noreferrer" className="text-molten hover:underline">WhatsApp ↗</a></li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Disclosure */}
          <div className="reveal mt-12 border-t hairline pt-6 font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground sm:text-[9px]">
            <p>
              WhatsApp Usage Disclosure: By initiating a chat with us, you agree to receive automated updates and promotional messages.
              You can opt-out at any time by replying "STOP".
              Phone Zone 2.0 is a registered retail business in New Delhi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
