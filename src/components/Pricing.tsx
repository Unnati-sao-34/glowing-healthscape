
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Pricing = () => {
  const packages = [
    {
      name: "Basic",
      price: 99,
      interval: "month",
      description: "Essential health monitoring for individuals",
      features: [
        "AI Health Analysis",
        "Basic Vital Monitoring",
        "Mobile App Access",
        "Weekly Health Reports",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Intermediate",
      price: 199,
      interval: "month",
      description: "Advanced monitoring for health-conscious individuals",
      features: [
        "Everything in Basic",
        "Real-time Health Alerts",
        "Advanced Sleep Analysis",
        "Nutrition Tracking",
        "24/7 Chat Support",
        "Personalized Health Insights",
      ],
      popular: true,
    },
    {
      name: "Advanced",
      price: 299,
      interval: "month",
      description: "Comprehensive solution for maximum health oversight",
      features: [
        "Everything in Intermediate",
        "Premium Hardware Sensors",
        "Unlimited Data Storage",
        "Integration with Medical Records",
        "Priority 24/7 Support",
        "Quarterly Health Assessments",
        "Family Member Monitoring",
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="section-padding">
      <div className="container-custom">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Choose Your <span className="text-gradient">Health</span> Package
          </h2>
          <p className="text-foreground/70">
            Select the perfect plan for your healthcare needs with our flexible
            subscription options, scalable for individuals and organizations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <ScrollReveal key={index} delay={index}>
              <div className={`pricing-card h-full flex flex-col ${pkg.popular ? 'border-primary' : 'border-border'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-foreground/70 text-sm">{pkg.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end mb-1">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className="text-foreground/70 ml-1">/{pkg.interval}</span>
                  </div>
                  <p className="text-sm text-foreground/70">Billed monthly or annually</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-auto w-full flex justify-center ${
                    pkg.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 text-center max-w-3xl mx-auto">
          <div className="glass glass-dark rounded-2xl p-8">
            <h3 className="heading-md mb-4">Custom Enterprise Solutions</h3>
            <p className="text-foreground/70 mb-6">
              Need a tailored solution for your healthcare organization or business?
              We offer custom packages designed to meet specific requirements.
            </p>
            <a href="#contact" className="btn-primary">
              Contact for Custom Pricing
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
