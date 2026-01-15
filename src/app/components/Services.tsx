import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Clock, Shield, Sparkles, ArrowRight } from "lucide-react";
import { HOME_BOOKING_SECTION } from "@/lib/routes";

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: "Traditional Braces",
      description:
        "Metal and ceramic braces for effective teeth alignment. Perfect for complex cases requiring precise control.",
      features: [
        "Metal & Ceramic Options",
        "All Ages Welcome",
        "Proven Results",
      ],
    },
    {
      icon: Sparkles,
      title: "Clear Aligners",
      description:
        "Nearly invisible aligners for a discreet treatment experience. Removable for eating and cleaning.",
      features: ["Virtually Invisible", "Removable Design", "Custom-Made"],
    },
    {
      icon: Clock,
      title: "Early Treatment",
      description:
        "Interceptive orthodontics for children to guide jaw growth and prevent future complications.",
      features: ["Ages 7-10", "Preventive Care", "Gentle Approach"],
    },
    {
      icon: Shield,
      title: "Retention Care",
      description:
        "Post-treatment retainers to maintain your beautiful new smile for years to come.",
      features: ["Custom Retainers", "Long-Term Support", "Follow-Up Care"],
    },
  ];

  const scrollToBooking = () => {
    const element = document.querySelector(HOME_BOOKING_SECTION);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">Our Services</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Orthodontic Care
          </h2>
          <p className="text-muted-foreground">
            From traditional braces to modern clear aligners, we offer a full
            range of orthodontic treatments tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card hover:shadow-elevated transition-all duration-300 border-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button onClick={scrollToBooking} variant="hero" size="lg">
            Schedule Your Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
