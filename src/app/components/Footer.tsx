"use client";
import {
  HOME_ABOUT_SECTION,
  HOME_BOOKING_SECTION,
  HOME_FAQ_SECTION,
  HOME_GALLERY_SECTION,
  HOME_ROUTE,
  HOME_SERVICES_SECTION,
  PRIVACY_ROUTE,
  TERMS_ROUTE,
} from "@/lib/routes";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { push } = useRouter();
  const pathname = usePathname();

  const socialLinks = [
    {
      icon: FiFacebook,
      href: "https://www.facebook.com/OrthodonticsThreeRivers",
      label: "Facebook",
    },
    {
      icon: FiInstagram,
      href: "https://www.instagram.com/threeriversorthodontics",
      label: "Instagram",
    },
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
      setTimeout(scroll, 100);
    } else {
      scroll();
    }
  };

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
                { href: HOME_SERVICES_SECTION, label: "Services" },
                { href: HOME_GALLERY_SECTION, label: "Results" },
                { href: HOME_ABOUT_SECTION, label: "About" },
                { href: HOME_BOOKING_SECTION, label: "Book Appointment" },
                { href: HOME_FAQ_SECTION, label: "FAQ" },
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
                  href="tel:+27164231227"
                  className="hover:text-primary transition-colors"
                >
                  016 423 1227
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@threeriversorthodontics.co.za"
                  className="hover:text-primary transition-colors"
                >
                  info@threeriversorthodontics.co.za
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
          <div className="flex items-center gap-4">
            <Link
              href={TERMS_ROUTE}
              className="text-sm text-background/50 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-background/30">|</span>
            <Link
              href={PRIVACY_ROUTE}
              className="text-sm text-background/50 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
