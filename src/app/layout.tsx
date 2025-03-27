import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Playfair_Display, Bangers } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

const bangers = Bangers({
  subsets: ['latin'],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} ${bangers.className}`}>
        {children}
      </body>
    </html>
  );
}
