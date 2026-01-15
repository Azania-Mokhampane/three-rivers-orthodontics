"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import CountUpStat from "./CountUpStat";
import { HOME_BOOKING_SECTION, HOME_GALLERY_SECTION } from "@/lib/routes";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.querySelector(HOME_BOOKING_SECTION);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGallery = () => {
    const element = document.querySelector(HOME_GALLERY_SECTION);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-subtle-gradient" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23777D96' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Trusted by 500+ patients
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Perfect Smile
              <span className="block text-gradient">Starts Here</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Experience world-class orthodontic care with Dr Saad Dasoo at
              Three Rivers Orthodontics. Transform your smile with personalized
              treatment plans designed just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={scrollToBooking} variant="hero" size="xl">
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button onClick={scrollToGallery} variant="outline" size="xl">
                View Results
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              <CountUpStat
                end={15}
                suffix="+"
                label="Years Experience"
                delay={0}
              />
              <CountUpStat
                end={2000}
                suffix="+"
                label="Happy Smiles"
                delay={200}
              />
              <CountUpStat
                end={98}
                suffix="%"
                label="Patient Satisfaction"
                delay={400}
              />
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-elevated">
              <Image
                width={100}
                height={100}
                src="/images/hero-smile.jpg"
                alt="Beautiful confident smile after orthodontic treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center">
                  <span className="text-primary-foreground text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dr Saad Dasoo</p>
                  <p className="text-sm text-muted-foreground">
                    Specialist Orthodontist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
