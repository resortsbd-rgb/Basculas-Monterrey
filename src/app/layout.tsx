import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Básculas Monterrey | Distribuidor Autorizado Rice Lake y Básculas Metrology",
  description:
    "Proveedor autorizado de equipos de pesaje industrial en Monterrey, México. Básculas industriales, indicadores, celdas de carga y más. Rice Lake Weighing Systems y Básculas Metrology.",
  keywords: "básculas monterrey, báscula industrial, rice lake, básculas metrology, pesaje industrial, monterrey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
