import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Calendar, Clock, MapPin, Users, GraduationCap, Building2, Award, ChevronRight, Sparkles, Star, Zap, ClipboardList } from "lucide-react";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";

const workshops = [
  {
    id: 1,
    date: "January 15, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Mumbai Medical College",
    type: "On-Campus",
    seatsLeft: 12,
    totalSeats: 20,
  },
  {
    id: 2,
    date: "January 28, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Online Webinar",
    type: "Virtual",
    seatsLeft: null,
    totalSeats: null,
  },
  {
    id: 3,
    date: "February 10, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Delhi IVF Academy",
    type: "On-Campus",
    seatsLeft: 8,
    totalSeats: 15,
  },
  {
    id: 4,
    date: "February 22, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Bangalore Fertility Institute",
    type: "On-Campus",
    seatsLeft: 15,
    totalSeats: 18,
  },
];

const WorkshopsPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const registrationRef = useRef<HTMLDivElement>(null);

  const scrollToRegistration = () => {
    setShowRegistration(true);
    setTimeout(() => {
      registrationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-hero overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-highlight/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white/90">Learn from Industry Experts</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hands-On ICSI Simulation
              <span className="block text-accent mt-2">Training Workshops</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Master micromanipulation techniques using state-of-the-art simulation technology. 
              Perfect for embryology students, faculty, and professionals.
            </p>
            
            <div className="inline-flex items-baseline gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="font-display text-5xl font-bold text-white">₹3,000</span>
              <span className="text-white/60">per participant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Format */}
      <section className="py-20 lg:py-28 bg-gradient-subtle relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <Zap className="w-4 h-4" />
              Workshop Format
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Structured Learning for <span className="text-gradient">Maximum Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven methodology ensures every participant leaves with practical, applicable skills.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { time: "1 hour", title: "Theory & Fundamentals", description: "Core concepts and procedure protocols", icon: "📚" },
              { time: "1.5 hours", title: "Expert Demonstration", description: "Live walkthrough on the simulator", icon: "👨‍🏫" },
              { time: "3 hours", title: "Hands-On Practice", description: "Supervised individual practice sessions", icon: "🔬" },
              { time: "30 min", title: "Assessment & Feedback", description: "Performance review and certification", icon: "🎓" },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border h-full hover-lift">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <div className="inline-flex items-center gap-1 text-accent font-semibold text-sm mb-3 bg-accent/10 px-3 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 text-accent z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elevated border border-border">
            <h3 className="font-display text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Star className="w-6 h-6 text-highlight" />
              What You'll Learn
              <Star className="w-6 h-6 text-highlight" />
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "ICSI procedure fundamentals and best practices",
                "Optimal oocyte positioning and handling",
                "Sperm selection techniques",
                "Injection angle and depth optimization",
                "Common errors and how to avoid them",
                "Performance self-assessment methods",
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <Calendar className="w-4 h-4" />
              Schedule
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Upcoming Workshops
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse available workshops below and register to secure your seat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {workshops.map((workshop, index) => (
              <div 
                key={workshop.id}
                className="bg-card rounded-2xl p-6 shadow-card border-2 border-transparent hover:border-accent/30 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold ${
                      workshop.type === "Virtual" 
                        ? "bg-accent/10 text-accent" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {workshop.type === "Virtual" ? "🌐" : "🏫"} {workshop.type}
                    </span>
                  </div>
                  {workshop.seatsLeft !== null && (
                    <span className={`text-sm font-medium ${
                      workshop.seatsLeft < 10 ? "text-destructive" : "text-muted-foreground"
                    }`}>
                      {workshop.seatsLeft < 10 && "🔥 "}{workshop.seatsLeft} / {workshop.totalSeats} seats
                    </span>
                  )}
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">{workshop.date}</h3>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{workshop.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button variant="cta" size="lg" onClick={scrollToRegistration}>
              <ClipboardList className="w-5 h-5" />
              Register for a Workshop
            </Button>
            <p className="text-muted-foreground">Don't see a workshop near you?</p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Request Custom Workshop at Your Institution
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits by Role */}
      <section className="py-20 lg:py-28 bg-gradient-subtle relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Benefits for <span className="text-gradient">Everyone</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "For Students",
                color: "accent",
                benefits: [
                  "Hands-on practice before clinical rotation",
                  "Build confidence with risk-free training",
                  "Objective skill assessment",
                  "Certificate of completion",
                  "Stand out in job applications",
                ],
              },
              {
                icon: Users,
                title: "For Faculty",
                color: "primary",
                benefits: [
                  "Standardized teaching methodology",
                  "Objective student assessment tools",
                  "Reduced pressure during training",
                  "Curriculum enhancement options",
                  "Professional development credit",
                ],
              },
              {
                icon: Building2,
                title: "For Institutions",
                color: "highlight",
                benefits: [
                  "Differentiated training program",
                  "Improved student outcomes",
                  "Revenue from workshops",
                  "Industry recognition",
                  "Pathway to simulator acquisition",
                ],
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover-lift group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  item.color === "accent" ? "bg-accent/10 group-hover:bg-accent group-hover:shadow-glow" :
                  item.color === "highlight" ? "bg-highlight/10 group-hover:bg-highlight group-hover:shadow-glow-gold" :
                  "bg-primary/10 group-hover:bg-primary"
                }`}>
                  <item.icon className={`w-8 h-8 transition-colors ${
                    item.color === "accent" ? "text-accent group-hover:text-white" :
                    item.color === "highlight" ? "text-highlight group-hover:text-white" :
                    "text-primary group-hover:text-white"
                  }`} />
                </div>
                <h3 className="font-display text-xl font-bold mb-6 text-foreground">{item.title}</h3>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-highlight/20 to-highlight/5 flex items-center justify-center mb-6 shadow-glow-gold">
                <Award className="w-10 h-10 text-highlight" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Certificate of <span className="text-gradient-gold">Completion</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                All workshop participants who successfully complete the training program receive 
                an official Train ICSI Certificate of Completion, validating their simulation training experience.
              </p>
              <ul className="space-y-4">
                {[
                  "Recognized by partner institutions",
                  "Includes performance score",
                  "Digital and physical certificate",
                  "Verifiable credentials",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-highlight/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-highlight" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border">
              <div className="aspect-[4/3] bg-gradient-subtle rounded-2xl flex items-center justify-center border border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="text-center p-8 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-primary mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white font-display font-bold text-3xl">T</span>
                  </div>
                  <h4 className="font-display font-bold text-xl mb-1 text-foreground">Certificate of Completion</h4>
                  <p className="text-sm text-muted-foreground mb-4">ICSI Simulation Workshop</p>
                  <div className="w-24 h-0.5 bg-highlight mx-auto mb-4" />
                  <div className="text-xs text-muted-foreground">
                    Train ICSI by Shreeji Medtech
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      {showRegistration && (
        <section ref={registrationRef} className="py-20 lg:py-28 bg-gradient-subtle" id="register">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  <ClipboardList className="w-4 h-4" />
                  Registration
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Register for a Workshop
                </h2>
                <p className="text-lg text-muted-foreground">
                  Complete the form below to secure your seat
                </p>
              </div>
              <WorkshopRegistrationForm 
                workshops={workshops} 
                onClose={() => setShowRegistration(false)} 
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-hero rounded-3xl p-8 lg:p-16 text-white text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-highlight/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Start Your Journey Today</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Elevate Your Training?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Join hundreds of embryology professionals who have enhanced their skills through 
                our simulation-based workshops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={scrollToRegistration}>
                  Register for Workshop
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">
                    Request Custom Workshop
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;
