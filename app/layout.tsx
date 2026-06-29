import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Providers } from "@/lib/providers";
import DownloadAppModal from "@/components/DownloadAppModal";
import { Toaster } from "sonner";

const mtnBrighterSans = localFont({
  variable: "--mtn-brighter-sans",
  src: [
    { path: "./fonts/MTNBrighterSans-ExtraLight.woff2", weight: "100", style: "normal" },
    { path: "./fonts/MTNBrighterSans-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/MTNBrighterSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/MTNBrighterSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/MTNBrighterSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/MTNBrighterSans-ExtraBold.woff2", weight: "900", style: "normal" },
  ],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MyCityApp Website",
    template: "%s - MyCityApp",
  },
  description: "Welcome to the MyCityApp Website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mtnBrighterSans.variable} antialiased`}
    >
      <body className="antialiased relative">
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <DownloadAppModal />
          <Toaster position="top-right" richColors />
          <div className="fixed inset-0 pointer-events-none bg-pattern-bottom" />
        </Providers>
      </body>
    </html>
  );
}
