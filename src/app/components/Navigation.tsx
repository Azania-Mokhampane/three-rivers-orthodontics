"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  HOME_ABOUT_SECTION,
  HOME_BOOKING_SECTION,
  HOME_CONTACT_SECTION,
  HOME_FAQ_SECTION,
  HOME_GALLERY_SECTION,
  HOME_HOME_SECTION,
  HOME_ROUTE,
  HOME_SERVICES_SECTION,
  STORE_ROUTE,
} from "@/lib/routes";

const Navigation = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: HOME_HOME_SECTION, label: "Home" },
    { href: HOME_SERVICES_SECTION, label: "Services" },
    { href: HOME_GALLERY_SECTION, label: "Results" },
    { href: HOME_ABOUT_SECTION, label: "About" },
    { href: HOME_FAQ_SECTION, label: "FAQ" },
    { href: HOME_CONTACT_SECTION, label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const scroll = () => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (pathname !== HOME_ROUTE) {
      push(HOME_ROUTE);

      // wait for route change + DOM paint
      setTimeout(scroll, 150);
    } else {
      scroll();
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
              onClick={() => push(STORE_ROUTE)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
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
            <Button
              onClick={() => scrollToSection(HOME_BOOKING_SECTION)}
              size="lg"
            >
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
                  push(STORE_ROUTE);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-left px-4 py-3 text-foreground hover:bg-accent rounded-lg transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                Store
              </button>
              <div className="pt-4 px-4">
                <Button
                  onClick={() => scrollToSection(HOME_BOOKING_SECTION)}
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
