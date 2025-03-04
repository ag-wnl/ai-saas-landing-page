
import { Hero } from "@/components/ui/animated-hero";
import { Features } from "@/components/ui/features-section";
import { Pricing } from "@/components/ui/pricing-cards";
import { LandingFooter } from "@/components/ui/landing-footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Pricing />
      <LandingFooter />
    </div>
  );
};

export default Index;
