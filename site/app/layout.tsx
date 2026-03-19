import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { fontVariables } from "./fonts";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abelardodiaz.dev"),
  title: {
    default: "Abelardo Diaz - Full-Stack Developer & AI Agent Architect",
    template: "%s | Abelardo Diaz",
  },
  description:
    "Patterns de produccion real en espanol. Multi-AI, WhatsApp API, Shopify MX, Claude agents.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Abelardo Diaz",
    url: "https://abelardodiaz.dev",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@abelardodiaz",
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B1XR6RGWG3"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-B1XR6RGWG3')`}
      </Script>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
