import { useEffect, useRef, useState } from "react";
import phones from "@/assets/cat-smartphones.jpg";
import laptops from "@/assets/cat-laptops.jpg";
import tvs from "@/assets/cat-tvs.jpg";
import accessories from "@/assets/cat-accessories.jpg";

const slides = [
  { idx: "01", name: "Smartphones", tag: "Flagships · Apple · Samsung", img: phones },
  { idx: "02", name: "Accessories", tag: "Premium Audio · Protection", img: accessories },
  { idx: "03", name: "Repairs", tag: "Expert Services · Screen · Battery", img: laptops },
  { idx: "04", name: "Smart TVs", tag: "OLED · Next-Gen Display", img: tvs },
];

export function HorizontalShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sec = sectionRef.current;
        const track = trackRef.current;
        if (!sec || !track) return;
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const p = total > 0 ? scrolled / total : 0;
        const trackW = track.scrollWidth;
        const max = trackW - window.innerWidth;
        track.style.transform = `translate3d(${-p * max}px, 0, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${slides.length * 100}svh` }}
    >
      {/* Scroll Snapping Anchors (invisible) */}
      <div className="absolute top-0 w-full" style={{ height: '100%', pointerEvents: 'none' }}>
        {slides.map((s, i) => (
          <div key={`snap-${s.idx}`} className="h-svh w-full snap-start snap-always" />
        ))}
      </div>

      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* molten bleed */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: hovered !== null ? 0.55 : 0,
            background:
              "radial-gradient(60% 80% at 50% 50%, var(--molten) 0%, transparent 70%)",
          }}
        />

        {/* heading overlay */}
        <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em] md:left-12 md:right-12 md:top-6">
          <span><span className="text-molten">/02</span> — Showcase</span>
          <span className="hidden md:inline">Scroll vertically to pan →</span>
          <span>{String((hovered ?? 0) + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        </div>

        {/* GIANT BACKGROUND TEXT */}
        <h2
          aria-hidden
          className="font-display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-stroke-soft text-center font-black uppercase leading-none tracking-[-0.05em] whitespace-nowrap select-none opacity-20"
          style={{ fontSize: "clamp(3rem, 15vw, 22rem)" }}
        >
          SHOWCASE
        </h2>

        {/* track */}
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ transition: "transform 60ms linear" }}
        >
          {slides.map((s, i) => (
            <article
              key={s.idx}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative h-full shrink-0 overflow-hidden border-r hairline w-screen md:w-[85vw]"
            >
              <img
                src={s.img}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80 sm:left-8 sm:top-8 sm:text-xs">
                /{s.idx}
              </div>

              {/* Added pb-20 md:pb-0 so bottom nav doesn't cut it off on mobile */}
              <div className="absolute bottom-6 left-4 right-4 pb-20 md:pb-0 flex items-end justify-between gap-4 sm:bottom-10 sm:left-8 sm:right-8 sm:gap-6">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-molten sm:text-xs sm:tracking-[0.3em]">
                    {s.tag}
                  </div>
                  <h3
                    className="font-display mt-2 font-black uppercase leading-[0.85] tracking-[-0.03em] sm:mt-3"
                    style={{ fontSize: "clamp(2rem, 7vw, 8rem)" }}
                  >
                    {s.name}
                  </h3>
                </div>
                <a href="#contact" className="hidden font-mono text-xs uppercase tracking-[0.3em] text-foreground/80 transition-colors group-hover:text-molten md:inline">
                  In-store →
                </a>
              </div>
            </article>
          ))}
          {/* trailing pad so the last slide centers */}
          <div className="h-full w-[0vw] md:w-[15vw] shrink-0" />
        </div>
      </div>
    </section>
  );
}
