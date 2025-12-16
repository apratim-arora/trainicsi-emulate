import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Monitor, Cpu, BarChart3, RefreshCw, Target, Shield, Zap, Award, ChevronRight } from "lucide-react";
import simulatorHero from "@/assets/simulator-hero.jpg";
import softwareInterface from "@/assets/software-interface.jpg";

const ProductPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Train ICSI Simulator</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                High-Fidelity ICSI & Embryo Biopsy Simulation System
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The most realistic embryology training simulator available. Combining precision hardware 
                with advanced simulation software to deliver unparalleled hands-on learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    Request Pricing
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Book Demo
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={simulatorHero} 
                  alt="Train ICSI Simulation System" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              What is the Train ICSI Simulator?
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete training ecosystem that replicates the real-world ICSI workstation environment, 
              enabling trainees to develop proficiency without the risks and limitations of traditional methods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hardware */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Precision Hardware</h3>
              <p className="text-muted-foreground mb-6">
                Our micromanipulator hardware is engineered to replicate the exact look, feel, and response 
                of professional ICSI equipment used in clinical settings.
              </p>
              <ul className="space-y-3">
                {[
                  "Authentic joystick controls for micromanipulation",
                  "Realistic tactile feedback and resistance",
                  "Ergonomic design matching clinical equipment",
                  "Durable construction for institutional use",
                  "Easy setup and maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl overflow-hidden">
                <img 
                  src={simulatorHero} 
                  alt="Train ICSI Hardware" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Software */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Advanced Simulation Software</h3>
              <p className="text-muted-foreground mb-6">
                Our software recreates the complete microscope environment with stunning accuracy, 
                providing an immersive training experience.
              </p>
              <ul className="space-y-3">
                {[
                  "Realistic microscope view simulation",
                  "Multiple procedure scenarios (ICSI, biopsy, assisted hatching)",
                  "Variable difficulty levels for progressive learning",
                  "Real-time visual and haptic feedback",
                  "Comprehensive procedure library",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl overflow-hidden">
                <img 
                  src={softwareInterface} 
                  alt="Train ICSI Software Interface" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Scenarios */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Procedures</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Training Scenarios
            </h2>
            <p className="text-lg text-muted-foreground">
              Master critical embryology procedures through realistic simulation scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "ICSI Procedure",
                status: "Available",
                description: "Complete intracytoplasmic sperm injection training from oocyte positioning to injection technique.",
                features: ["Oocyte holding", "Sperm selection", "Injection technique", "Post-injection assessment"],
              },
              {
                title: "Embryo Biopsy",
                status: "Available",
                description: "Trophectoderm biopsy simulation for preimplantation genetic testing preparation.",
                features: ["Blastocyst positioning", "Laser activation", "Cell extraction", "Quality assessment"],
              },
              {
                title: "Assisted Hatching",
                status: "Coming Soon",
                description: "Zona pellucida manipulation techniques to assist embryo implantation.",
                features: ["Zona assessment", "Laser precision", "Opening creation", "Safety protocols"],
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 shadow-card border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    item.status === "Available" 
                      ? "bg-accent/10 text-accent" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={softwareInterface} 
                  alt="Performance Analytics Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Analytics</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Performance Analytics
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our advanced analytics engine provides detailed insights into trainee performance, 
                enabling targeted improvement and objective assessment.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: BarChart3,
                    title: "Step-by-Step Analysis",
                    description: "Every movement is tracked and analyzed against optimal technique parameters.",
                  },
                  {
                    icon: Target,
                    title: "Error Detection",
                    description: "Automatic identification of critical errors with corrective guidance.",
                  },
                  {
                    icon: Award,
                    title: "Scoring & Assessment",
                    description: "Objective scoring system for consistent trainee evaluation.",
                  },
                  {
                    icon: RefreshCw,
                    title: "Progress Tracking",
                    description: "Long-term analysis showing improvement trends and areas needing focus.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Simulation Section */}
      <section className="py-20 lg:py-28 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Why Simulation is Essential
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Traditional embryology training faces fundamental challenges that simulation uniquely addresses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10">
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-sm">✗</span>
                Traditional Training Limitations
              </h3>
              <ul className="space-y-4">
                {[
                  "Limited access to real samples for practice",
                  "Ethical constraints and consent requirements",
                  "High cost of failed procedures",
                  "Pressure and anxiety affecting learning",
                  "Inconsistent training quality",
                  "No objective performance metrics",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-primary-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-8 border border-accent/20">
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">✓</span>
                Simulation-Based Training
              </h3>
              <ul className="space-y-4">
                {[
                  "Unlimited practice opportunities",
                  "Zero ethical concerns or consent issues",
                  "Risk-free environment for learning",
                  "Reduced anxiety, improved retention",
                  "Standardized, repeatable training",
                  "Objective scoring and analytics",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Advantages</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              The Train ICSI Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Risk-Free Learning",
                description: "Practice unlimited times without any risk to real samples or patients. Build confidence before clinical exposure.",
              },
              {
                icon: Zap,
                title: "Accelerated Competency",
                description: "Reach proficiency 3x faster than traditional methods through focused, repetitive practice with instant feedback.",
              },
              {
                icon: Award,
                title: "Objective Assessment",
                description: "Standardized scoring enables fair, consistent evaluation across trainees and institutions.",
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 shadow-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-16 shadow-elevated border border-border text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              See the Simulator in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Schedule a personalized demo to experience the Train ICSI simulator firsthand. 
              Our team will walk you through all features and answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Request Pricing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">
                  Book Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
