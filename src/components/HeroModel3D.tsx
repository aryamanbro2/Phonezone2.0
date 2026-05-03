import { Suspense, useRef, useEffect, useState, ReactNode } from "react";
import { useModel } from "./ModelContext";

/* ------------------------------------------------------------------ */
/*  Client-only wrapper — prevents SSR of Three.js components          */
/* ------------------------------------------------------------------ */
function ClientOnly({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}

/* ------------------------------------------------------------------ */
/*  Stylish placeholder — phone silhouette + glow                      */
/* ------------------------------------------------------------------ */
function HeroPlaceholder({ label }: { label?: string }) {
  return (
    <div className="hero-3d-canvas flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated phone silhouette */}
        <div className="hero-phone-silhouette">
          <div className="hero-phone-screen" />
          <div className="hero-phone-notch" />
        </div>
      </div>
    </div>
  );
}

import { lazy } from "react";

const HeroThreeSceneComponent = lazy(() => 
  import("./HeroThreeScene").then(mod => ({ default: mod.HeroThreeScene }))
);

const LazyThreeScene = ({ brand }: { brand: string }) => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      if (!canvas.getContext("webgl2") && !canvas.getContext("webgl")) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return <HeroPlaceholder label="3D preview unavailable" />;
  }

  return (
    <Suspense fallback={<HeroPlaceholder label="Loading 3D engine…" />}>
      <HeroThreeSceneComponent brand={brand} />
    </Suspense>
  );
};

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */
export function HeroModel3D() {
  const { brand } = useModel();

  return (
    <ClientOnly fallback={<HeroPlaceholder />}>
      <LazyThreeScene brand={brand} />
    </ClientOnly>
  );
}
