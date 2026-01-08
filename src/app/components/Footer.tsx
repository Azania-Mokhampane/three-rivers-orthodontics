"use client";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center p-1.5">
                <Image
                  width={100}
                  height={100}
                  src="/images/logo-white.png"
                  alt="Three Rivers Orthodontics"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold">
                  Three Rivers
                </p>
                <p className="text-xs text-background/70 -mt-1">Orthodontics</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Creating beautiful, healthy smiles in Vereeniging. Expert
              orthodontic care by Dr Saad Dasoo.
            </p>
            {/* Social Media Buttons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#services", label: "Services" },
                { href: "#gallery", label: "Results" },
                { href: "#about", label: "About" },
                { href: "#booking", label: "Book Appointment" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Traditional Braces</li>
              <li>Clear Aligners</li>
              <li>Early Treatment</li>
              <li>Retention Care</li>
              <li>Consultations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>
                  139 General Hertzog Rd,
                  <br />
                  Three Rivers, Vereeniging, 1929
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+27160000000"
                  className="hover:text-primary transition-colors"
                >
                  016 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@threeriversortho.co.za"
                  className="hover:text-primary transition-colors"
                >
                  info@threeriversortho.co.za
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>
                  Mon–Fri: 8 AM – 4:30 PM
                  <br />
                  Sat–Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Three Rivers Orthodontics. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Dr Saad Dasoo - Specialist Orthodontist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
