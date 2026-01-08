/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Star, Quote, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
  treatment: string;
  approved: boolean;
}

const STORAGE_KEY = "patient_testimonials";

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    quote:
      "Dr. and the team at Three Rivers Orthodontics made my entire braces journey so comfortable. I couldn't be happier with my new smile!",
    treatment: "Traditional Braces",
    approved: true,
  },
  {
    id: 2,
    name: "James P.",
    rating: 5,
    quote:
      "Professional, friendly, and the results speak for themselves. My invisalign treatment was completed ahead of schedule!",
    treatment: "Clear Aligners",
    approved: true,
  },
  {
    id: 3,
    name: "Michelle K.",
    rating: 5,
    quote:
      "The staff is incredibly welcoming and the office is spotless. My kids actually look forward to their appointments!",
    treatment: "Early Intervention",
    approved: true,
  },
  {
    id: 4,
    name: "David L.",
    rating: 4,
    quote:
      "Great experience from consultation to completion. The payment plans made it affordable and the results are fantastic.",
    treatment: "Adult Braces",
    approved: true,
  },
];

const Testimonials = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(defaultTestimonials);
  const [formData, setFormData] = useState({
    name: "",
    treatment: "",
    quote: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed: Testimonial[] = JSON.parse(stored);
      setTestimonials([
        ...defaultTestimonials,
        ...parsed.filter((t) => t.approved),
      ]);
    }
  }, []);

  const approvedTestimonials = testimonials.filter((t) => t.approved);

  const renderStars = (starRating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < starRating ? "fill-primary text-primary" : "fill-muted text-muted"
        } ${
          interactive
            ? "cursor-pointer hover:scale-110 transition-transform"
            : ""
        }`}
        onClick={interactive ? () => setRating(i + 1) : undefined}
      />
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.quote.trim()) {
      toast("Missing information", {
        description: "Please fill in your name and review.",
      });
      return;
    }

    const newTestimonial: Testimonial = {
      id: Date.now(),
      name: formData.name.trim(),
      rating,
      quote: formData.quote.trim(),
      treatment: formData.treatment.trim() || "General Treatment",
      approved: true, // Auto-approve for demo; set to false for moderation
    };

    // Get existing user submissions
    const stored = localStorage.getItem(STORAGE_KEY);
    const existing: Testimonial[] = stored ? JSON.parse(stored) : [];
    const updated = [...existing, newTestimonial];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setTestimonials([
      ...defaultTestimonials,
      ...updated.filter((t) => t.approved),
    ]);

    toast("Thank you for your review!", {
      description: "Your testimonial has been submitted successfully.",
    });

    setFormData({ name: "", treatment: "", quote: "" });
    setRating(5);
    setOpen(false);
  };

  const averageRating = (
    approvedTestimonials.reduce((sum, t) => sum + t.rating, 0) /
    approvedTestimonials.length
  ).toFixed(1);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Patient Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients who transformed their smiles with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approvedTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-primary">
                    {testimonial.treatment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating & Submit Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border/50">
            <div className="flex gap-1">{renderStars(5)}</div>
            <span className="text-foreground font-medium">
              {averageRating}/5
            </span>
            <span className="text-muted-foreground text-sm">
              based on {approvedTestimonials.length}+ reviews
            </span>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Send className="w-4 h-4" />
                Share Your Experience
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Submit Your Review</DialogTitle>
                <DialogDescription>
                  We&apos;d love to hear about your experience with us!
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John D."
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    maxLength={50}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment">Treatment (optional)</Label>
                  <Input
                    id="treatment"
                    placeholder="e.g., Clear Aligners"
                    value={formData.treatment}
                    onChange={(e) =>
                      setFormData({ ...formData, treatment: e.target.value })
                    }
                    maxLength={50}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Your Rating</Label>
                  <div className="flex gap-1">{renderStars(rating, true)}</div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quote">Your Review</Label>
                  <Textarea
                    id="quote"
                    placeholder="Tell us about your experience..."
                    value={formData.quote}
                    onChange={(e) =>
                      setFormData({ ...formData, quote: e.target.value })
                    }
                    maxLength={500}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Review
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
