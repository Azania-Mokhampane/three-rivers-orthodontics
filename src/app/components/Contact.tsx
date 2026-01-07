/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

// WhatsApp number for Three Rivers Orthodontics
const WHATSAPP_NUMBER = "27615830624";
const PRACTICE_EMAIL = "admin@threeriversorthodontics.co.za";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "139 General Hertzog Rd,\nThree Rivers, Vereeniging, 1929",
      href: "https://maps.google.com/?q=139+General+Hertzog+Rd+Three+Rivers+Vereeniging+1929",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "016 423 1227",
      href: "tel:+27164231227",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "admin@threeriversorthodontics.co.za",
      href: "mailto:admin@threeriversorthodontics.co.za",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      content: "Mon–Fri: 8:00 AM – 4:30 PM\nSat–Sun: Closed",
    },
  ];

  const validateForm = () => {
    if (!formData.name || !formData.message) {
      toast("Please fill in all required fields", {});
      return false;
    }
    return true;
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const message = `📩 *NEW INQUIRY*
━━━━━━━━━━━━━━━━━━

*Contact Details:*
• Name: ${formData.name.trim()}${
      formData.phone
        ? `
• Phone: ${formData.phone.trim()}`
        : ""
    }${
      formData.email
        ? `
• Email: ${formData.email.trim()}`
        : ""
    }

*Message:*
${formData.message.trim()}

━━━━━━━━━━━━━━━━━━
Sent from Three Rivers Orthodontics website`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    toast("Opening WhatsApp...", {
      description: "Please send the message to complete your inquiry.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleEmail = () => {
    if (!validateForm()) return;

    const subject = `Website Inquiry from ${formData.name.trim()}`;
    const body = `NEW INQUIRY

Contact Details:
• Name: ${formData.name.trim()}${
      formData.phone
        ? `
• Phone: ${formData.phone.trim()}`
        : ""
    }${
      formData.email
        ? `
• Email: ${formData.email.trim()}`
        : ""
    }

Message:
${formData.message.trim()}`;

    const mailtoUrl = `mailto:${PRACTICE_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    toast("Opening Email Client...", {
      description: "Please send the email to complete your inquiry.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Have questions? We're here to help. Reach out to us and we'll
            respond as soon as we can.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info) => (
                <Card
                  key={info.title}
                  className="border-0 shadow-soft bg-background"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-sm"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line text-sm">
                        {info.content}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-xl overflow-hidden bg-accent shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.1234567890123!2d27.9234567890123!3d-26.6543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDM5JzE1LjYiUyAyN8KwNTUnMjQuNCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Three Rivers Orthodontics Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-elevated bg-background">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="081 234 5678"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Your Message *</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="hero"
                    size="lg"
                    className="w-full gap-2"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full gap-2"
                    onClick={handleEmail}
                  >
                    <Send className="w-4 h-4" />
                    Send via Email
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
