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
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
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
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <Badge variant="outline" className="w-fit mb-3">
              {product.category}
            </Badge>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              {product.name}
            </h2>
            {product.description && (
              <p className="text-muted-foreground mb-3">
                {product.description}
              </p>
            )}
            {product.usage && (
              <div className="bg-accent/50 rounded-lg p-3 mb-4">
                <p className="text-xs font-semibold text-foreground mb-1">
                  How to Use:
                </p>
                <p className="text-xs text-muted-foreground">{product.usage}</p>
              </div>
            )}
            <p className="text-3xl font-bold text-primary mb-6">
              R{product.price.toLocaleString()}
            </p>

            {/* Thumbnail Gallery */}
            {hasMultipleImages && (
              <div className="flex gap-2 mb-6">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-14 h-14 rounded-md overflow-hidden border-2 transition-colors ${
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

            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/50 px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Available in-store only</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
