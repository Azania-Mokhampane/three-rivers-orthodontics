"use client";
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <Booking />
      <FAQ />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
}
