import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {NextUIProvider} from '@nextui-org/react'

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
      <body >
        <Header/> {/* Navigation will show in every page*/}
        <NextUIProvider>
      {children}
    </NextUIProvider>
        <Footer/> {/* Footer will also show in every page*/}
        </body>
    </html>
  );
}
