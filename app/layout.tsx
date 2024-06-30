import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Desktop from "@/components/navbar/Desktop";
import Footer from "@/components/footer/Footer";

const Open = Open_Sans({ subsets: ["latin"],weight:["300","400","500","600","700","800"]});

export const metadata: Metadata = {
  title: "MedSafe",
  description: "Health exchange for sharing private medical record to all over the world without sharing your personal informaiton.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Open.className +" text-neutral-700"}>
        <Desktop/>      
        {children}
        <Footer/>
      </body>
    </html>
  );
}
