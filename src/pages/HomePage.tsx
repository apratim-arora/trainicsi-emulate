import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2, AlertTriangle, Target, Users, GraduationCap, Building2, Calendar, ChevronRight, Award, TrendingUp, Shield } from "lucide-react";
import simulatorHero from "@/assets/simulator-hero.jpg";
import softwareInterface from "@/assets/software-interface.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-hero flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary-foreground/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
                <span className="text-sm font-medium">India's First ICSI Simulation System</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Advanced ICSI & Embryo Biopsy
                <span className="text-accent"> Simulation</span> for Embryology Training
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
                Master micromanipulation skills with realistic, risk-free practice. 
                Our institutional-grade simulation system bridges the gap between theory and clinical proficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request College Workshop
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">
                    <Play className="w-5 h-5" />
                    Request Simulator Demo
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 mt-10 pt-10 border-t border-primary-foreground/20">
                <div>
                  <div className="font-display text-3xl font-bold">500+</div>
                  <div className="text-sm text-primary-foreground/70">Trainees Certified</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold">25+</div>
                  <div className="text-sm text-primary-foreground/70">Partner Institutions</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold">98%</div>
                  <div className="text-sm text-primary-foreground/70">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={simulatorHero} 
                  alt="Train ICSI Micromanipulation Simulator System" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 rounded-xl overflow-hidden shadow-elevated border-4 border-card hidden lg:block">
                <img 
                  src={softwareInterface} 
                  alt="ICSI Simulation Software Interface" 
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-card">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="font-medium text-sm">Risk-Free Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">The Challenge</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              The Critical Gap in Embryology Training
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional training methods face significant limitations that compromise the quality of embryology education worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Limited Hands-On Practice",
                description: "Students rarely get sufficient opportunity to practice micromanipulation techniques before working with real samples.",
              },
              {
                icon: Shield,
                title: "Consent & Sample Scarcity",
                description: "Strict ethical guidelines and patient consent requirements severely limit access to real oocytes and embryos for training.",
              },
              {
                icon: TrendingUp,
                title: "High Stakes Learning",
                description: "Mistakes during training on real samples are irreversible, creating pressure that hinders effective skill development.",
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Solution</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                High-Fidelity ICSI & Embryo Biopsy Simulation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Train ICSI combines precision hardware that replicates real micromanipulator controls with advanced software that simulates the complete microscope environment.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Realistic Hardware",
                    description: "Micromanipulator controls that look and feel like real equipment for authentic hand-eye coordination training.",
                  },
                  {
                    title: "Immersive Software",
                    description: "Simulates actual microscope environment for ICSI, embryo biopsy, and assisted hatching procedures.",
                  },
                  {
                    title: "Performance Analytics",
                    description: "Step-by-step analysis, error detection, scoring, and long-term progress tracking to identify improvement areas.",
                  },
                  {
                    title: "Unlimited Practice",
                    description: "Repeat procedures endlessly without sample constraints or ethical concerns.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/product">
                    Explore the Simulator
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={softwareInterface} 
                  alt="Train ICSI Software Interface with Analytics" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elevated border border-border max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Feedback</h4>
                    <p className="text-sm text-muted-foreground">Instant analysis of technique and recommendations for improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Workshops</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              How Our Workshops Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Structured, hands-on training sessions designed to maximize skill development for embryology students and professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { step: "01", title: "Theory Session", description: "Foundational concepts and procedure protocols" },
              { step: "02", title: "Live Demonstration", description: "Expert-led walkthrough on the simulator" },
              { step: "03", title: "Hands-On Practice", description: "Supervised practice with real-time feedback" },
              { step: "04", title: "Assessment", description: "Performance evaluation and certification" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-6 shadow-card border border-border h-full">
                  <span className="font-display text-4xl font-bold text-accent/20">{item.step}</span>
                  <h3 className="font-display text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 text-accent z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elevated border border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Upcoming Workshops</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Register for Our Next Session</h3>
                <p className="text-muted-foreground mb-6">
                  Join our comprehensive ICSI simulation workshops conducted at partner institutions or online. 
                  Perfect for embryology students, faculty, and practicing professionals.
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-bold text-accent">₹3,000</span>
                  <span className="text-muted-foreground">per participant</span>
                </div>
                <Button variant="cta" size="lg" asChild>
                  <Link to="/workshops">
                    View Workshop Schedule
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { date: "Jan 15, 2025", location: "Mumbai Medical College", seats: "12 seats left" },
                  { date: "Jan 28, 2025", location: "Online Webinar", seats: "Unlimited" },
                  { date: "Feb 10, 2025", location: "Delhi IVF Academy", seats: "8 seats left" },
                ].map((workshop, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                    <div>
                      <div className="font-semibold">{workshop.date}</div>
                      <div className="text-sm text-muted-foreground">{workshop.location}</div>
                    </div>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                      {workshop.seats}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Who It's For</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Built for Institutions & Professionals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Embryology Colleges",
                description: "Enhance your curriculum with cutting-edge simulation technology. Give students hands-on experience before clinical exposure.",
                benefits: ["Curriculum integration", "Student skill assessment", "Faculty training support"],
              },
              {
                icon: Building2,
                title: "IVF Clinics & Chains",
                description: "Standardize training across locations. Ensure all embryologists meet consistent proficiency standards.",
                benefits: ["Staff onboarding", "Skill standardization", "Quality assurance"],
              },
              {
                icon: Users,
                title: "Training Institutions",
                description: "Offer comprehensive embryology training programs with state-of-the-art simulation facilities.",
                benefits: ["Differentiated offering", "Higher completion rates", "Industry recognition"],
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 lg:py-28 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Outcomes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Measurable Training Outcomes
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Our simulation-based approach delivers quantifiable improvements in trainee competency and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "3x", label: "Faster Skill Acquisition", description: "Compared to observation-only training" },
              { metric: "85%", label: "Error Reduction", description: "In first real procedure attempts" },
              { metric: "40+", label: "Practice Hours", description: "Average before certification" },
              { metric: "100%", label: "Safe Training", description: "Zero risk to real samples" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-5xl lg:text-6xl font-bold text-accent mb-2">{item.metric}</div>
                <div className="font-semibold mb-1">{item.label}</div>
                <div className="text-sm text-primary-foreground/60">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Vision</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Building the Future of Embryology Training
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We envision a world where every embryologist has access to world-class training, 
              regardless of geography or sample availability. Train ICSI is pioneering the 
              standard for embryology skill development and assessment globally.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Learn About Our Mission
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-16 shadow-elevated border border-border text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Training Program?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Whether you're looking to host a workshop at your institution or explore simulator 
              acquisition, we're here to help you elevate embryology education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Request College Workshop
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">
                  Request Simulator Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
