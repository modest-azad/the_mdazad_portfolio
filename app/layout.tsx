import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Welcome",
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
        <NextUIProvider>{children}</NextUIProvider>
        <Footer /> {/* Footer will also show in every page*/}
      </body>
    </html>
  );
}
