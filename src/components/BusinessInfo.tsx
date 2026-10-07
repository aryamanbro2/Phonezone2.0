export function BusinessInfo() {
  return (
    <section
      id="business"
      className="border-t hairline bg-background px-4 py-16 sm:px-6 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-molten sm:text-[10px] sm:tracking-[0.3em]">
          /06 — Business Information
        </div>

        <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-7xl">
          Phone Zone 2.0
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Business Type
            </div>
            <p className="mt-2 text-lg">
              Multi-brand mobile & electronics retailer
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </div>
            <p className="mt-2 text-lg">
              Smartphones · Accessories · Audio · Mobile Repairs
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Store Address
            </div>
            <p className="mt-2 text-lg leading-relaxed">
              Plot No. 149, Ramphal Chowk Road,
              <br />
              Beside SBI Bank, Palam Extension,
              <br />
              Sector 7, Dwarka,
              <br />
              New Delhi — 110075
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </div>
            <p className="mt-2 text-lg">
              <a
                href="tel:+919999444494"
                className="hover:text-molten"
              >
                +91 99994 44494
              </a>
              <br />
              <span>Open daily · 11:00 AM – 9:30 PM</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}