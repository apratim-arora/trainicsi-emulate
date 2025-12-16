import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Calendar, Clock, MapPin, Users, GraduationCap, Building2, Award, ChevronRight } from "lucide-react";

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
  const [selectedWorkshop, setSelectedWorkshop] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Workshops & Webinars</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Hands-On ICSI Simulation Training
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join our expert-led workshops to master micromanipulation techniques using state-of-the-art 
              simulation technology. Perfect for embryology students, faculty, and practicing professionals.
            </p>
            <div className="flex items-center justify-center gap-2 text-accent">
              <span className="font-display text-4xl font-bold">₹3,000</span>
              <span className="text-primary-foreground/70">per participant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Format */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Workshop Format
            </h2>
            <p className="text-lg text-muted-foreground">
              Our structured approach ensures maximum skill development in every session.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { time: "1 hour", title: "Theory & Fundamentals", description: "Core concepts and procedure protocols" },
              { time: "1.5 hours", title: "Expert Demonstration", description: "Live walkthrough on the simulator" },
              { time: "3 hours", title: "Hands-On Practice", description: "Supervised individual practice sessions" },
              { time: "30 min", title: "Assessment & Feedback", description: "Performance review and certification" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-6 shadow-card border border-border h-full">
                  <div className="text-accent font-semibold text-sm mb-2">{item.time}</div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 text-accent z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">What You'll Learn</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "ICSI procedure fundamentals and best practices",
                "Optimal oocyte positioning and handling",
                "Sperm selection techniques",
                "Injection angle and depth optimization",
                "Common errors and how to avoid them",
                "Performance self-assessment methods",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Schedule</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Upcoming Workshops
            </h2>
            <p className="text-lg text-muted-foreground">
              Select a workshop to register. Limited seats available for on-campus sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {workshops.map((workshop) => (
              <div 
                key={workshop.id}
                onClick={() => setSelectedWorkshop(workshop.id)}
                className={`bg-card rounded-xl p-6 shadow-card border-2 cursor-pointer transition-all duration-300 ${
                  selectedWorkshop === workshop.id 
                    ? "border-accent shadow-elevated" 
                    : "border-border hover:border-accent/50"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      workshop.type === "Virtual" 
                        ? "bg-accent/10 text-accent" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {workshop.type}
                    </span>
                  </div>
                  {workshop.seatsLeft !== null && (
                    <span className="text-sm text-muted-foreground">
                      {workshop.seatsLeft} / {workshop.totalSeats} seats
                    </span>
                  )}
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-4">{workshop.date}</h3>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{workshop.location}</span>
                  </div>
                </div>

                {selectedWorkshop === workshop.id && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="cta" className="w-full" asChild>
                      <Link to="/contact">
                        Register Now - ₹3,000
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Don't see a workshop near you?</p>
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
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Benefits for Everyone
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "For Students",
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
                className="bg-card rounded-xl p-8 shadow-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Certificate of Completion
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                All workshop participants who successfully complete the training program receive 
                an official Train ICSI Certificate of Completion, validating their simulation training experience.
              </p>
              <ul className="space-y-3">
                {[
                  "Recognized by partner institutions",
                  "Includes performance score",
                  "Digital and physical certificate",
                  "Verifiable credentials",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
              <div className="aspect-[4/3] bg-secondary/50 rounded-xl flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-2xl">T</span>
                  </div>
                  <h4 className="font-display font-bold text-lg mb-1">Certificate of Completion</h4>
                  <p className="text-sm text-muted-foreground mb-4">ICSI Simulation Workshop</p>
                  <div className="text-xs text-muted-foreground">
                    Train ICSI by Shreeji Medtech
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-hero rounded-2xl p-8 lg:p-16 text-primary-foreground text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Training?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Join hundreds of embryology professionals who have enhanced their skills through 
              our simulation-based workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Register for Workshop
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">
                  Request Custom Workshop
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;
