import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Send,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";

// WhatsApp number for Three Rivers Orthodontics
const WHATSAPP_NUMBER = "27615830624";
const PRACTICE_EMAIL = "admin@threeriversorthodontics.co.za";
const BOOKING_URL = "https://hugosystems.tech/";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Generate available dates (next 30 days, excluding weekends)
  const getAvailableDates = () => {
    const dates: Date[] = [];
    const today = new Date();

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.getDay();

      // Exclude Saturday (6) and Sunday (0)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(date);
      }
    }

    return dates;
  };

  const availableDates = getAvailableDates();

  // Time slots (8 AM - 4:30 PM)
  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-ZA", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const validateForm = () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.phone) {
      toast("Please fill in all required fields", {});
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const message = `🦷 *NEW APPOINTMENT REQUEST*
━━━━━━━━━━━━━━━━━━

*Patient Details:*
• Name: ${formData.name.trim()}
• Phone: ${formData.phone.trim()}${
      formData.email
        ? `
• Email: ${formData.email.trim()}`
        : ""
    }

*Requested Appointment:*
• Date: ${formatDate(selectedDate!)}
• Time: ${selectedTime}
${
  formData.message
    ? `
*Additional Notes:*
${formData.message.trim()}`
    : ""
}

━━━━━━━━━━━━━━━━━━
Sent from Three Rivers Orthodontics website`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    toast("Opening WhatsApp...", {
      description: "Please send the message to confirm your booking request.",
    });

    resetForm();
  };

  const handleEmail = () => {
    if (!validateForm()) return;

    const subject = `Appointment Request from ${formData.name.trim()}`;
    const body = `NEW APPOINTMENT REQUEST

Patient Details:
• Name: ${formData.name.trim()}
• Phone: ${formData.phone.trim()}${
      formData.email
        ? `
• Email: ${formData.email.trim()}`
        : ""
    }

Requested Appointment:
• Date: ${formatDate(selectedDate!)}
• Time: ${selectedTime}
${
  formData.message
    ? `
Additional Notes:
${formData.message.trim()}`
    : ""
}`;

    const mailtoUrl = `mailto:${PRACTICE_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    toast("Opening Email Client...", {
      description: "Please send the email to confirm your booking request.",
    });

    resetForm();
  };

  const handleHugoBooking = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3">Book Online</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-muted-foreground">
            Take the first step towards your perfect smile. Book a consultation
            and let us create a personalized treatment plan for you.
          </p>
        </div>

        {/* Quick Book Button */}
        <div className="max-w-3xl mx-auto mb-8">
          <Card className="border-2 border-primary/20 bg-accent/30">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Quick Online Booking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Use our online booking portal for instant appointment
                  scheduling
                </p>
              </div>
              <Button
                onClick={handleHugoBooking}
                variant="hero"
                size="lg"
                className="gap-2 shrink-0"
              >
                <Calendar className="w-5 h-5" />
                Book Online
                <ExternalLink className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">
            or request an appointment below
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Booking Card */}
        <Card className="max-w-3xl mx-auto shadow-elevated border-0">
          <CardContent className="p-6 md:p-8">
            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      step >= s
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-12 md:w-20 h-1 mx-2 rounded ${
                        step > s ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Select Date */}
            {step === 1 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold">
                    Select a Date
                  </h3>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-6">
                  {availableDates.slice(0, 10).map((date) => (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg text-center transition-all duration-200 ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "bg-muted hover:bg-accent text-foreground"
                      }`}
                    >
                      <p className="text-xs opacity-70">
                        {date.toLocaleDateString("en-ZA", { weekday: "short" })}
                      </p>
                      <p className="font-semibold">{date.getDate()}</p>
                      <p className="text-xs opacity-70">
                        {date.toLocaleDateString("en-ZA", { month: "short" })}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedDate}
                    size="lg"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Select Time */}
            {step === 2 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold">
                    Select a Time
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {selectedDate && formatDate(selectedDate)}
                </p>

                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 mb-6">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg text-center transition-all duration-200 ${
                        selectedTime === time
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "bg-muted hover:bg-accent text-foreground"
                      }`}
                    >
                      <p className="font-medium text-sm">{time}</p>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!selectedTime}
                    size="lg"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Your Details */}
            {step === 3 && (
              <form
                onSubmit={(e) => e.preventDefault()}
                className="animate-fade-in"
              >
                <h3 className="font-display text-xl font-semibold mb-2">
                  Your Details
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {selectedDate && formatDate(selectedDate)} at {selectedTime}
                </p>

                <div className="grid gap-4 mb-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="081 234 5678"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Any specific concerns or questions?"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="hero"
                      size="lg"
                      className="gap-2"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book via WhatsApp
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="gap-2"
                      onClick={handleEmail}
                    >
                      <Send className="w-4 h-4" />
                      Book via Email
                    </Button>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep(2)}
                    className="self-start"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Booking;
