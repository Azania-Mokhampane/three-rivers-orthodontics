"use client";
/* eslint-disable react/no-unescaped-entities */
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NotFoundPage() {
  const pathname = usePathname();
  const { push } = useRouter();

  const scrollToSection = (href: string) => {
    const scroll = () => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    if (pathname !== "/") {
      push("/");
      setTimeout(scroll, 100);
    } else {
      scroll();
    }
  };
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/30 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Decorative tooth illustration */}
        <div className="mb-8 relative">
          <div className="text-[180px] font-display font-bold text-primary/30 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center">
              <Search className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Page Not Found
        </h1>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Oops! It seems this page has gone missing. Don't worry, let's get you
          back on track to your perfect smile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/#contact">
              <ArrowLeft className="w-4 h-4" />
              Contact Us
            </Link>
          </Button>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Looking for something specific? Visit our{" "}
          <a
            onClick={() => scrollToSection("/store")}
            className="text-primary hover:underline cursor-pointer"
          >
            Store
          </a>{" "}
          or{" "}
          <a
            onClick={() => scrollToSection("/#services")}
            className="text-primary hover:underline cursor-pointer"
          >
            Services
          </a>
        </p>
      </div>
    </div>
  );
}
