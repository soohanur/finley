import Signup from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Signup 01 Finley";
import Footer from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Footer 01 Finsyc";

export const metadata = {
  title: "Get Started — Finley",
  description: "Create your Finley account. Free 14-day trial, no credit card required.",
};

export default function GetStartedPage() {
  return (
    <main className="w-full flex flex-col">
      <Signup />
      <Footer />
    </main>
  );
}
