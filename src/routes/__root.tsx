import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SideRail } from "@/components/SideRail";
import { ModelProvider } from "@/components/ModelContext";
import { RevealObserver } from "@/components/RevealObserver";
import { CustomCursor } from "@/components/CustomCursor";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Phone Zone 2.0 | Mobile Phones, Accessories & Repairs in Dwarka" },
      { name: "description", content: "Phone Zone 2.0 is a mobile phone store, accessories retailer and mobile repair shop in Sector 7, Dwarka, New Delhi." },
      { name: "robots", content: "index, follow" },
      
      { name: "author", content: "Phone Zone 2.0" },
      { property: "og:title", content: "Phone Zone 2.0 | Mobile Phones, Accessories & Repairs" },
      { property: "og:description", content: "Visit Phone Zone 2.0 in Sector 7, Dwarka for smartphones, mobile accessories and mobile repair services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CellPhoneStore",
          name: "Phone Zone 2.0",
          url: "https://phonezone20.vercel.app/",
          telephone: "+91 99994 44494",
          description: "Mobile phone store, accessories retailer and mobile repair shop in Sector 7, Dwarka, New Delhi.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No. 149, Ramphal Chowk Road, Beside SBI Bank, Palam Extension, Sector 7, Dwarka",
            addressLocality: "New Delhi",
            postalCode: "110075",
            addressCountry: "IN"
          },
          openingHours: "Mo-Su 11:00-21:30",
          areaServed: "Dwarka, New Delhi"
        })
      }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@100..800&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ModelProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <RevealObserver />
        <CustomCursor />
        <SideRail />
        <main className="pb-16 md:pb-0 md:pl-[max(72px,8vw)]">
          <Outlet />
        </main>
      </div>
    </ModelProvider>
  );
}
