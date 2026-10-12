import { Store, Shield, Wrench, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="flex min-h-screen snap-start snap-always flex-col bg-background px-4 py-16 sm:px-6 sm:py-20 md:px-12">
      <div className="reveal mb-10 md:mb-16">
        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-molten sm:text-[10px] sm:tracking-[0.3em]">
          /04 — About the store
        </div>
        <h2
          className="font-display mt-2 font-black uppercase leading-[0.85] tracking-[-0.04em] text-fill-anim sm:mt-3"
          style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}
        >
          Serving customers<br />in Dwarka.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        <div className="reveal glass flex h-full flex-col p-6 sm:p-8">
          <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
            <Store className="h-6 w-6 shrink-0 text-molten" /> Welcome to Phone Zone 2.0
          </h3>
          <div className="flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Phone Zone 2.0 is a local mobile phone retailer in Sector 7, Dwarka, New Delhi. Customers can contact the store to ask about smartphones, accessories and available services.
            </p>
            <p>
              Product and brand availability, pricing and service options can change. Please confirm current details directly with the store before visiting or making a purchase.
            </p>
          </div>
        </div>

        <div className="reveal glass flex h-full flex-col border-molten/30 bg-molten/5 p-6 sm:p-8">
          <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold uppercase tracking-tight text-foreground sm:text-2xl">
            <Shield className="h-6 w-6 shrink-0 text-molten" /> What we help with
          </h3>
          <div className="flex-1">
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The store can answer enquiries about device selection, accessories, setup and mobile repairs. Service eligibility, parts, pricing and turnaround depend on the device and requested service.
            </p>
            <ul className="grid grid-cols-1 gap-3 text-sm font-medium text-foreground sm:grid-cols-2 sm:gap-4">
              <li>✓ Smartphone enquiries</li>
              <li>✓ Mobile accessories</li>
              <li>✓ Audio products</li>
              <li>✓ Device setup</li>
              <li>✓ Repair enquiries</li>
              <li>✓ Product information</li>
            </ul>
          </div>
        </div>

        <div className="reveal glass flex h-full flex-col p-6 sm:p-8">
          <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
            <Wrench className="h-6 w-6 shrink-0 text-molten" /> Products & services
          </h3>
          <ul className="flex flex-1 flex-col justify-center gap-3 text-sm text-muted-foreground sm:text-base">
            <li className="flex items-start gap-2"><span className="mt-1 text-molten">●</span> Smartphones from multiple brands and price ranges</li>
            <li className="flex items-start gap-2"><span className="mt-1 text-molten">●</span> Mobile accessories such as chargers, covers and earbuds</li>
            <li className="flex items-start gap-2"><span className="mt-1 text-molten">●</span> Audio products and related electronics</li>
            <li className="flex items-start gap-2"><span className="mt-1 text-molten">●</span> Mobile repair enquiries; confirm device eligibility with the store</li>
            <li className="flex items-start gap-2"><span className="mt-1 text-molten">●</span> Data transfer and phone setup enquiries</li>
          </ul>
        </div>

        <div className="reveal glass flex h-full flex-col p-6 sm:p-8">
          <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
            <Award className="h-6 w-6 shrink-0 text-molten" /> Our approach
          </h3>
          <div className="flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              We aim to make it easier for local customers to ask questions about mobile devices, compare available options and understand service details before making a decision.
            </p>
            <p>
              For current stock, prices, warranty coverage or repair timelines, contact the store directly so the information can be confirmed for your specific product or request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
