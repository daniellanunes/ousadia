import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TomCash Tattoo — Salvador Tattoo Studio | Barra, Salvador - BA",
  description:
    "Estúdio TomCash Tattoo no Salvador Tattoo Studio na Barra, Salvador - BA. Especialista em Blackwork, Fine line, Selos autorais, Anime, Realismo e Colorido. Agende sua sessão.",
  icons: {
    icon: "/tomcash/Iluminart_Vetor_PB_Principal.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${lora.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
