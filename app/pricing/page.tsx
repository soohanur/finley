import PageHero from "@/components/PageHero";
import Pricing from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Pricing 01 Finsyc";
import FAQ from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/FAQ 01 Finsyc";
import Testimonials from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Testimonials 01 Finsyc";
import CTA from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/CTA 01 Finsyc";
import Footer from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Footer 01 Finsyc";

export const metadata = {
  title: "Pricing — Finley",
  description: "Simple, transparent pricing. Plans for individuals, teams, and growing businesses.",
};

export default function PricingPage() {
  return (
    <main className="w-full flex flex-col">
      <PageHero
        badge="Simple Pricing"
        title={
          <>
            Pricing that{" "}
            <span className="font-playfair italic font-semibold text-black opacity-50">
              scales
            </span>{" "}
            with you
          </>
        }
        subtitle="Start free, upgrade only when you outgrow it. No hidden fees, no annual lock-in, cancel anytime."
      />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
