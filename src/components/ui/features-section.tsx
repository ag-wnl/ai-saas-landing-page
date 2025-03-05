
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Features() {
  return (
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Features</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Everything you need
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              We've built a platform that makes business operations simpler and more efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4 items-start text-left">
                <div className="p-3 rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-left">{feature.title}</h3>
                <p className="text-muted-foreground text-left">{feature.description}</p>
                <ul className="space-y-2 mt-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    title: "Streamlined Workflow",
    description: "Optimize your business processes with our intuitive tools.",
    benefits: [
      "Automated task management",
      "Smart notifications",
      "Progress tracking",
    ],
  },
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    title: "Data Insights",
    description: "Make informed decisions with comprehensive analytics.",
    benefits: [
      "Real-time reporting",
      "Customizable dashboards",
      "Trend analysis",
    ],
  },
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    title: "Secure Platform",
    description: "Your data is protected with enterprise-grade security.",
    benefits: [
      "End-to-end encryption",
      "Regular security audits",
      "Compliant with regulations",
    ],
  },
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    title: "Customer Management",
    description: "Build stronger relationships with your customers.",
    benefits: [
      "Contact organization",
      "Communication history",
      "Follow-up reminders",
    ],
  },
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    title: "Financial Tools",
    description: "Keep track of your finances without the hassle.",
    benefits: [
      "Invoice generation",
      "Expense tracking",
      "Financial forecasting",
    ],
  },
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    title: "Integration Support",
    description: "Connect with the tools you already use.",
    benefits: [
      "API access",
      "Third-party app connections",
      "Custom webhooks",
    ],
  },
];

export { Features };
