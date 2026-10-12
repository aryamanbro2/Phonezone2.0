import { Home, LayoutGrid, MapPin, Sparkles } from "lucide-react";
import { useModel } from "./ModelContext";
import logo from "@/assets/logo.png";

const links = [
  { id: "home", label: "Home", Icon: Home },
  { id: "showcase", label: "Products", Icon: LayoutGrid },
  { id: "doctrine", label: "About", Icon: Sparkles },
  { id: "contact", label: "Contact", Icon: MapPin },
];

export function SideRail() {
  const { brand } = useModel();

  return (
    <>
      {/* Mobile wordmark and logo */}
      <div className="fixed left-0 top-0 z-50 flex h-16 items-center gap-2 px-2 md:hidden">
        <a
          href="/#home"
          className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/5 bg-card/60 p-0.5 shadow-xl transition-transform active:scale-95"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 blur-md transition-colors duration-700"
            style={{ background: "var(--molten)" }}
          />
          <img
            src={logo}
            alt=""
            className="relative z-10 h-full w-full object-contain brightness-110"
          />
        </a>
        <a href="/#home" className="text-sm font-bold tracking-tight text-foreground">
          Phone Zone 2.0
        </a>
      </div>

      {/* Bottom navigation on mobile; side rail on desktop */}
      <aside className="fixed bottom-0 left-0 z-40 flex h-16 w-full flex-row items-center justify-around border-t hairline bg-background/90 px-4 backdrop-blur-md md:top-0 md:h-screen md:w-[max(60px,8vw)] md:flex-col md:justify-between md:border-r md:border-t-0 md:py-6">
        <div className="hidden flex-col items-center gap-2 md:mb-8 md:flex">
          <a href="/#home" className="relative flex flex-col items-center gap-1">
            <img
              src={logo}
              alt=""
              className="h-12 w-auto object-contain brightness-110 contrast-125 sm:h-16"
            />
            <span className="text-center text-[10px] font-bold leading-tight tracking-tight text-foreground">
              Phone Zone 2.0
            </span>
          </a>
        </div>

        <nav aria-label="Main navigation" className="flex flex-row items-center gap-6 md:flex-col md:gap-4 sm:md:gap-6">
          {links.map(({ id, label, Icon }) => (
            <a
              key={id}
              href={`/#${id}`}
              aria-label={label}
              className="group relative flex h-10 w-10 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-molten"
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              <span className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-card px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 transition-opacity group-hover:opacity-100 md:bottom-auto md:left-12 md:translate-x-0">
                {label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:block">
          <div className="rotate-180" style={{ writingMode: "vertical-rl" }}>
            Dwarka · New Delhi
          </div>
        </div>
      </aside>
    </>
  );
}
