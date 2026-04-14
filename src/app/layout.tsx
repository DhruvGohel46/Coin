import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "flip a Coin | Provably Fair Decision Engine",
  description: "Experience high-fidelity physics and 3D layering with the world's most premium coin flip protocol. Built for state-of-the-art decision making.",
  keywords: ["coin flip", "3D UI", "premium design", "random number generator", "Next.js"],
  manifest: "/manifest.json",
  openGraph: {
  title: "flip a Coin | Decision Making Redefined",
  description: "Experience the world's first premium 3D coin toss engine.",
  url: "https://flip-a-coin.vercel.app",
  siteName: "flip a Coin",
  images: [{ url: "/icon.png" }],
  locale: "en_US",
  type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "flip a Coin",
  description: "Premium decision making at your fingertips.",
  images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    <body className="antialiased min-h-screen">
    {children}
    </body>
  </html>
  );
}
