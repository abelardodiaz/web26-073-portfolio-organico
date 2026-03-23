import { Inter, JetBrains_Mono, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-editorial-mono",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-terminal",
  display: "swap",
  preload: false,
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-terminal-mono",
  display: "swap",
  preload: false,
});

export const fontVariables = [
  inter.variable,
  jetbrainsMono.variable,
  spaceGrotesk.variable,
  ibmPlexMono.variable,
].join(" ");
