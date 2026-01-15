"use client";
import { Product, products } from "@/lib/mockdata";
import { useMemo, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ProductCard from "./ProductCard";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import QuickViewModal from "./QuickViewModal";

const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];

const StorePageUI = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);
  return (
    <>
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Dental Care Products
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Store
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Quality dental care products available for purchase at our clinic.
              Keep your smile healthy between appointments.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-accent/50 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Available for in-store purchase only</span>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onQuickView={setQuickViewProduct}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">
                  No products found matching your search.
                </p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-2">
              Visit our clinic to purchase these products
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              139 General Hertzog Rd, Three Rivers, Vereeniging
            </p>
            <p className="text-xs text-muted-foreground/70 italic">
              *Prices subject to change
            </p>
          </div>
        </div>
      </main>
      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        open={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
      <FloatingWhatsApp />
    </>
  );
  return <div>StorePageUI</div>;
};

export default StorePageUI;
