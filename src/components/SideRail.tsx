import { Home, LayoutGrid, MapPin, Sparkles } from "lucide-react";

const links = [
  { id: "home", label: "Home", Icon: Home },
  { id: "showcase", label: "Showcase", Icon: LayoutGrid },
  { id: "doctrine", label: "Why Us", Icon: Sparkles },
  { id: "contact", label: "Contact", Icon: MapPin },
];

export function SideRail() {
  return (
    <>
      {/* ── Side Rail (Visible on all screens) ── */}
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-[max(60px,8vw)] flex-col items-center justify-between border-r hairline bg-background/80 py-6 backdrop-blur-md">
        {/* top: status dot */}
        <div className="flex flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_12px_var(--volt)]" />
          <span className="hidden sm:inline">Live</span>
        </div>

        {/* rotated logo */}
        <a
          href="#home"
          className="font-display select-none whitespace-nowrap text-[clamp(14px,1.4vw,22px)] font-black uppercase tracking-[0.25em]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          phonezone<span className="text-molten">2.0</span>
        </a>

        {/* nav icons */}
        <nav className="flex flex-col items-center gap-4 sm:gap-6">
          {links.map(({ id, label, Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              className="group relative flex h-10 w-10 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-molten"
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-sm bg-card px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 transition-opacity group-hover:opacity-100">
                {label}
              </span>
            </a>
          ))}
        </nav>

        {/* bottom: index */}
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <div className="rotate-180" style={{ writingMode: "vertical-rl" }}>
            EST · 2024
          </div>
        </div>
      </aside>
    </>
  );
}
