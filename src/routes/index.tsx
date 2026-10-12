import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { HorizontalShowcase } from "@/components/HorizontalShowcase";
import { BentoSpecs } from "@/components/BentoSpecs";
import { ContactFooter } from "@/components/ContactFooter";
import { BusinessInfo } from "@/components/BusinessInfo";
import { AboutSection } from "@/components/AboutSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phone Zone 2.0 | Mobile Phones, Accessories & Repairs in Dwarka" },
      {
        name: "description",
        content:
          "Phone Zone 2.0 is a local mobile phone store in Sector 7, Dwarka, New Delhi. Ask about smartphones, accessories and mobile repair services.",
      },
      { property: "og:title", content: "Phone Zone 2.0 | Mobile Phones, Accessories & Repairs" },
      {
        property: "og:description",
        content: "Contact Phone Zone 2.0 in Sector 7, Dwarka, New Delhi for smartphone, accessory and repair enquiries.",
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
      <BusinessInfo />
      <ContactFooter />
    </>
  );
}
