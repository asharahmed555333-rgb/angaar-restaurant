import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import RestaurantSchema from "@/components/RestaurantSchema/RestaurantSchema";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angaar-restaurant.vercel.app"),

  title: {
    default: "Angaar | Premium Pakistani BBQ Restaurant",
    template: "%s | Angaar",
  },

  description:
    "Experience premium Pakistani BBQ, traditional dishes and warm hospitality at Angaar.",

  keywords: [
    "Pakistani restaurant",
    "Pakistani BBQ",
    "charcoal grill",
    "seekh kabab",
    "traditional Pakistani food",
    "Angaar restaurant",
  ],

  openGraph: {
    title: "Angaar — Premium Pakistani BBQ",
    description:
      "Experience authentic Pakistani BBQ, karahi, biryani and traditional flavours cooked over live fire.",
    url: "https://angaar-restaurant.vercel.app",
    siteName: "Angaar Restaurant",
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Angaar — Premium Pakistani BBQ",
    description:
      "Authentic Pakistani BBQ and traditional food, prepared with fire and flavour.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        <RestaurantSchema />

        <Navbar />

        <div className="siteContent">{children}</div>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}