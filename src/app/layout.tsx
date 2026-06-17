import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";
import Footer from "@/components/general/Footer";
import SignInModal from "@/components/modals/SignInModal";
import SearchModal from "@/components/modals/SearchModal";

const poppins = Geist({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Tech blog with next.js and tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-background`}>
        <Navbar />
        {children}
        <Footer />
        <SignInModal />
        <SearchModal />
      </body>
    </html>
  );
}
