import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart, Users, TrendingUp, Globe, Award, CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Pioneering the Future of Embryology Training
            </h1>
            <p className="text-lg text-muted-foreground">
              Train ICSI is a product of Shreeji Medtech, dedicated to advancing clinical embryology 
              education through innovative simulation technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to world-class embryology training by providing institutions 
                and professionals with high-fidelity simulation tools that bridge the gap between 
                theoretical knowledge and clinical proficiency.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To establish the global standard for embryology skill development and assessment, 
                ensuring that every embryologist has the opportunity to master their craft through 
                safe, realistic, and accessible simulation-based training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 lg:py-28 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              The Training Gap We're Closing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10">
              <h3 className="font-display text-xl font-semibold mb-4">The Challenge</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Embryology is one of the few medical specialties where trainees often perform their 
                first real procedures on actual patient samples. The scarcity of practice opportunities, 
                combined with ethical constraints around using real gametes, creates a significant 
                gap between education and clinical readiness.
              </p>
            </div>

            <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-8 border border-accent/20">
              <h3 className="font-display text-xl font-semibold mb-4">Our Solution</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Train ICSI provides a realistic, risk-free environment where trainees can practice 
                micromanipulation techniques thousands of times before touching a real sample. 
                Our simulation technology ensures every embryologist enters the clinic prepared, 
                confident, and competent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in simulation fidelity, training outcomes, and institutional partnerships.",
              },
              {
                icon: Heart,
                title: "Patient Safety",
                description: "Every improvement in embryologist training ultimately serves the patients and families seeking fertility treatment.",
              },
              {
                icon: Globe,
                title: "Accessibility",
                description: "We believe world-class training should be available to embryology programs everywhere, regardless of resources.",
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 shadow-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap / Future */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">The Road Ahead</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Building the Embryology Training Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground">
                Our current focus is on simulation and workshops, but we're building toward a 
                comprehensive training infrastructure for the field.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-8">
                {[
                  {
                    phase: "Current",
                    title: "High-Fidelity Simulation",
                    description: "World-class ICSI and embryo biopsy simulation hardware and software for institutions.",
                    active: true,
                  },
                  {
                    phase: "In Progress",
                    title: "Expanded Procedures",
                    description: "Adding assisted hatching, vitrification, and other embryology procedures to our simulation platform.",
                    active: true,
                  },
                  {
                    phase: "Future",
                    title: "Certification Standards",
                    description: "Working toward establishing simulation-based certification standards for embryology competency.",
                    active: false,
                  },
                  {
                    phase: "Vision",
                    title: "Global Training Infrastructure",
                    description: "A comprehensive ecosystem connecting training institutions, certification bodies, and employers worldwide.",
                    active: false,
                  },
                ].map((item, index) => (
                  <div key={index} className="relative md:pl-20">
                    <div className={`absolute left-5 w-6 h-6 rounded-full border-4 border-background hidden md:flex items-center justify-center ${
                      item.active ? "bg-accent" : "bg-muted"
                    }`}>
                      {item.active && <div className="w-2 h-2 rounded-full bg-accent-foreground" />}
                    </div>
                    <div className={`p-6 rounded-xl ${item.active ? "bg-card shadow-card border border-border" : "bg-secondary/50"}`}>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        item.active ? "text-accent" : "text-muted-foreground"
                      }`}>
                        {item.phase}
                      </span>
                      <h3 className="font-display text-xl font-semibold mt-2 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context (Investor-friendly) */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why This Matters
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                <TrendingUp className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">Growing Market</h3>
                <p className="text-muted-foreground mb-4">
                  The global IVF services market is expanding rapidly, driven by increasing infertility 
                  rates and improving accessibility. This growth creates unprecedented demand for 
                  skilled embryologists.
                </p>
                <ul className="space-y-2">
                  {[
                    "Global IVF market growing at 8%+ annually",
                    "Critical shortage of trained embryologists",
                    "Increasing regulatory focus on quality",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                <Award className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">Our Advantage</h3>
                <p className="text-muted-foreground mb-4">
                  Train ICSI is uniquely positioned to address the training gap with purpose-built 
                  simulation technology designed specifically for embryology education.
                </p>
                <ul className="space-y-2">
                  {[
                    "First-mover in Indian embryology simulation",
                    "Deep domain expertise in clinical embryology",
                    "Established institutional relationships",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-16 shadow-elevated border border-border text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Whether you're an institution looking to enhance your training program or an 
              organization interested in collaboration, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
