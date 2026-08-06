import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sensigas.local"),
  title: { default: "SENSIGÁS — Detecção inteligente de gás", template: "%s | SENSIGÁS" },
  description: "Protótipo científico com ESP32 DevKit V1 e sensor MQ-4 para detecção experimental de GLP e acionamento de alertas.",
  keywords: ["SENSIGÁS", "ESP32", "ESP32 DevKit V1", "sensor MQ-4", "sensor MQ-5", "detecção de gás", "projeto científico"],
  authors: [{ name: "Equipe SENSIGÁS" }],
  creator: "Equipe SENSIGÁS",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "SENSIGÁS — Detecção inteligente para ambientes mais seguros",
    description: "Conheça o protótipo de detecção de GLP desenvolvido com ESP32 DevKit V1 e sensor MQ-4.",
    siteName: "SENSIGÁS",
  },
  twitter: { card: "summary_large_image", title: "SENSIGÁS", description: "Tecnologia, ciência e segurança conectadas." },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#05070b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
