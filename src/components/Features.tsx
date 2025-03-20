
import { ActivitySquare, Brain, HeartPulse, Shield, Smartphone, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Diagnostics",
      description:
        "Advanced machine learning algorithms analyze health data to provide accurate diagnostic insights and early detection of potential health issues.",
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "Real-time Monitoring",
      description:
        "Continuous health tracking with instant alerts for critical changes in vital signs, sleep patterns, and other health metrics.",
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
    },
    {
      title: "Portable Solution",
      description:
        "Compact, wearable device seamlessly integrates with your smartphone app for health monitoring anytime, anywhere.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
    },
    {
      title: "Data Security",
      description:
        "End-to-end encryption and strict compliance with healthcare privacy regulations to ensure your medical data remains secure.",
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
    {
      title: "Holistic Approach",
      description:
        "Comprehensive health assessment including mental, physical, and nutritional analysis for complete wellness management.",
      icon: <ActivitySquare className="h-10 w-10 text-primary" />,
    },
    {
      title: "Energy Efficient",
      description:
        "Low-power operation with extended battery life ensures uninterrupted health monitoring throughout your day.",
      icon: <Zap className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section id="features" className="section-padding bg-secondary/50 dark:bg-accent/50">
      <div className="container-custom">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Advanced Features for <span className="text-gradient">Complete Health</span> Management
          </h2>
          <p className="text-foreground/70">
            Our cutting-edge AI technology combines with portable hardware to deliver
            a comprehensive healthcare solution that adapts to your needs.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={Math.min(index, 4)}>
              <div className="feature-card h-full">
                <div className="mb-5 inline-flex items-center justify-center rounded-lg p-2 bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 text-center">
          <div className="glass glass-dark rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="heading-md mb-6">How Zennvita Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-bold mb-2">Monitor</h4>
                <p className="text-foreground/70 text-sm">
                  Continuous tracking of vital health metrics and biomarkers
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-bold mb-2">Analyze</h4>
                <p className="text-foreground/70 text-sm">
                  AI processes health data to identify patterns and potential concerns
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-bold mb-2">Recommend</h4>
                <p className="text-foreground/70 text-sm">
                  Personalized health insights and actionable recommendations
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
