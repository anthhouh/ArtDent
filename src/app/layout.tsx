import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalUI from "@/components/GlobalUI";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArtDent | Clínica de Ortodoncia Premium – Transformamos Sonrisas",
  description:
    "Especialistas en ortodoncia invisible, brackets estéticos, metálicos y más. Agenda tu cita hoy.",
  keywords:
    "ortodoncia, brackets, alineadores invisibles, ortodoncia estética, brackets estéticos, clínica dental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={outfit.variable}>
        <Navbar />
        {children}
        <GlobalUI />
      </body>
    </html>
  );
}
