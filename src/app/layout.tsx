import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Three Rivers Orthodontics | Dr S Dasoo | Specialist Orthodontist",
  description:
    "Three Rivers Orthodontics led by Dr S Dasoo offers expert orthodontic care including braces and clear aligners. Book a consultation with a trusted specialist orthodontist.",
  keywords: [
    "Three Rivers Orthodontics",
    "Dr S Dasoo",
    "Orthodontist Three Rivers",
    "Braces",
    "Clear Aligners",
    "Invisalign",
    "Specialist Orthodontist",
    "Dental Orthodontics",
  ],
  authors: [{ name: "Dr S Dasoo" }],
  creator: "Three Rivers Orthodontics",
  publisher: "Three Rivers Orthodontics",
  robots: "index, follow",
  openGraph: {
    title: "Three Rivers Orthodontics | Dr S Dasoo",
    description:
      "Expert orthodontic treatment by Dr S Dasoo at Three Rivers Orthodontics. Modern braces and clear aligner solutions.",
    // url: "https://www.threeriversorthodontics.co.za",
    url: "https://three-rivers-orthodontics.vercel.app",
    siteName: "Three Rivers Orthodontics",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Three Rivers Orthodontics | Dr S Dasoo",
    description:
      "Specialist orthodontic care by Dr S Dasoo. Braces and clear aligner treatments in Three Rivers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
