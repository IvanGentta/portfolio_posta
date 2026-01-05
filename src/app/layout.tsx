import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/Providers";

// texto general
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-texto",
});

// títulos
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-titulo",
});

export const metadata: Metadata = {
  title: "Iván Gentta Portfolio",
  description: "Portfolio fachero de Iván Gentta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${sora.variable} ${spaceGrotesk.variable} font-texto antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
