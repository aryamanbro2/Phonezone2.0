import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type PhoneBrand = "iphone" | "samsung";

interface ModelContextValue {
  brand: PhoneBrand;
  setBrand: (brand: PhoneBrand) => void;
  /** Path to the currently active 3D model */
  modelPath: string;
}

const ModelContext = createContext<ModelContextValue | null>(null);

const MODEL_PATHS: Record<PhoneBrand, string> = {
  iphone: "/models/iphone.glb",
  samsung: "/models/samsung.glb",
};

/**
 * Theme tokens that shift when the brand changes.
 * iPhone → cool titanium-blue · Samsung → deep galaxy-violet
 */
const THEME_TOKENS: Record<PhoneBrand, Record<string, string>> = {
  iphone: {
    "--molten": "oklch(0.62 0.19 255)",   // Apple-ish blue
    "--gold": "oklch(0.62 0.19 255)",
    "--ring": "oklch(0.62 0.19 255)",
    "--accent": "oklch(0.62 0.19 255)",
    "--primary": "oklch(0.62 0.19 255)",
    "--volt": "oklch(0.82 0.18 195)",       // teal glow
  },
  samsung: {
    "--molten": "oklch(0.58 0.24 290)",    // Galaxy violet
    "--gold": "oklch(0.58 0.24 290)",
    "--ring": "oklch(0.58 0.24 290)",
    "--accent": "oklch(0.58 0.24 290)",
    "--primary": "oklch(0.58 0.24 290)",
    "--volt": "oklch(0.78 0.22 270)",       // lighter violet glow
  },
};

export function ModelProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState<PhoneBrand>("iphone");

  // Apply theme tokens to :root whenever brand changes
  useEffect(() => {
    const root = document.documentElement;
    const tokens = THEME_TOKENS[brand];
    for (const [prop, value] of Object.entries(tokens)) {
      root.style.setProperty(prop, value);
    }
    // Add a data attribute for any CSS-only selectors
    root.dataset.brand = brand;

    return () => {
      // cleanup on unmount — reset to defaults
      for (const prop of Object.keys(tokens)) {
        root.style.removeProperty(prop);
      }
      delete root.dataset.brand;
    };
  }, [brand]);

  return (
    <ModelContext.Provider value={{ brand, setBrand, modelPath: MODEL_PATHS[brand] }}>
      {children}
    </ModelContext.Provider>
  );
}

export function useModel() {
  const ctx = useContext(ModelContext);
  if (!ctx) throw new Error("useModel must be used within <ModelProvider>");
  return ctx;
}
