import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2, AlertTriangle, Target, Users, GraduationCap, Building2, Calendar, ChevronRight, Award, TrendingUp, Shield, Sparkles, Star, Zap, UserCheck, Handshake } from "lucide-react";
import simulatorHero from "@/assets/simulator-hero.jpg";
import softwareInterface from "@/assets/software-interface.jpg";
const HomePage = () => {
  return <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[900px] min-h-[700px] bg-hero flex items-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-highlight/10 rounded-full blur-3xl animate-pulse-soft" style={{
          animationDelay: "1s"
        }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl animate-spin-slow" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>

        {/* Hero image as background for tablet/mobile */}
        <div 
          className="absolute inset-0 lg:hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${simulatorHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 lg:mb-8 border border-white/20 animate-fade-in">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">India's First ICSI Simulation System</span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6 animate-fade-in" style={{
              animationDelay: "0.1s"
            }}>
                Advanced ICSI & Embryo Biopsy
                <span className="block text-accent mt-2">Simulation Training</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 lg:mb-10 leading-relaxed max-w-xl animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                Master micromanipulation skills with realistic, risk-free practice. 
                Our institutional-grade simulation system bridges the gap between theory and clinical proficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 animate-fade-in" style={{
              animationDelay: "0.3s"
            }}>
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

              <div className="flex flex-wrap items-center gap-6 lg:gap-10 mt-8 lg:mt-12 pt-6 lg:pt-10 border-t border-white/10 animate-fade-in" style={{
              animationDelay: "0.4s"
            }}>
                {[{
                value: "500+",
                label: "Trainees Certified"
              }, {
                value: "25+",
                label: "Partner Institutions"
              }, {
                value: "98%",
                label: "Satisfaction Rate"
              }].map((stat, index) => <div key={index}>
                    <div className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-white/60">{stat.label}</div>
                  </div>)}
              </div>
            </div>

            {/* Desktop image - hidden on tablet/mobile */}
            <div className="relative animate-fade-in hidden lg:block" style={{
            animationDelay: "0.3s"
          }}>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img src={simulatorHero} alt="Train ICSI Micromanipulation Simulator System" className="w-full h-auto" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-elevated border border-border animate-bounce-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-foreground block">Risk-Free Training</span>
                    <span className="text-xs text-muted-foreground">Zero sample waste</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 lg:py-32 bg-gradient-subtle relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-destructive font-semibold text-sm uppercase tracking-wider mb-4">
              <AlertTriangle className="w-4 h-4" />
              The Challenge
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              The Critical Gap in <span className="text-destructive">Embryology Training</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional training methods face significant limitations that compromise the quality of embryology education worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: AlertTriangle,
            title: "Limited Hands-On Practice",
            description: "Students rarely get sufficient opportunity to practice micromanipulation techniques before working with real samples."
          }, {
            icon: Shield,
            title: "Consent & Sample Scarcity",
            description: "Strict ethical guidelines and patient consent requirements severely limit access to real oocytes and embryos for training."
          }, {
            icon: TrendingUp,
            title: "High Stakes Learning",
            description: "Mistakes during training on real samples are irreversible, creating pressure that hinders effective skill development."
          }].map((item, index) => <div key={index} className="bg-card rounded-2xl p-8 shadow-card border border-border hover-lift group">
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-destructive group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                Our Solution
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                High-Fidelity <span className="text-gradient">ICSI & Embryo Biopsy</span> Simulation
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Train ICSI combines precision hardware that replicates real micromanipulator controls with advanced software that simulates the complete microscope environment.
              </p>

              <div className="space-y-6">
                {[{
                title: "Realistic Hardware",
                description: "Micromanipulator controls that look and feel like real equipment for authentic hand-eye coordination training."
              }, {
                title: "Immersive Software",
                description: "Simulates actual microscope environment for ICSI, embryo biopsy, and assisted hatching procedures."
              }, {
                title: "Performance Analytics",
                description: "Step-by-step analysis, error detection, scoring, and long-term progress tracking to identify improvement areas."
              }, {
                title: "Unlimited Practice",
                description: "Repeat procedures endlessly without sample constraints or ethical concerns."
              }].map((item, index) => <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>)}
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
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-border">
                <img src={softwareInterface} alt="Train ICSI Software Interface with Analytics" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-elevated border border-border max-w-xs animate-float">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Real-Time Feedback</h4>
                    <p className="text-sm text-muted-foreground">Instant analysis of technique and recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-24 lg:py-32 bg-gradient-subtle relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <Calendar className="w-4 h-4" />
              Workshops
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              How Our Workshops Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Structured, hands-on training sessions designed to maximize skill development for embryology students and professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[{
            step: "01",
            title: "Theory Session",
            description: "Foundational concepts and procedure protocols",
            icon: "📚"
          }, {
            step: "02",
            title: "Live Demonstration",
            description: "Expert-led walkthrough on the simulator",
            icon: "👨‍🏫"
          }, {
            step: "03",
            title: "Hands-On Practice",
            description: "Supervised practice with real-time feedback",
            icon: "🔬"
          }, {
            step: "04",
            title: "Assessment",
            description: "Performance evaluation and certification",
            icon: "🎓"
          }].map((item, index) => <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border h-full hover-lift group">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <span className="font-display text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">{item.step}</span>
                  <h3 className="font-display text-lg font-bold mt-2 mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 text-accent z-10" />}
              </div>)}
          </div>

          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elevated border border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Upcoming Workshops</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">Register for Our Next Session</h3>
                <p className="text-muted-foreground mb-8">
                  Join our comprehensive ICSI simulation workshops conducted at partner institutions or online. 
                  Perfect for embryology students, faculty, and practicing professionals.
                </p>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="font-display text-5xl font-bold text-accent">₹3,000</span>
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
                {[{
                date: "Jan 15, 2025",
                location: "Mumbai Medical College",
                seats: "12 seats left",
                hot: true
              }, {
                date: "Jan 28, 2025",
                location: "Online Webinar",
                seats: "Unlimited",
                hot: false
              }, {
                date: "Feb 10, 2025",
                location: "Delhi IVF Academy",
                seats: "8 seats left",
                hot: true
              }].map((workshop, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-secondary/50 border border-border hover:bg-secondary transition-colors group">
                    <div>
                      <div className="font-semibold text-foreground">{workshop.date}</div>
                      <div className="text-sm text-muted-foreground">{workshop.location}</div>
                    </div>
                    <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${workshop.hot ? "bg-destructive/10 text-destructive" : "bg-accent/10 text-accent"}`}>
                      {workshop.hot && "🔥 "}{workshop.seats}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <Target className="w-4 h-4" />
              Who It's For
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Built for <span className="text-gradient">Institutions & Professionals</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: GraduationCap,
            title: "Embryology Colleges",
            description: "Enhance your curriculum with cutting-edge simulation technology. Give students hands-on experience before clinical exposure.",
            benefits: ["Curriculum integration", "Student skill assessment", "Faculty training support"],
            color: "accent"
          }, {
            icon: Building2,
            title: "IVF Clinics & Chains",
            description: "Standardize training across locations. Ensure all embryologists meet consistent proficiency standards.",
            benefits: ["Staff onboarding", "Skill standardization", "Quality assurance"],
            color: "primary"
          }, {
            icon: Users,
            title: "Training Institutions",
            description: "Offer comprehensive embryology training programs with state-of-the-art simulation facilities.",
            benefits: ["Differentiated offering", "Higher completion rates", "Industry recognition"],
            color: "highlight"
          }].map((item, index) => <div key={index} className="bg-card rounded-2xl p-8 shadow-card border border-border hover-lift group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${item.color === "accent" ? "bg-accent/10 group-hover:bg-accent group-hover:shadow-glow" : item.color === "highlight" ? "bg-highlight/10 group-hover:bg-highlight group-hover:shadow-glow-gold" : "bg-primary/10 group-hover:bg-primary"}`}>
                  <item.icon className={`w-8 h-8 transition-colors ${item.color === "accent" ? "text-accent group-hover:text-white" : item.color === "highlight" ? "text-highlight group-hover:text-white" : "text-primary group-hover:text-white"}`} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, i) => <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="text-foreground">{benefit}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 lg:py-32 bg-hero text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-pulse-soft" style={{
          animationDelay: "1s"
        }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <Star className="w-4 h-4" />
              Outcomes
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Measurable Training Outcomes
            </h2>
            <p className="text-lg text-white/70">
              Our simulation-based approach delivers quantifiable improvements in trainee competency and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[{
            metric: "3x",
            label: "Faster Skill Acquisition",
            description: "Compared to observation-only training"
          }, {
            metric: "85%",
            label: "Error Reduction",
            description: "In first real procedure attempts"
          }, {
            metric: "40+",
            label: "Practice Hours",
            description: "Average before certification"
          }, {
            metric: "100%",
            label: "Safe Training",
            description: "Zero risk to real samples"
          }].map((item, index) => <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="font-display text-5xl lg:text-6xl font-bold text-accent mb-3">{item.metric}</div>
                <div className="font-semibold mb-1 text-white">{item.label}</div>
                <div className="text-sm text-white/60">{item.description}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Clinical Validation Partners Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <UserCheck className="w-4 h-4" />
              Clinical Validation
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Clinical <span className="text-gradient">Validation Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert embryologists and clinicians who guided our product development to ensure clinical accuracy and real-world applicability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {[{
            name: "Dr. Priya Sharma",
            title: "Senior Embryologist",
            institution: "Mumbai Fertility Center",
            experience: "15+ years",
            specialty: "ICSI Specialist",
            quote: "A revolutionary tool for training the next generation of embryologists."
          }, {
            name: "Dr. Rajesh Kumar",
            title: "Clinical Director",
            institution: "Delhi IVF Institute",
            experience: "20+ years",
            specialty: "IVF & Genetics",
            quote: "The simulation accuracy is remarkable and clinically relevant."
          }, {
            name: "Dr. Anita Patel",
            title: "Lead Embryologist",
            institution: "Bangalore Reproductive Sciences",
            experience: "12+ years",
            specialty: "Embryo Biopsy",
            quote: "Transforms how we prepare students for real procedures."
          }, {
            name: "Dr. Vikram Singh",
            title: "IVF Specialist",
            institution: "Chennai Fertility Hospital",
            experience: "18+ years",
            specialty: "Micromanipulation",
            quote: "Essential for any institution serious about embryology training."
          }].map((partner, index) => <div key={index} className="group relative bg-card rounded-3xl overflow-hidden shadow-elevated border border-border hover:shadow-2xl hover:border-accent/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row">
                  {/* Large Image/Avatar Area */}
                  <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto bg-gradient-to-br from-primary via-primary/80 to-accent overflow-hidden">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    
                    {/* Avatar initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 group-hover:scale-110 group-hover:border-accent transition-all duration-500 shadow-2xl">
                          <span className="font-display text-5xl md:text-6xl font-bold text-white">
                            {partner.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    
                    {/* Experience badge */}
                    <div className="absolute bottom-4 left-4 right-4 md:right-auto">
                      <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-primary px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                        <Award className="w-4 h-4 text-accent" />
                        {partner.experience} Experience
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {partner.specialty}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-accent font-semibold text-lg">{partner.title}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                      <Building2 className="w-4 h-4" />
                      <span>{partner.institution}</span>
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="relative pl-5 border-l-4 border-accent/50 italic text-muted-foreground group-hover:border-accent transition-colors">
                      "{partner.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Academic Facilitators Section */}
      <section className="py-24 lg:py-32 bg-hero relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-highlight/10 rounded-full blur-3xl animate-pulse-soft" style={{
          animationDelay: "1s"
        }} />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <Handshake className="w-4 h-4" />
              Collaborations
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Academic <span className="text-accent">Facilitators</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Prestigious institutions and organizations that have collaborated with us throughout our journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            name: "Mumbai Medical College",
            shortName: "MMC",
            type: "Medical University",
            established: "Est. 1845"
          }, {
            name: "Delhi IVF Academy",
            shortName: "DIA",
            type: "Research Institute",
            established: "Est. 1998"
          }, {
            name: "Bangalore Institute of Embryology",
            shortName: "BIE",
            type: "Specialty Institute",
            established: "Est. 2005"
          }, {
            name: "Chennai Fertility Research",
            shortName: "CFR",
            type: "Research Center",
            established: "Est. 2001"
          }, {
            name: "Hyderabad Reproductive Sciences",
            shortName: "HRS",
            type: "Medical Center",
            established: "Est. 2010"
          }, {
            name: "Pune Medical University",
            shortName: "PMU",
            type: "Medical University",
            established: "Est. 1950"
          }].map((institution, index) => <div key={index} className="group relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-bl-[100px] group-hover:bg-accent/30 transition-colors" />
                
                <div className="p-8 md:p-10">
                  {/* Large Logo Area */}
                  <div className="relative mb-8">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center border-2 border-white/20 group-hover:border-accent/50 group-hover:scale-105 transition-all duration-500 shadow-2xl">
                      <span className="font-display text-4xl md:text-5xl font-bold text-white group-hover:text-accent transition-colors">
                        {institution.shortName}
                      </span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-accent/30 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
                  </div>
                  
                  {/* Institution Info */}
                  <div className="space-y-3">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {institution.name}
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                        {institution.type}
                      </span>
                      <span className="text-sm text-accent">
                        {institution.established}
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-white/50 group-hover:text-accent/70 transition-colors">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">Partner Institution</span>
                  </div>
                </div>
              </div>)}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-white/80">
                Interested in becoming a partner institution?
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Our Vision
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Building the Future of <span className="text-gradient">Embryology Training</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
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
      <section className="py-24 lg:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-3xl p-8 lg:p-16 shadow-elevated border border-border text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-highlight/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Get Started Today</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
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
        </div>
      </section>
    </div>;
};
export default HomePage;