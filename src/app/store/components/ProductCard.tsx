"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/mockdata";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}
const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const hasImages = product.images.length > 0;
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
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
      {hasImages && (
        <div className="relative aspect-square bg-muted/30 overflow-hidden">
          <Image
            src={product.images[currentImage]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Quick View Button */}
          <button
            onClick={() => onQuickView(product)}
            className="absolute top-2 right-2 w-9 h-9 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImage ? "bg-primary" : "bg-background/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
      <CardContent className="p-6">
        <Badge variant="outline" className="mb-3 text-xs">
          {product.category}
        </Badge>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-muted-foreground mb-3">
            {product.description}
          </p>
        )}
        <p className="text-2xl font-bold text-primary">
          R{product.price.toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
