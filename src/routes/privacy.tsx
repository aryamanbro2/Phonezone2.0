import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-molten hover:underline mb-12 inline-block">
          ← Back to Showroom
        </Link>
        <h1 className="font-display text-4xl md:text-6xl font-black uppercase mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-foreground font-bold italic">Last Updated: May 2026</p>
          
          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">1. Data Collection</h2>
            <p>
              At Phone Zone 2.0, we collect minimal personal data required to provide our premium services. This includes contact information (Name, Phone Number, Email) when you visit our showroom or contact us via digital channels.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">2. WhatsApp Communication</h2>
            <p>
              By opting into our WhatsApp services, you agree to receive order updates, service alerts, and promotional offers. We use the official WhatsApp Business API to ensure secure and reliable communication. You may opt-out at any time by replying "STOP".
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">3. Data Protection</h2>
            <p>
              Your data is stored securely and is never sold to third parties. We use industry-standard encryption to protect your information from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">4. Cookies & Analytics</h2>
            <p>
              Our website uses essential cookies to provide a smooth editorial experience. We may use anonymized analytics to improve our showroom's digital presentation.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">5. Contact Us</h2>
            <p>
              For any privacy-related queries, please contact us at <span className="text-molten">info@phonezone.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
