import { createFileRoute } from "@tanstack/react-router";
import { SideRail } from "@/components/SideRail";
import { Hero } from "@/components/Hero";
import { HorizontalShowcase } from "@/components/HorizontalShowcase";
import { BentoSpecs } from "@/components/BentoSpecs";
import { ContactFooter } from "@/components/ContactFooter";
import { CustomCursor } from "@/components/CustomCursor";
import { ModelProvider } from "@/components/ModelContext";
import { RevealObserver } from "@/components/RevealObserver";
import { AboutSection } from "@/components/AboutSection";
import { BusinessInfo } from "@/components/BusinessInfo";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phone Zone 2.0 | Mobile Phones, Accessories & Repairs in Dwarka" },
      {
        name: "description",
        content:
          "Phone Zone 2.0 is a local mobile phone store in Sector 7, Dwarka, New Delhi. Shop smartphones and accessories, or visit the store for mobile repair enquiries and device support.",
      },
      { property: "og:title", content: "Phone Zone 2.0 — Premium Tech Showroom Dwarka" },
      {
        property: "og:description",
        content: "Mobile phones, accessories and repair services from Phone Zone 2.0 in Dwarka, New Delhi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <HorizontalShowcase />
      <BentoSpecs />
      <AboutSection />
      <BusinessInfo/>
      <ContactFooter />
    </>
  );
}
