import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Figtree,
  Montserrat,
  Allura,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-logo",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arteblocos e Artefatos",
  description: "Produção artesanal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${montserrat.variable}
        ${allura.variable}
      `}
      suppressHydrationWarning
    >
      <body
        className={`${montserrat.variable} ${allura.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
