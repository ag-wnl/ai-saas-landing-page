
import { Hero } from "@/components/ui/animated-hero";
import { Features } from "@/components/ui/features-section";
import { Pricing } from "@/components/ui/pricing-cards";
import { LandingFooter } from "@/components/ui/landing-footer";
import { Header1 } from "@/components/ui/header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header1 />
      <div className="pt-20"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <Features />
        <Pricing />
        <LandingFooter />
      </div>
    </div>
  );
};

export default Index;
