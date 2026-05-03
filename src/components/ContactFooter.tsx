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
          {/* map placeholder */}
          <div className="reveal relative mb-6 h-[24svh] w-full overflow-hidden border hairline bg-card sm:mb-8 sm:h-[28svh]">
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
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-2xl"
              style={{ background: "radial-gradient(circle, var(--molten) 0%, transparent 65%)" }}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <MapPin className="mx-auto h-6 w-6 text-molten sm:h-8 sm:w-8" strokeWidth={1.5} />
              <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Lagos · Tech Quarter
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Address
              </div>
              <p className="mt-2 text-base leading-snug sm:mt-3 sm:text-lg md:text-xl">
                221B Signal Avenue<br />
                District 9, Tech Quarter<br />
                Lagos, NG
              </p>
            </div>
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Hours
              </div>
              <p className="mt-2 text-base leading-snug sm:mt-3 sm:text-lg md:text-xl">
                Mon — Sat<br />
                10:00 — 20:00<br />
                <span className="text-muted-foreground">Sunday — Closed</span>
              </p>
            </div>
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Direct
              </div>
              <p className="mt-2 text-base leading-snug sm:mt-3 sm:text-lg md:text-xl">
                +234 800 000 2020<br />
                <a href="mailto:hello@phonezone2.shop" className="text-molten underline-offset-4 hover:underline">
                  hello@phonezone2.shop
                </a>
              </p>
            </div>
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Channels
              </div>
              <ul className="mt-2 space-y-1 text-base sm:mt-3 sm:text-lg md:text-xl">
                <li><a href="https://instagram.com/phonezone2.0" target="_blank" rel="noreferrer" className="hover:text-molten">Instagram ↗</a></li>
                <li><a href="https://tiktok.com/@phonezone2.0" target="_blank" rel="noreferrer" className="hover:text-molten">TikTok ↗</a></li>
                <li><a href="https://wa.me/2348000002020" target="_blank" rel="noreferrer" className="hover:text-molten">WhatsApp ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
