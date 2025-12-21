import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  User,
  Mail,
  Phone,
  School,
  BookOpen
} from "lucide-react";

type ParticipantType = "host_student" | "other_student" | "professional" | "faculty";

interface Workshop {
  id: number;
  date: string;
  time: string;
  location: string;
  type: string;
  seatsLeft: number | null;
  totalSeats: number | null;
}

interface WorkshopRegistrationFormProps {
  workshops: Workshop[];
  onClose?: () => void;
}

const participantTypes = [
  { 
    id: "host_student" as ParticipantType, 
    icon: GraduationCap, 
    label: "Student (Host College)", 
    description: "Currently enrolled at the hosting institution",
    price: 3000,
    priceLabel: "₹3,000"
  },
  { 
    id: "other_student" as ParticipantType, 
    icon: School, 
    label: "Student (Other College)", 
    description: "Student from a different institution",
    price: 4500,
    priceLabel: "₹4,500"
  },
  { 
    id: "professional" as ParticipantType, 
    icon: Briefcase, 
    label: "Professional / Practitioner", 
    description: "Working embryologist or healthcare professional",
    price: 4500,
    priceLabel: "₹4,500"
  },
  { 
    id: "faculty" as ParticipantType, 
    icon: Users, 
    label: "Faculty Member", 
    description: "Teaching faculty or instructor",
    price: 4500,
    priceLabel: "₹4,500"
  },
];

const experienceLevels = [
  "Beginner (No prior experience)",
  "Intermediate (Some theoretical knowledge)",
  "Advanced (Observed procedures)",
  "Expert (Hands-on clinical experience)"
];

const qualifications = [
  "Undergraduate Student",
  "Postgraduate Student (MSc/MD)",
  "PhD Scholar",
  "Fellowship/Residency",
  "Certified Embryologist",
  "Faculty/Professor",
  "Other"
];

const WorkshopRegistrationForm = ({ workshops, onClose }: WorkshopRegistrationFormProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [selectedWorkshop, setSelectedWorkshop] = useState<number | null>(null);
  const [participantType, setParticipantType] = useState<ParticipantType | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    studentId: "",
    qualification: "",
    experienceLevel: "",
    specialization: "",
    expectations: "",
  });

  const selectedWorkshopData = workshops.find(w => w.id === selectedWorkshop);
  const selectedParticipant = participantTypes.find(p => p.id === participantType);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Registration Submitted!",
      description: `Your seat for the ${selectedWorkshopData?.date} workshop has been reserved. Please complete payment to confirm.`,
    });
    
    setIsSubmitting(false);
    setStep(4); // Move to confirmation/payment step
  };

  const canProceedToStep2 = selectedWorkshop !== null;
  const canProceedToStep3 = participantType !== null;

  return (
    <div className="bg-card rounded-3xl shadow-elevated border border-border overflow-hidden">
      {/* Progress Header */}
      <div className="bg-hero p-6 text-white">
        <h2 className="font-display text-2xl font-bold mb-4">Workshop Registration</h2>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                step >= s 
                  ? "bg-accent text-white" 
                  : "bg-white/20 text-white/60"
              }`}>
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 4 && (
                <div className={`w-12 h-1 mx-1 rounded transition-all ${
                  step > s ? "bg-accent" : "bg-white/20"
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-white/60 mt-2 px-1">
          <span>Workshop</span>
          <span>Category</span>
          <span>Details</span>
          <span>Payment</span>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {/* Step 1: Select Workshop */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="font-display text-xl font-semibold mb-2">Select Your Workshop</h3>
              <p className="text-muted-foreground text-sm">Choose from available upcoming workshops</p>
            </div>

            <div className="grid gap-4">
              {workshops.map((workshop) => (
                <button
                  key={workshop.id}
                  type="button"
                  onClick={() => setSelectedWorkshop(workshop.id)}
                  disabled={workshop.seatsLeft === 0}
                  className={`p-5 rounded-xl border-2 text-left transition-all ${
                    selectedWorkshop === workshop.id
                      ? "border-accent bg-accent/5 shadow-glow"
                      : workshop.seatsLeft === 0
                      ? "border-border bg-muted opacity-60 cursor-not-allowed"
                      : "border-border hover:border-accent/50 hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                          workshop.type === "Virtual" 
                            ? "bg-accent/10 text-accent" 
                            : "bg-primary/10 text-primary"
                        }`}>
                          {workshop.type === "Virtual" ? "🌐" : "🏫"} {workshop.type}
                        </span>
                        {workshop.seatsLeft !== null && workshop.seatsLeft < 10 && (
                          <span className="text-xs text-destructive font-medium">
                            🔥 Only {workshop.seatsLeft} seats left!
                          </span>
                        )}
                      </div>
                      <h4 className="font-display text-lg font-bold text-foreground mb-2">{workshop.date}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-accent" />
                          {workshop.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-accent" />
                          {workshop.location}
                        </span>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedWorkshop === workshop.id
                        ? "border-accent bg-accent"
                        : "border-muted-foreground/30"
                    }`}>
                      {selectedWorkshop === workshop.id && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <Button 
                variant="cta" 
                size="lg"
                disabled={!canProceedToStep2}
                onClick={() => setStep(2)}
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Participant Type */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="font-display text-xl font-semibold mb-2">Select Participant Category</h3>
              <p className="text-muted-foreground text-sm">Your category determines the registration fee</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {participantTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setParticipantType(type.id)}
                  className={`p-5 rounded-xl border-2 text-left transition-all ${
                    participantType === type.id
                      ? "border-accent bg-accent/5 shadow-glow"
                      : "border-border hover:border-accent/50 hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      participantType === type.id 
                        ? "bg-accent text-white" 
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">{type.label}</div>
                      <div className="text-xs text-muted-foreground mb-2">{type.description}</div>
                      <div className={`inline-flex items-center gap-1 text-sm font-bold ${
                        participantType === type.id ? "text-accent" : "text-foreground"
                      }`}>
                        <CreditCard className="w-3.5 h-3.5" />
                        {type.priceLabel}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-secondary/50 rounded-xl p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Students from the host college receive a discounted rate. 
                You will need to provide your student ID for verification.
              </p>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button 
                variant="cta" 
                size="lg"
                disabled={!canProceedToStep3}
                onClick={() => setStep(3)}
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <h3 className="font-display text-xl font-semibold mb-2">Your Details</h3>
              <p className="text-muted-foreground text-sm">Fill in your information to complete registration</p>
            </div>

            {/* Summary Card */}
            <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Selected Workshop</div>
                  <div className="font-semibold text-foreground">{selectedWorkshopData?.date} • {selectedWorkshopData?.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">Registration Fee</div>
                  <div className="font-display text-2xl font-bold text-accent">{selectedParticipant?.priceLabel}</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-accent" />
                  Full Name *
                </Label>
                <Input 
                  id="fullName" 
                  name="fullName" 
                  required 
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  Email Address *
                </Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  Phone Number *
                </Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  required 
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-accent" />
                  Institution / Organization *
                </Label>
                <Input 
                  id="institution" 
                  name="institution" 
                  required 
                  placeholder="Your college/workplace"
                  value={formData.institution}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {(participantType === "host_student" || participantType === "other_student") && (
              <div className="space-y-2">
                <Label htmlFor="studentId" className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  Student ID / Enrollment Number *
                </Label>
                <Input 
                  id="studentId" 
                  name="studentId" 
                  required 
                  placeholder="Enter your student ID for verification"
                  value={formData.studentId}
                  onChange={handleInputChange}
                />
                <p className="text-xs text-muted-foreground">Required to verify your student status</p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="qualification" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  Qualification *
                </Label>
                <select
                  id="qualification"
                  name="qualification"
                  required
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select qualification</option>
                  {qualifications.map((q) => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experienceLevel">Experience Level *</Label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  required
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select experience level</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization / Area of Interest</Label>
              <Input 
                id="specialization" 
                name="specialization" 
                placeholder="e.g., Clinical Embryology, ART, Research"
                value={formData.specialization}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expectations">What do you hope to learn from this workshop?</Label>
              <Textarea 
                id="expectations" 
                name="expectations" 
                rows={3}
                placeholder="Share your learning goals and expectations..."
                value={formData.expectations}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button type="submit" variant="cta" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Proceed to Payment"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        )}

        {/* Step 4: Payment/Confirmation */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in text-center py-8">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Registration Received!</h3>
              <p className="text-muted-foreground">Your seat has been temporarily reserved</p>
            </div>

            <div className="bg-secondary/50 rounded-xl p-6 border border-border max-w-md mx-auto">
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Workshop</span>
                  <span className="font-medium">{selectedWorkshopData?.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">{selectedWorkshopData?.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">{selectedParticipant?.label}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-semibold">Amount to Pay</span>
                  <span className="font-display text-xl font-bold text-accent">{selectedParticipant?.priceLabel}</span>
                </div>
              </div>
            </div>

            <div className="bg-highlight/10 rounded-xl p-4 border border-highlight/20 max-w-md mx-auto">
              <p className="text-sm text-foreground">
                <strong>Next Step:</strong> Complete payment to confirm your seat. 
                Our team will contact you with payment instructions within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="outline" size="lg" onClick={onClose}>
                Close
              </Button>
              <Button variant="cta" size="lg" disabled>
                <CreditCard className="w-4 h-4" />
                Pay Now (Coming Soon)
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkshopRegistrationForm;
