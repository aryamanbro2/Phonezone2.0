import { useEffect, useRef } from "react";
import { HeroModel3D } from "./HeroModel3D";
import { ModelSwitcher } from "./ModelSwitcher";
import { useModel } from "./ModelContext";

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { brand } = useModel();

  // Parallax tilt on desktop (disabled on touch)
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = wrap.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width - 0.5;
        const cy = (e.clientY - r.top) / r.height - 0.5;
        wrap.style.setProperty("--tilt-x", `${-cy * 6}deg`);
        wrap.style.setProperty("--tilt-y", `${cx * 8}deg`);
      });
    };
    wrap.addEventListener("mousemove", onMove);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      ref={wrapRef}
      className="hero-section flex h-screen snap-start snap-always items-center justify-center bg-background"
    >
      {/* ambient glow — shifts color based on brand */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-1000"
        style={{
          background: "radial-gradient(circle, var(--molten) 0%, transparent 60%)",
          opacity: "var(--glow-opacity, 0.4)"
        }}
      />

      {/* outline brand text behind */}
      <h1
        aria-hidden
        className="font-display pointer-events-none absolute inset-0 flex items-center justify-center text-stroke-soft text-center font-black uppercase leading-[0.8] whitespace-normal select-none"
        style={{ fontSize: "clamp(3rem, 11vw, 18rem)" }}
      >
        PHONE ZONE 2.0
      </h1>

      {/* top status bar */}
      <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em] md:left-12 md:right-12 md:top-6">
        <span className="pl-14 sm:pl-0"><span className="text-molten">●</span>&nbsp;&nbsp;Phone Zone 2.0 · Dwarka</span>
        <span className="hidden md:inline">Editorial Index / 2026</span>
      </div>

      {/* central device — 3D model */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          className="will-change-transform"
          style={{
            transform: "perspective(1200px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
            transition: "transform 200ms ease-out",
          }}
        >
          <HeroModel3D />
        </div>

        {/* interaction hint — contextually placed near the model */}
        <span className="mt-2 font-mono text-[8px] uppercase tracking-[0.3em] text-molten opacity-70 animate-pulse sm:mt-3 sm:text-[10px]">
          Drag to rotate
        </span>

        {/* headline */}
        <h2 className="reveal font-display mt-2 text-center text-xl font-black uppercase tracking-[0.14em] sm:mt-4 sm:text-2xl md:mt-6 md:text-3xl md:tracking-[0.18em]">
          Premium <span className="text-molten">Tech</span> Experience.
        </h2>

        {/* model switcher */}
        <div className="mt-6 sm:mt-8">
          <ModelSwitcher />
        </div>

        {/* mobile-only CTA — part of the flow to prevent overlap */}
        <div className="mt-10 flex flex-col items-center gap-5 font-mono md:hidden">
          <a
            href="#showcase"
            className="reveal group btn-premium z-10 inline-flex items-center gap-3 border border-molten bg-molten px-8 py-3.5 text-[11px] font-bold tracking-[0.3em] text-primary-foreground transition-colors hover:bg-transparent hover:text-molten"
          >
            Explore Collection
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a href="#contact" className="z-10 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground underline-offset-8 hover:text-molten hover:underline">
            Visit Store ↗
          </a>
        </div>
      </div>

      {/* bottom CTA bar — desktop only */}
      <div className="absolute bottom-10 left-12 right-12 z-20 hidden items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[10px]">
          {brand === "iphone" ? "Obsidian Luxe" : "Neon Velocity"} · PZ 2.0
        </span>

        <a
          href="#showcase"
          className="reveal group btn-premium z-10 inline-flex items-center gap-3 border border-molten bg-molten px-6 py-3 text-[11px] font-bold tracking-[0.3em] text-primary-foreground transition-colors hover:bg-transparent hover:text-molten"
        >
          Explore Collection
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>

        <a href="#contact" className="z-10 text-foreground underline-offset-8 hover:text-molten hover:underline">
          Visit Store ↗
        </a>
      </div>
    </section>
  );
}
