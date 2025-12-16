import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Building2, GraduationCap, Users, Handshake, CheckCircle2 } from "lucide-react";

type InquiryType = "workshop" | "demo" | "institution" | "partnership";

const ContactPage = () => {
  const { toast } = useToast();
  const [inquiryType, setInquiryType] = useState<InquiryType>("workshop");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted",
      description: "Thank you for your interest. Our team will contact you within 24-48 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const inquiryTypes = [
    { id: "workshop" as InquiryType, icon: GraduationCap, label: "Workshop Request", description: "Request a workshop at your institution" },
    { id: "demo" as InquiryType, icon: Building2, label: "Simulator Demo", description: "Schedule a product demonstration" },
    { id: "institution" as InquiryType, icon: Users, label: "Institutional Enquiry", description: "Pricing and acquisition information" },
    { id: "partnership" as InquiryType, icon: Handshake, label: "Partnership", description: "Collaboration and partnership opportunities" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your Training Needs
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you're interested in hosting a workshop, exploring simulator options, 
              or exploring partnership opportunities, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                {/* Inquiry Type Selection */}
                <div className="mb-8">
                  <Label className="text-base font-semibold mb-4 block">What can we help you with?</Label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setInquiryType(type.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          inquiryType === type.id
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            inquiryType === type.id ? "bg-accent text-accent-foreground" : "bg-secondary"
                          }`}>
                            <type.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{type.label}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required placeholder="Dr. John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@institution.edu" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution / Organization *</Label>
                      <Input id="institution" name="institution" required placeholder="Mumbai Medical College" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role / Designation</Label>
                    <Input id="role" name="role" placeholder="HOD - Embryology Department" />
                  </div>

                  {inquiryType === "workshop" && (
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="participants">Expected Participants</Label>
                        <Input id="participants" name="participants" type="number" placeholder="20" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input id="preferredDate" name="preferredDate" type="date" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={4}
                      placeholder={
                        inquiryType === "workshop" 
                          ? "Tell us about your institution and training needs..."
                          : inquiryType === "demo"
                          ? "When would you like to schedule a demo? Any specific features you'd like to see?"
                          : inquiryType === "institution"
                          ? "Tell us about your institution and what you're looking for..."
                          : "Describe your partnership proposal..."
                      }
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="font-display text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">info@trainicsi.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium">+91 XXXXX XXXXX</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Address</div>
                      <div className="font-medium">
                        Shreeji Medtech Pvt. Ltd.<br />
                        India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-hero rounded-xl p-6 text-primary-foreground">
                <h3 className="font-display text-lg font-semibold mb-4">Why Choose Train ICSI?</h3>
                <ul className="space-y-3">
                  {[
                    "India's first ICSI simulation system",
                    "Expert-led workshop programs",
                    "Comprehensive institutional support",
                    "Flexible pricing options",
                    "Ongoing technical assistance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24-48 business hours. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
