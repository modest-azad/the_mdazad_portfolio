import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@the_mdazad:Portfolio",
  description: "Designed and Developed by @the_mdazad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/> {/* Navigation will show in every page*/}
        {children}
        <Footer/> {/* Footer will also show in every page*/}
        </body>
    </html>
  );
}
