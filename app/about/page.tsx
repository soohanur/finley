import PageHero from "@/components/PageHero";
import AboutStory from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/About Story 01 Finley";
import MetricsWithLogo from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Metrics with logo 01 Finsyc";
import Team from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Team 01 Finley";
import CTA from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/CTA 01 Finsyc";
import Footer from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Footer 01 Finsyc";

export const metadata = {
  title: "About | Finley",
  description: "Meet the team rebuilding money management from the ground up. Our story, values, and people.",
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col">
      <PageHero
        badge="About Finley"
        title={
          <>
            We&rsquo;re rebuilding money{" "}
            <span className="font-playfair italic font-semibold text-black opacity-50">
              management
            </span>{" "}
            from scratch
          </>
        }
        subtitle="Started in a kitchen in 2022. Now trusted by 18,000+ people and finance teams across 35 countries."
      />
      <AboutStory />
      <MetricsWithLogo />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
