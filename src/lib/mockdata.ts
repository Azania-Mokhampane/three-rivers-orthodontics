// Product images
import ordoSonic1 from "../../public/products/ordo-sonic-1.webp";
import ordoSonic2 from "../../public/products/ordo-sonic-2.webp";
import ordoSonic3 from "../../public/products/ordo-sonic-3.webp";
import ordoMouthwash1 from "../../public/products/ordo-mouthwash-1.webp";
import ordoMouthwash2 from "../../public/products/ordo-mouthwash-2.webp";
import ordoRefill1 from "../../public/products/ordo-refill-1.webp";
import ordoRefill2 from "../../public/products/ordo-refill-2.webp";
import ordoRefill3 from "../../public/products/ordo-refill-3.webp";
import paroInterdental from "../../public/products/paro-interdental.webp";
import paroMouthwash1 from "../../public/products/paro-mouthwash-1.webp";
import paroMouthwash2 from "../../public/products/paro-mouthwash-2.webp";
import foamO1 from "../../public/products/foam-o-1.png";
import foamO2 from "../../public/products/foam-o-2.png";
import foamO3 from "../../public/products/foam-o-3.png";
import retainerCase1 from "../../public/products/retainer-case-1.jpg";
import retainerCase2 from "../../public/products/retainer-case-2.jpg";
import retainerCase3 from "../../public/products/retainer-case-3.jpg";
import reliefWax1 from "../../public/products/relief-wax-1.webp";
import retainerBrite1 from "../../public/products/retainer-brite-1.webp";
import retainerBrite2 from "../../public/products/retainer-brite-2.webp";
import retainerBrite3 from "../../public/products/retainer-brite-3.webp";
import { StaticImageData } from "next/image";

export interface Product {
  name: string;
  price: number;
  category: string;
  description?: string;
  usage?: string;
  images: string[] | StaticImageData[];
}

export const products: Product[] = [
  {
    name: "Ordo Sonic Toothbrush",
    price: 1100,
    category: "Electric Toothbrush",
    description:
      "Premium sonic electric toothbrush with multiple cleaning modes for superior plaque removal.",
    usage:
      "Brush for 2 minutes twice daily. Hold at a 45° angle to gums, letting the sonic vibrations do the work. Replace brush head every 3 months.",
    images: [ordoSonic1, ordoSonic2, ordoSonic3],
  },
  {
    name: "Ordo Mouthwash Concentrate",
    price: 150,
    category: "Mouthwash",
    description:
      "Concentrated antibacterial mouthwash formula for long-lasting fresh breath and gum health.",
    usage:
      "Dilute 5ml concentrate with water in the Ordo refill bottle. Rinse for 30 seconds after brushing, twice daily. Do not swallow.",
    images: [ordoMouthwash1, ordoMouthwash2],
  },
  {
    name: "Ordo Refill Bottle",
    price: 175,
    category: "Accessories",
    description:
      "Reusable mixing bottle designed for Ordo mouthwash concentrate. Eco-friendly and convenient.",
    usage:
      "Fill with water to the marked line, add mouthwash concentrate, shake gently. Rinse bottle weekly to maintain freshness.",
    images: [ordoRefill1, ordoRefill2, ordoRefill3],
  },
  {
    name: "Paro Interdental Brush",
    price: 75,
    category: "Brushes",
    description:
      "Precision interdental brushes for cleaning between teeth and around orthodontic appliances.",
    usage:
      "Gently insert between teeth or around brackets. Use a back-and-forth motion. Use once daily, preferably before bedtime. Replace when bristles wear.",
    images: [paroInterdental],
  },
  {
    name: "Paro Mouthwash",
    price: 100,
    category: "Mouthwash",
    description:
      "Gentle fluoride mouthwash suitable for daily use, helps strengthen enamel and prevent cavities.",
    usage:
      "Rinse with 15ml for 30-60 seconds after brushing. Use twice daily. Do not eat or drink for 30 minutes after use.",
    images: [paroMouthwash1, paroMouthwash2],
  },
  {
    name: "Foam-O",
    price: 300,
    category: "Cleaning",
    description:
      "Specialized foam cleanser for clear aligners, retainers, and orthodontic appliances.",
    usage:
      "Apply foam directly onto aligner or retainer. Brush gently with a soft toothbrush. Rinse thoroughly before wearing. Use daily for best results.",
    images: [foamO1, foamO2, foamO3],
  },
  {
    name: "Dental/Retainer Case",
    price: 15,
    category: "Accessories",
    description:
      "Durable protective case for storing retainers, aligners, or mouthguards. Variety of colors available.",
    usage:
      "Always store your retainer in the case when not wearing. Keep case clean by rinsing with water regularly. Never wrap retainer in tissue.",
    images: [retainerCase1, retainerCase2, retainerCase3],
  },
  {
    name: "Relief Wax",
    price: 35,
    category: "Ortho Care",
    description:
      "Orthodontic relief wax to protect cheeks and gums from bracket irritation. Per sheet (20 wax balls per sheet).",
    usage:
      "Pinch off a small piece, roll into a ball, and press firmly onto the bracket or wire causing irritation. Remove before eating. Reapply as needed.",
    images: [reliefWax1],
  },
  {
    name: "Retainer Brite",
    price: 10,
    category: "Cleaning",
    description:
      "Effervescent cleaning tablets for retainers, aligners, and dental appliances. Per tablet.",
    usage:
      "Drop one tablet in a glass of warm water with your retainer. Soak for 15-20 minutes. Rinse thoroughly before wearing. Use daily for optimal hygiene.",
    images: [retainerBrite1, retainerBrite2, retainerBrite3],
  },
];
