import { createFileRoute } from "@tanstack/react-router";
import { SideRail } from "@/components/SideRail";
import { Hero } from "@/components/Hero";
import { HorizontalShowcase } from "@/components/HorizontalShowcase";
import { BentoSpecs } from "@/components/BentoSpecs";
import { ContactFooter } from "@/components/ContactFooter";
import { CustomCursor } from "@/components/CustomCursor";
import { ModelProvider } from "@/components/ModelContext";
import { RevealObserver } from "@/components/RevealObserver";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "phonezone2.0 — Premium Tech Showroom" },
      {
        name: "description",
        content:
          "phonezone2.0 — premium in-store showroom for smartphones, laptops, smart TVs and accessories. Visit us — touch the future.",
      },
      { property: "og:title", content: "phonezone2.0 — Premium Tech Showroom" },
      {
        property: "og:description",
        content: "Editorial showroom for premium smartphones, laptops, smart TVs and accessories.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ModelProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <RevealObserver />
        <CustomCursor />
        <SideRail />
        <main className="pb-16 md:pb-0 md:pl-[max(72px,8vw)]">
          <Hero />
          <HorizontalShowcase />
          <BentoSpecs />
          <ContactFooter />
        </main>
      </div>
    </ModelProvider>
  );
}
