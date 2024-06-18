import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "_azad",
  description: "Designed and Developed by @the_mdazad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider className="px-[5%] max-w-[1440px] m-auto ">
          <NavigationBar/>
          {children}
          </NextUIProvider>
        <Footer /> {/* Footer will also show in every page*/}
      </body>
    </html>
  );
}
