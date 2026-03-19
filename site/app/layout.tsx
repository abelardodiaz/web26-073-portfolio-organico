import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Abelardo Diaz - Full-Stack Developer & AI Agent Architect",
    template: "%s | Abelardo Diaz",
  },
  description:
    "Patterns de produccion real en espanol. Multi-AI, WhatsApp API, Shopify MX, Claude agents.",
  openGraph: {
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={fontVariables} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("site-theme")||"editorial";var m=localStorage.getItem("site-mode")||"dark";document.documentElement.classList.add("theme-"+t);if(m==="dark")document.documentElement.classList.add("dark")})()`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
