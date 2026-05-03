import { useModel, type PhoneBrand } from "./ModelContext";
import { Apple, Smartphone } from "lucide-react";

const OPTIONS: { brand: PhoneBrand; label: string; Icon: typeof Apple }[] = [
  { brand: "iphone", label: "iPhone Lover", Icon: Apple },
  { brand: "samsung", label: "Samsung Lover", Icon: Smartphone },
];

export function ModelSwitcher() {
  const { brand, setBrand } = useModel();

  return (
    <div className="model-switcher" role="radiogroup" aria-label="Choose your brand">
      {/* animated sliding pill behind the active button */}
      <div
        className="model-switcher__indicator"
        style={{ transform: brand === "iphone" ? "translateX(0)" : "translateX(100%)" }}
      />

      {OPTIONS.map(({ brand: b, label, Icon }) => (
        <button
          key={b}
          role="radio"
          aria-checked={brand === b}
          onClick={() => setBrand(b)}
          className={`model-switcher__btn ${brand === b ? "model-switcher__btn--active" : ""}`}
        >
          <Icon className="h-4 w-4 shrink-0" strokeWidth={1.6} />
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">{b === "iphone" ? "iPhone" : "Samsung"}</span>
        </button>
      ))}
    </div>
  );
}
