
import { Hero } from "@/components/ui/animated-hero";
import { Features } from "@/components/ui/features-section";
import { Pricing } from "@/components/ui/pricing-cards";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
};

export default Index;
