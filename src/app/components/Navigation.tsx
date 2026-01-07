"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Results" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      //   navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-hero-gradient flex items-center justify-center p-1.5">
              <Image
                src="/images/logo-white.png"
                width={100}
                height={100}
                alt="Three Rivers Orthodontics"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-semibold text-foreground">
                Three Rivers
              </p>
              <p className="text-xs text-muted-foreground -mt-1">
                Orthodontics
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              //   onClick={() => navigate("/store")}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Store
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+27164231227"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call Us</span>
            </a>
            <Button onClick={() => scrollToSection("#booking")} size="lg">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-3 text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  //   navigate("/store");
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-left px-4 py-3 text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Store
              </button>
              <div className="pt-4 px-4">
                <Button
                  onClick={() => scrollToSection("#booking")}
                  className="w-full"
                  size="lg"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
