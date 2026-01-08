import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Simulator", path: "/product" },
  { name: "Workshops", path: "/workshops" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-lg" 
        : "bg-gradient-to-b from-primary/20 to-transparent backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16 lg:h-18" : "h-18 lg:h-20"
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`rounded-xl bg-gradient-to-br from-accent via-primary to-accent/80 flex items-center justify-center shadow-lg group-hover:shadow-accent/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 ${
              scrolled ? "w-10 h-10" : "w-11 h-11"
            }`}>
              <span className="text-white font-display font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold leading-tight transition-all duration-300 ${
                scrolled 
                  ? "text-foreground text-base" 
                  : "text-white text-lg"
              }`}>Train ICSI</span>
              <span className={`text-[10px] leading-tight transition-colors ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}>by Shreeji Medtech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  location.pathname === item.path
                    ? scrolled 
                      ? "bg-accent text-white shadow-md" 
                      : "bg-white/20 text-white"
                    : scrolled 
                      ? "text-muted-foreground hover:text-foreground hover:bg-secondary/80" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant={scrolled ? "ghost" : "ghost"} 
              size="default" 
              asChild
              className={scrolled ? "" : "text-white hover:bg-white/10 hover:text-white"}
            >
              <Link to="/workshops">View Workshops</Link>
            </Button>
            <Button 
              variant="accent" 
              size="default" 
              asChild 
              className="gap-2 shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300"
            >
              <Link to="/contact">
                <Sparkles className="w-4 h-4" />
                Request Demo
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled 
                ? "bg-secondary hover:bg-secondary/80 text-foreground" 
                : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`} />
              <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-[64px] transition-all duration-500 ease-out ${
        mobileMenuOpen 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="mx-4 mt-2 bg-card/98 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
          {/* Decorative gradient line */}
          <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent/60" />
          
          <nav className="p-4 flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-accent/15 to-accent/5 text-accent border border-accent/20"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary/50"
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: mobileMenuOpen ? "fade-in 0.3s ease-out forwards" : "none"
                }}
              >
                <span>{item.name}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  location.pathname === item.path ? "text-accent" : "text-muted-foreground"
                }`} />
              </Link>
            ))}
          </nav>
          
          <div className="p-4 pt-2 flex flex-col gap-3 border-t border-border/50">
            <Button variant="outline" size="lg" asChild className="w-full justify-center">
              <Link to="/workshops" onClick={() => setMobileMenuOpen(false)}>
                View Workshops
              </Link>
            </Button>
            <Button variant="accent" size="lg" asChild className="w-full justify-center gap-2 shadow-lg shadow-accent/20">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Sparkles className="w-4 h-4" />
                Request Demo
              </Link>
            </Button>
          </div>
          
          {/* Bottom decorative element */}
          <div className="px-6 py-3 bg-secondary/30 flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-muted-foreground">India's First ICSI Simulation System</span>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 -z-10 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};