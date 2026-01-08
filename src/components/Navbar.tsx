import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card ${
      scrolled 
        ? "shadow-card border-b border-border" 
        : "border-b border-border/50"
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-18 lg:h-20"
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`rounded-xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center shadow-soft group-hover:shadow-card transition-all duration-300 group-hover:-translate-y-0.5 ${
              scrolled ? "w-10 h-10" : "w-11 h-11"
            }`}>
              <span className="text-white font-display font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-foreground leading-tight text-base lg:text-lg">
                Train ICSI
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight">
                by Shreeji Medtech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 relative py-2 link-underline ${
                  location.pathname === item.path
                    ? "text-accent after:!w-full"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="default" 
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <Link to="/workshops">View Workshops</Link>
            </Button>
            <Button 
              variant="accent" 
              size="default" 
              asChild 
              className="gap-2"
            >
              <Link to="/contact">
                <Sparkles className="w-4 h-4" />
                Request Demo
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-300"
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
      <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-out ${
        mobileMenuOpen 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}>
        <div className="bg-card border-b border-border shadow-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-accent/10 text-accent"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="lg" asChild className="w-full justify-center">
                <Link to="/workshops" onClick={() => setMobileMenuOpen(false)}>
                  View Workshops
                </Link>
              </Button>
              <Button variant="accent" size="lg" asChild className="w-full justify-center gap-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Sparkles className="w-4 h-4" />
                  Request Demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-foreground/20 transition-opacity duration-300 -z-10 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
