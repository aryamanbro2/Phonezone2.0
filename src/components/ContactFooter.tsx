import { MapPin } from "lucide-react";

export function ContactFooter() {
  return (
    <footer id="contact" className="contact-section flex min-h-screen snap-start snap-always flex-col bg-background">
      <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
        {/* LEFT */}
        <div className="relative flex flex-col justify-between border-b hairline px-4 py-16 sm:px-6 sm:py-20 md:border-b-0 md:border-r md:px-12 md:py-16">
          <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-molten sm:text-[10px] sm:tracking-[0.3em]">
            /05 — Contact & location
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
              Store hours: 11:00–21:30
            </span>
            <span className="hidden sm:inline">© 2026 phonezone<span className="text-molten">2.0</span></span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-16">
          {/* map placeholder (Clickable) */}
          <a
            href="https://www.google.com/maps/place/Phone+Zone+2.0/@28.5884543,77.0689017,17z/data=!3m2!4b1!5s0x390d1b3da52094c9:0xc2328c9ecdf15726!4m6!3m5!1s0x390d1bb86c56d92f:0x4e9e0d4f61c9660a!8m2!3d28.5884496!4d77.0714766!16s%2Fg%2F11tp38zyr3?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
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
                Phone Zone 2.0 ↗
              </div>
            </div>
          </a>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Address
              </div>
              <p className="mt-2 text-base leading-snug sm:mt-3 sm:text-lg md:text-xl">
                Plot No. 149, Ramphal Chowk Road<br />
                Beside SBI Bank, Palam Extension<br />
                Sector 7, Dwarka<br />
                New Delhi — 110075
              </p>
            </div>
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Hours
              </div>
              <p className="mt-2 text-base leading-snug sm:mt-3 sm:text-lg md:text-xl">
                Mon — Sun<br />
                11:00 — 21:30
              </p>
            </div>
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Direct Line
              </div>

              <p className="mt-2 text-sm leading-snug sm:mt-3 sm:text-base md:text-lg">
                <a
                  href="tel:+919999444494"
                  className="hover:text-molten"
                >
                  +91 99994 44494
                </a>
                <br />

                <a
                  href="https://wa.me/919999444494"
                  target="_blank"
                  rel="noreferrer"
                  className="text-molten hover:underline"
                >
                  WhatsApp ↗
                </a>
              </p>
            </div>
            <div className="reveal">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                Legal & Social
              </div>
              <ul className="mt-2 space-y-1 text-base sm:mt-3 sm:text-lg md:text-xl">
                <li>
                  <a href="#business" className="hover:text-molten">
                    Business Information
                  </a>
                </li>
                <li><a href="/privacy" className="hover:text-molten">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-molten">Terms of Service</a></li>
                <li><a href="https://wa.me/919999444494" target="_blank" rel="noreferrer" className="text-molten hover:underline">WhatsApp ↗</a></li>
              </ul>
            </div>
          </div>

          {/* WhatsApp API Compliant Disclosure */}
          <div className="reveal mt-12 border-t hairline pt-6 font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground sm:text-[9px]">
            <p>
              For current stock, pricing, repair eligibility and service turnaround, please contact the store directly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}