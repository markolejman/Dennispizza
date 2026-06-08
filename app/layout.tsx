import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({ 
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pizza i Vega - Dennis Kök",
  description: "Pizza, pasta, sallader och à la carte – tillagat med kvalitet och passion.",
  keywords: ["pizza", "pasta", "sallader", "kebab", "hamburgare", "Dennis Kök", "Haninge", "Vega"],
  openGraph: {
    title: "Pizza i Vega - Dennis Kök",
    description: "Pizza, pasta, sallader och à la carte – tillagat med kvalitet och passion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${lato.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}
