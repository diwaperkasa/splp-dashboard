import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import CoreUIProvider from "@/app/components/CoreUIProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-coreui-theme="dark">
      <title>Sistem Penghubung Layanan Pemerintah | Komdigi</title>
      <meta name="description" content="Sistem Penghubung Layanan Pemerintah (SPLP) menjadi platform integrasi yang memfasilitasi pertukaran data, sistem aplikasi, layanan SPBE, dan perangkat IoT melalui antarmuka pemrograman aplikasi (API)." />
      <CoreUIProvider />
      <body>{children}</body>
    </html>
  );
}
