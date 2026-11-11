import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.basculasmonterrey.com"),
  title: "Básculas Monterrey | Distribuidor Autorizado Rice Lake y Básculas Metrology",
  description:
    "Proveedor autorizado de equipos de pesaje industrial en Monterrey, México. Básculas industriales, indicadores, celdas de carga y más. Rice Lake Weighing Systems y Básculas Metrology.",
  keywords: "básculas monterrey, báscula industrial, rice lake, básculas metrology, pesaje industrial, monterrey",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.basculasmonterrey.com/#organizacion",
          name: "Básculas Monterrey",
          url: "https://www.basculasmonterrey.com/",
          telephone: "+52 81 1481 4111",
          email: "ventas@basculasmonterrey.com",
          areaServed: { "@type": "AdministrativeArea", name: "Monterrey, Nuevo León, México" },
        }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
