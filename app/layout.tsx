import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

export const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erf & Mary: The Adventures",
  description: "All About Our Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
