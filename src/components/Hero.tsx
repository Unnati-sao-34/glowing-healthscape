
import { ArrowRight, Brain, Shield, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container-custom relative">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-light/20 dark:bg-violet-dark/20 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <Zap className="w-4 h-4 mr-2" />
              <span>AI-powered Healthcare Platform</span>
            </div>
            <h1 className="heading-xl">
              <span className="text-gradient">AI-powered Holistic</span> Healthcare Solution
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl">
              Experience the future of healthcare with Zennvita's portable AI-driven
              platform. Comprehensive health monitoring, personalized insights, and
              seamless integration with your wellness journey.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#packages" className="btn-primary">
                Explore Packages <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#features" className="btn-secondary">
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 max-w-md">
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">99%</div>
                <div className="text-sm text-foreground/60">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">24/7</div>
                <div className="text-sm text-foreground/60">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">100K+</div>
                <div className="text-sm text-foreground/60">Users</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative" delay={1}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main image with animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  <div className="absolute inset-0 bg-violet-gradient rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-background rounded-full glass"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="w-20 h-20 text-primary animate-float" />
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '30s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 glass glass-dark p-3 rounded-full shadow-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '25s', animationDelay: '-5s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 glass glass-dark p-3 rounded-full shadow-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '20s', animationDelay: '-10s' }}>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 glass glass-dark p-3 rounded-full shadow-lg">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '35s', animationDelay: '-15s' }}>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 glass glass-dark p-3 rounded-full shadow-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Trusted by section */}
        <ScrollReveal className="mt-20 text-center" delay={2}>
          <p className="text-sm uppercase tracking-wider text-foreground/60 mb-6">Trusted by healthcare providers worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-24 bg-foreground/5 rounded-md flex items-center justify-center">
                <div className="font-medium text-foreground/40">Partner {i}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
