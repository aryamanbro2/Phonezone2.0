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
      { title: "Phone Zone 2.0 — Premium Tech Showroom Dwarka" },
      {
        name: "description",
        content:
          "Phone Zone 2.0 is Dwarka's premier tech showroom. Discover a curated collection of smartphones, accessories, and expert repair services. Visit us for an authentic tech experience.",
      },
      { property: "og:title", content: "Phone Zone 2.0 — Premium Tech Showroom Dwarka" },
      {
        property: "og:description",
        content: "Editorial showroom for premium smartphones, accessories, and expert repairs in Dwarka, New Delhi.",
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
