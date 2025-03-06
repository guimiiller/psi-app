import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[Nome da Psicóloga] - Atendimento Psicológico Online e Presencial",
  description: "Atendimento psicológico humanizado para ajudar você a superar desafios emocionais e melhorar sua qualidade de vida. Agende sua consulta hoje!",
  keywords: "psicóloga, terapia online, atendimento psicológico, psicologia clínica, saúde mental, bem-estar emocional, terapia cognitivo-comportamental, psicoterapia, consultas psicológicas, psicóloga especializada, apoio emocional",
  openGraph: {
    title: "[Nome da Psicóloga] - Atendimento Psicológico Online e Presencial",
    description: "Oferecendo suporte psicológico para seu bem-estar emocional, com sessões online e presenciais sob medida para suas necessidades.",
    url: "https://www.seusite.com.br",
    siteName: "[Nome da Psicóloga]",
    images: [
      {
        url: "https://www.seusite.com.br/imagem-de-exemplo.jpg",
        width: 1200,
        height: 630,
        alt: "Imagem ilustrativa de atendimento psicológico",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@[seuTwitter]", 
    title: "[Nome da Psicóloga] - Atendimento Psicológico Online e Presencial",
    description: "Consultas psicológicas personalizadas para ajudar você a viver melhor. Entre em contato para agendar sua sessão!",
    images: [
      {
        url: "https://www.seusite.com.br/imagem-de-exemplo.jpg", 
        width: 1200,
        height: 630,
        alt: "Imagem ilustrativa de atendimento psicológico",
      },
    ],
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
