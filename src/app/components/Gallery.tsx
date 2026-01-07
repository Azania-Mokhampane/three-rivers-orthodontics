import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cases = [
    {
      id: 1,
      title: "Crowding Correction",
      duration: "18 months",
      description: "Severe crowding corrected with traditional braces",
    },
    {
      id: 2,
      title: "Overbite Treatment",
      duration: "14 months",
      description: "Deep overbite corrected for improved function",
    },
    {
      id: 3,
      title: "Gap Closure",
      duration: "12 months",
      description: "Spacing issues resolved with clear aligners",
    },
    {
      id: 4,
      title: "Crossbite Correction",
      duration: "16 months",
      description: "Crossbite treated for balanced bite alignment",
    },
  ];

  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">Before & After</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Results, Real Smiles
          </h2>
          <p className="text-muted-foreground">
            See the transformative results our patients have achieved. Every
            smile tells a story of confidence renewed.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elevated bg-muted">
            {/* Before/After Container */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 relative border-r-2 border-background/50 bg-muted flex flex-col items-center justify-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground/50 mb-2" />
                <p className="text-sm text-muted-foreground">Before Image</p>
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-foreground">Before</p>
                </div>
              </div>
              <div className="w-1/2 relative bg-muted flex flex-col items-center justify-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground/50 mb-2" />
                <p className="text-sm text-muted-foreground">After Image</p>
                <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-primary-foreground">
                    After
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-soft"
              aria-label="Previous case"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-soft"
              aria-label="Next case"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Case Info */}
          <div className="mt-6 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {cases[activeIndex].title}
            </h3>
            <p className="text-muted-foreground">
              {cases[activeIndex].description}
            </p>
            <p className="text-sm text-primary mt-2">
              Treatment duration: {cases[activeIndex].duration}
            </p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to case ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Ready to start your transformation?
          </p>
          <Button onClick={scrollToBooking} variant="hero" size="lg">
            Book Your Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
