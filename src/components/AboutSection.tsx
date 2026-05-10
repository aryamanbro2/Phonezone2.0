import { Store, Shield, Wrench, Award } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="flex min-h-screen snap-start snap-always flex-col bg-background px-4 py-16 sm:px-6 sm:py-20 md:px-12">
            <div className="reveal mb-10 md:mb-16">
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-molten sm:text-[10px] sm:tracking-[0.3em]">
                    /04 — Legacy
                </div>
                <h2
                    className="font-display mt-2 font-black uppercase leading-[0.85] tracking-[-0.04em] text-fill-anim sm:mt-3"
                    style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}
                >
                    Over 20 years<br />of trust.
                </h2>
            </div>

            {/* Leveled Grid: Forces all items in a row to match the tallest item's height */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

                {/* Card 1 */}
                <div className="reveal glass flex h-full flex-col p-6 sm:p-8">
                    <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
                        <Store className="h-6 w-6 text-molten shrink-0" /> Welcome to Phone Zone 2.0
                    </h3>
                    <div className="flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        <p>
                            Dwarka’s trusted destination for smartphones, accessories, gadgets, and mobile solutions for over 20 years. From our journey in Sector 5 and Sector 12 Dwarka to now proudly serving customers at Ramphal Chowk, Sector 7, we have built our reputation on trust, genuine products, transparent pricing, and customer satisfaction.
                        </p>
                        <p>
                            Today, Phone Zone 2.0 is one of the biggest mobile showrooms in Dwarka, New Delhi. We are an authorized reseller of all major mobile and audio brands.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="reveal glass flex h-full flex-col p-6 sm:p-8 border-molten/30 bg-molten/5">
                    <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold uppercase tracking-tight text-foreground sm:text-2xl">
                        <Shield className="h-6 w-6 text-molten shrink-0" /> The Experience
                    </h3>
                    <div className="flex-1">
                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base mb-6">
                            At Phone Zone 2.0, we believe buying a phone is not just a purchase — it’s an experience.
                        </p>
                        <ul className="grid grid-cols-1 gap-3 text-sm font-medium text-foreground sm:grid-cols-2 sm:gap-4">
                            <li>✓ Genuine products</li>
                            <li>✓ Best exchange offers</li>
                            <li>✓ Easy EMI & Finance</li>
                            <li>✓ Expert guidance</li>
                            <li>✓ After-sales support</li>
                            <li>✓ Corporate bulk support</li>
                        </ul>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="reveal glass flex h-full flex-col p-6 sm:p-8">
                    <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
                        <Wrench className="h-6 w-6 text-molten shrink-0" /> Complete Solutions
                    </h3>
                    <ul className="flex-1 flex flex-col justify-center gap-3 text-sm text-muted-foreground sm:text-base">
                        <li className="flex items-start gap-2">
                            <span className="text-molten mt-1">●</span> Latest smartphones from all major brands
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-molten mt-1">●</span> Premium audio products and smart gadgets
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-molten mt-1">●</span> Mobile accessories (chargers, covers, earbuds)
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-molten mt-1">●</span> Professional repair services for all major brands
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-molten mt-1">●</span> Data transfer and phone setup assistance
                        </li>
                    </ul>
                </div>

                {/* Card 4 */}
                <div className="reveal glass flex h-full flex-col p-6 sm:p-8">
                    <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
                        <Award className="h-6 w-6 text-molten shrink-0" /> Founder's Vision
                    </h3>
                    <div className="flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        <p>
                            Founded by Sunny Kharbanda, Phone Zone 2.0 is built on more than 25 years of experience in the mobile and electronics industry. His vision has always been simple — to provide genuine products, honest guidance, competitive pricing, and long-term customer satisfaction.
                        </p>
                        <p>
                            Under his leadership, the store continues to evolve with the latest technology trends while maintaining the personal touch and customer-first approach that you value most.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}