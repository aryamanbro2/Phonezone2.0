import { ShieldCheck, Headphones, BadgeCheck, Sparkles } from "lucide-react";

export function BentoSpecs() {
  return (
    <section id="doctrine" className="bento-section flex min-h-screen snap-start snap-always flex-col bg-background px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20">
      <div className="reveal mb-6 flex items-end justify-between sm:mb-8">
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-molten sm:text-[10px] sm:tracking-[0.3em]">
            /03 — Doctrine
          </div>
          <h2
            className="font-display mt-2 font-black uppercase leading-[0.85] tracking-[-0.04em] text-fill-anim sm:mt-3"
            style={{ fontSize: "clamp(2rem, 6vw, 7rem)" }}
          >
            Why choose us.
          </h2>
        </div>
        <div className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:block">
          Three axioms · One floor
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:grid-rows-2">
        {/* Large */}
        <div className="reveal glass relative flex flex-col items-start gap-8 overflow-hidden p-6 sm:p-10 md:col-span-2 md:row-span-2 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[60%] w-[60%] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--molten) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 flex w-full items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
            <span>/01 — Identity</span>
            <ShieldCheck className="h-8 w-8 text-molten sm:h-10 sm:w-10" strokeWidth={1.4} />
          </div>
          <div className="relative z-10">
            <h3
              className="font-display font-black uppercase leading-[0.85] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 6rem)" }}
            >
              The Zone
              <br />
              <span className="text-molten">Identity.</span>
            </h3>
            <p className="mt-4 max-w-xl text-base leading-snug text-muted-foreground sm:mt-6 sm:text-lg md:text-2xl">
              Phone Zone 2.0 is more than a retail store. We are Dwarka's premier tech showroom, dedicated to bridging the gap between cutting-edge innovation and the end user.
            </p>
          </div>
        </div>

        {/* Small top */}
        <div className="reveal glass relative flex flex-col items-start gap-6 overflow-hidden p-6 sm:p-8">
          <div className="flex w-full items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
            <span>/02</span>
            <Headphones className="h-6 w-6 text-molten sm:h-8 sm:w-8" strokeWidth={1.4} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-black uppercase leading-[0.9] tracking-tight sm:text-3xl md:text-4xl">
              Expert<br />Care.
            </h3>
            <p className="mt-2 text-sm leading-snug text-muted-foreground sm:mt-3 md:text-lg">
              Flagship repairs and expert consultation to keep your tech at peak performance.
            </p>
          </div>
        </div>

        {/* Small bottom */}
        <div className="reveal glass relative flex flex-col items-start gap-6 overflow-hidden p-6 sm:p-8">
          <div className="flex w-full items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
            <span>/03</span>
            <BadgeCheck className="h-6 w-6 text-molten sm:h-8 sm:w-8" strokeWidth={1.4} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-black uppercase leading-[0.9] tracking-tight sm:text-3xl md:text-4xl">
              100%<br />Authentic.
            </h3>
            <p className="mt-2 text-sm leading-snug text-muted-foreground sm:mt-3 md:text-lg">
              Official brands, verified serials, and sealed boxes. No compromises.
            </p>
          </div>
        </div>
      </div>

      <div className="reveal mt-4 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground sm:mt-6 sm:text-[10px] sm:tracking-[0.3em]">
        <span className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-molten" /> Hand-curated since 2024</span>
        <a href="#contact" className="hover:text-molten">Visit the floor →</a>
      </div>
    </section>
  );
}
