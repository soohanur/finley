import Header from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Header 01 Finsyc";
import MetricsWithLogo from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Metrics with logo 01 Finsyc";
import Feature from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Feature 01 Finsyc";
import HowItWorks from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/How it Works 01 Finsyc";
import WhyChooseUs from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Why Choose us 01 Finsyc";
import Testimonials from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Testimonials 01 Finsyc";
import Pricing from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Pricing 01 Finsyc";
import FAQ from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/FAQ 01 Finsyc";
import CTA from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/CTA 01 Finsyc";
import Footer from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Footer 01 Finsyc";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Header />
      <MetricsWithLogo />
      <Feature />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
