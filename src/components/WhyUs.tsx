const points = [
  {
    n: "01",
    title: "Authentic Products",
    body: "Every device sourced through verified channels. Sealed, warrantied, traceable.",
  },
  {
    n: "02",
    title: "Expert Staff",
    body: "Trained specialists. Real recommendations. No upsell theatre — just clarity.",
  },
  {
    n: "03",
    title: "Premium Support",
    body: "In-store setup, transfers, and lifetime guidance for everything you buy from us.",
  },
];

export function WhyUs() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            /03 — Doctrine
          </div>
          <h2 className="font-display mt-4 text-[clamp(2.5rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.03em]">
            Why
            <br />
            choose us.
          </h2>
        </div>
        <div className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:block">
          Three axioms
        </div>
      </div>

      {/* hairline divider grid */}
      <div className="border-t" style={{ borderColor: "var(--gold)" }}>
        {points.map((p) => (
          <div
            key={p.n}
            className="grid grid-cols-12 gap-6 border-b py-10 md:py-16"
            style={{ borderColor: "var(--gold)" }}
          >
            <div className="col-span-2 font-mono text-xs uppercase tracking-[0.3em] text-gold md:col-span-1">
              /{p.n}
            </div>
            <h3 className="font-display col-span-10 text-[clamp(1.8rem,5vw,4rem)] font-black uppercase leading-none tracking-tight md:col-span-6">
              {p.title}
            </h3>
            <p className="col-start-3 col-end-13 mt-4 max-w-md font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-muted-foreground md:col-start-8 md:mt-0">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
