import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsConditions,
});

function TermsConditions() {
  return (
    <div className="px-6 py-20 md:px-24 max-w-4xl">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-molten hover:underline mb-12 inline-block">
          ← Back to Phone Zone 2.0
        </Link>
        <h1 className="font-display text-4xl md:text-6xl font-black uppercase mb-8">Terms of Service</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-foreground font-bold italic">Last Updated: May 2026</p>
          
          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">1. Business Operations</h2>
            <p>
              Phone Zone 2.0 is a mobile phone store, accessories retailer and mobile repair shop in Sector 7, Dwarka, New Delhi. Product images and examples on this website are presentation content and are not a live inventory or price guarantee.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">2. Warranty & Service</h2>
            <p>
              Warranty coverage, service eligibility, parts, pricing and repair turnaround depend on the product and service. Current terms should be confirmed with the store before purchase or repair.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">3. Refund & Replacement</h2>
            <p>
              Returns, replacements and refunds, where applicable, are subject to the store's and/or relevant brand's current policy. Please confirm the applicable policy with the store before purchase.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">4. Digital Conduct</h2>
            <p>
              Users should not misuse the website, attempt unauthorized access, or interfere with its operation.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of India, specifically the jurisdiction of New Delhi.
            </p>
          </section>
        </div>
      </div>
  );
}
