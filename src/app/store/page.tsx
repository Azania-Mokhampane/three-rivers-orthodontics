import type { Metadata } from "next";
import StorePageUI from "./components/StorePageUI";
import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransitions";

export const metadata: Metadata = {
  title: "Orthodontic Products | Three Rivers Orthodontics",
  description:
    "Discover orthodontic care and oral hygiene products available in-store at Three Rivers Orthodontics, recommended by Dr S Dasoo.",
  robots: "index, follow",
  openGraph: {
    title: "Orthodontic Products | Three Rivers Orthodontics",
    description:
      "Orthodontic care and oral hygiene products available in-store at Three Rivers Orthodontics.",
    siteName: "Three Rivers Orthodontics",
    locale: "en_ZA",
    type: "website",
  },
};

export default function StorePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <StorePageUI />
      </div>
    </PageTransition>
  );
}
