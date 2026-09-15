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
  metadataBase: new URL("https://isrmicha.dev"),
  title: "Israel Neves | Software Engineer & Full-Stack Developer",
  description:
    "Portfólio de Israel Neves (isrmicha) - Desenvolvedor de Software Full-stack especializado em React, Next.js, React Native, TypeScript, Node.js e arquitetura de software.",
  keywords: [
    "Israel Neves",
    "isrmicha",
    "Software Engineer",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "ISR Studio",
    "Tailwind CSS",
  ],
  authors: [{ name: "Israel Neves", url: "https://isrmicha.dev" }],
  creator: "Israel Neves",
  openGraph: {
    title: "Israel Neves | Software Engineer & Full-Stack Developer",
    description:
      "Portfólio de Israel Neves (isrmicha) - Desenvolvedor Full-stack com experiência em soluções web escaláveis, mobile e Web3.",
    url: "https://isrmicha.dev",
    siteName: "Israel Neves Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Israel Neves | Software Engineer & Full-Stack Developer",
    description:
      "Portfólio de Israel Neves (isrmicha) - React, Next.js, React Native, TypeScript, Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
