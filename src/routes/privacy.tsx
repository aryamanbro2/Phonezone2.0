import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="px-6 py-20 md:px-24 max-w-4xl">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-molten hover:underline mb-12 inline-block">
          ← Back to Phone Zone 2.0
        </Link>
        <h1 className="font-display text-4xl md:text-6xl font-black uppercase mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-foreground font-bold italic">Last Updated: May 2026</p>
          
          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">1. Data Collection</h2>
            <p>
              This website does not currently provide account registration or checkout. If you contact the store by phone or through an external messaging service, information you choose to share may be used to respond to your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">2. WhatsApp Communication</h2>
            <p>
              If you choose to contact the store through an external messaging service such as WhatsApp, that service's own terms and privacy policy also apply.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">3. Data Protection</h2>
            <p>
              We take reasonable steps to protect information handled through our website and business contact channels. Hosting and service providers may process technical or communication data as necessary to operate their services.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">4. Cookies & Analytics</h2>
            <p>
              Our hosting and website infrastructure may process technical information needed to operate and secure the website. If analytics or additional cookies are introduced, this policy will be updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold uppercase tracking-wider mb-4">5. Contact Us</h2>
            <p>
              For any privacy-related queries, please contact the store at <span className="text-molten">+91 99994 44494</span>.
            </p>
          </section>
        </div>
      </div>
  );
}
