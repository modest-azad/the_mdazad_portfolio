import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      {/* <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.2.0/uicons-brands/css/uicons-brands.css'></link>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.2.0/uicons-solid-rounded/css/uicons-solid-rounded.css'></link> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
