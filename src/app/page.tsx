"use client";
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransitions";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <Booking />
        <FAQ />
        <Contact />
        <FloatingWhatsApp />
        <Footer />
      </div>
    </PageTransition>
  );
}
