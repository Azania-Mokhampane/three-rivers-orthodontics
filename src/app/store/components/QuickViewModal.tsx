import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "@/lib/mockdata";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface QuickViewModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const QuickViewModal = ({ product, open, onClose }: QuickViewModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) return null;

  const hasMultipleImages = product.images.length > 1;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Image Gallery */}
          <div className="relative aspect-square bg-muted/30 rounded-lg overflow-hidden">
            <Image
              src={product.images[currentImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </>
            )}
            {/* Thumbnail Gallery - Mobile: below image */}
            {hasMultipleImages && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImage ? "bg-primary" : "bg-background/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <Badge variant="outline" className="w-fit mb-2 sm:mb-3">
              {product.category}
            </Badge>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
              {product.name}
            </h2>
            {product.description && (
              <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
                {product.description}
              </p>
            )}
            {product.usage && (
              <div className="bg-accent/50 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                <p className="text-xs font-semibold text-foreground mb-1">
                  How to Use:
                </p>
                <p className="text-xs text-muted-foreground">{product.usage}</p>
              </div>
            )}
            <p className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">
              R{product.price.toLocaleString()}
            </p>

            {/* Thumbnail Gallery - Desktop only */}
            {hasMultipleImages && (
              <div className="hidden md:flex gap-2 mb-4 sm:mb-6">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden border-2 transition-colors ${
                      index === currentImage
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground bg-accent/50 px-3 sm:px-4 py-2 rounded-lg mt-auto">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Available in-store only</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
