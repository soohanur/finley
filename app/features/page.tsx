import PageHero from "@/components/PageHero";
import Feature from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Feature 01 Finsyc";
import MetricsWithLogo from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Metrics with logo 01 Finsyc";
import HowItWorks from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/How it Works 01 Finsyc";
import WhyChooseUs from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Why Choose us 01 Finsyc";
import CTA from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/CTA 01 Finsyc";
import Footer from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Footer 01 Finsyc";

export const metadata = {
  title: "Features | Finley",
  description: "Explore every Finley feature: smart expense tracking, predictive analytics, security by design, instant transfers.",
};

export default function FeaturesPage() {
  return (
    <main className="w-full flex flex-col">
      <PageHero
        badge="Powerful Features"
        title={
          <>
            Every feature you need to{" "}
            <span className="font-playfair italic font-semibold text-black opacity-50">
              master
            </span>{" "}
            your money
          </>
        }
        subtitle="From AI-driven categorization to predictive forecasting, Finley gives you a financial command center built for the modern world."
      />
      <Feature />
      <MetricsWithLogo />
      <HowItWorks />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  );
}
