import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jikko AI - 香港中小企AI助手",
  description: "企業級AI自動化平台，專為香港中小企度身訂造。HR、財務、銷售、客服一站式解決方案。",
  keywords: "AI, 人工智能, 香港, 中小企, 自動化, HR, 財務, 銷售, 客服",
  authors: [{ name: "Jikko AI" }],
  openGraph: {
    title: "Jikko AI - 香港中小企AI助手",
    description: "企業級AI自動化平台，專為香港中小企度身訂造",
    url: "https://jikkoai.com",
    siteName: "Jikko AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jikko AI",
      },
    ],
    locale: "zh_HK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jikko AI - 香港中小企AI助手",
    description: "企業級AI自動化平台，專為香港中小企度身訂造",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-HK" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}