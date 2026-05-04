import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsConditions,
});

function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-molten hover:underline mb-12 inline-block">
          ← Back to Showroom
        </Link>
        <h1 className="font-display text-4xl md:text-6xl font-black uppercase mb-8">Terms of Service</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-foreground font-bold italic">Last Updated: May 2026</p>
          
          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">1. Business Operations</h2>
            <p>
              Phone Zone 2.0 operates as a premium tech showroom and service center in Dwarka, New Delhi. All products sold are 100% authentic and sourced from official brand channels.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">2. Warranty & Service</h2>
            <p>
              Products carry official brand warranties unless otherwise stated. Our in-house repair services are performed by certified technicians using premium components.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">3. Refund & Replacement</h2>
            <p>
              Replacement or refund requests are subject to physical inspection and must be accompanied by the original tax invoice. Standard brand policies apply for all hardware replacements.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">4. Digital Conduct</h2>
            <p>
              Users are prohibited from misusing our digital channels or automated WhatsApp services. We reserve the right to terminate access for any user violating these terms.
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
    </div>
  );
}
