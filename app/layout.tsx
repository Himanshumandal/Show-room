import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar,Footer } from "@/components";

export const metadata: Metadata = {
  title: "Car hub",
  description: "Car showrooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
