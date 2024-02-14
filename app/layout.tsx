import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Wellinton Piassa",
  description: "Portfolio - Wellinton Piassa"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
