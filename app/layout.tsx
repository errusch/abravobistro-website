import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "á'Bravo Bistro | Sophisticated Comfort Food | Bellevue, WI",
  description:
    "Established in 1999, á'Bravo Bistro offers sophisticated comfort food with a shabby-chic décor in the heart of Bellevue. Lunch, dinner, Sunday brunch, and full bar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased bg-[var(--cream)] text-[var(--espresso-light)]">
        {children}
      </body>
    </html>
  );
}
