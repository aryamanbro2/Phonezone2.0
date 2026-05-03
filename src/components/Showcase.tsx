import { useEffect, useRef } from "react";
import phones from "@/assets/cat-smartphones.jpg";
import laptops from "@/assets/cat-laptops.jpg";
import tvs from "@/assets/cat-tvs.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import { RippleImage } from "./RippleImage";

type Item = {
  index: string;
  name: string;
  tag: string;
  img: string;
  // layout
  className: string;
  parallax: number; // px per 100 scroll
  zoom?: string;
};

const items: Item[] = [
  {
    index: "01",
    name: "Smartphones",
    tag: "Flagships · Foldables",
    img: phones,
    className: "col-span-12 md:col-span-5 md:col-start-1 row-start-1 aspect-[4/5]",
    parallax: -30,
  },
  {
    index: "02",
    name: "Laptops",
    tag: "Pro · Ultrabooks",
    img: laptops,
    className: "col-span-12 md:col-span-6 md:col-start-7 row-start-2 aspect-[4/3] md:mt-16 z-10",
    parallax: 15,
  },
  {
    index: "03",
    name: "Smart TVs",
    tag: "OLED · QLED",
    img: tvs,
    className: "col-span-12 md:col-span-7 md:col-start-1 row-start-3 aspect-[16/9] md:mt-8",
    parallax: -18,
  },
  {
    index: "04",
    name: "Accessories",
    tag: "Audio · Wear · Power",
    img: accessories,
    className: "col-span-12 md:col-span-4 md:col-start-9 row-start-4 aspect-[4/5] md:-mt-24 z-10",
    parallax: 35,
  },
];

export function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax via CSS variable per item
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sec = sectionRef.current;
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        sec.style.setProperty("--p", String(progress));
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
      className="relative px-6 py-32 md:px-12 md:py-48"
    >
      {/* heading row */}
      <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            /02 — Showcase
          </div>
          <h2 className="font-display mt-4 text-[clamp(2.5rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.03em]">
            In-store
            <br />
            <span className="text-stroke-gold">collection.</span>
          </h2>
        </div>
        <p className="max-w-sm font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
          Four categories. One showroom floor. Hover to isolate — visit to experience.
        </p>
      </div>

      <div className="dim-group relative grid grid-cols-12 gap-4 md:gap-8">
        {items.map((it) => (
          <article
            key={it.index}
            className={`dim-target group relative overflow-hidden bg-card ${it.className}`}
            style={{
              transform: `translateY(calc(var(--p, 0) * ${it.parallax}px))`,
            }}
          >
            <RippleImage src={it.img} alt={it.name} />
            {/* gradient & content */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80">
              /{it.index}
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  {it.tag}
                </div>
                <h3 className="font-display mt-2 text-[clamp(1.6rem,3vw,3rem)] font-black uppercase leading-none tracking-tight">
                  {it.name}
                </h3>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70 transition-colors group-hover:text-gold">
                In-store →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
