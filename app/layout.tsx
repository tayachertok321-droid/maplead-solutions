import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = "MapLead Solutions | Local SEO for NJ Home Service Businesses";
const description =
  "We help New Jersey home service businesses rank higher on Google Maps and get more calls through local SEO, Google Business Profile optimization, and schema markup.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mapleadsolutions.com"),
  title,
  description,
  keywords: "local SEO, Google Maps, New Jersey, home service, SEO agency, Google Business Profile",
  verification: {
    google: "cHQNdhzWItOV54W1ktxI0SlD5T_sofpTHl55AvNenwk",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1254,
        height: 1254,
        alt: "MapLead Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
