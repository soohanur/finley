import PageHero from "@/components/PageHero";
import BlogGrid from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Blog Grid 01 Finley";
import CTA from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/CTA 01 Finsyc";
import Footer from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Footer 01 Finsyc";

export const metadata = {
  title: "Blog | Finley",
  description: "Money insights, product news, engineering deep-dives, and honest stories from the Finley team.",
};

export default function BlogsPage() {
  return (
    <main className="w-full flex flex-col">
      <PageHero
        badge="Finley Blog"
        title={
          <>
            Ideas, stories, and{" "}
            <span className="font-playfair italic font-semibold text-black opacity-50">
              answers
            </span>{" "}
            about money
          </>
        }
        subtitle="Long-form thinking from the people building Finley, product changes, engineering tradeoffs, and money tips that actually move the needle."
      />
      <BlogGrid />
      <CTA />
      <Footer />
    </main>
  );
}
