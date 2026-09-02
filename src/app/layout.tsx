import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollUpButton } from "@/components/ScrollUpButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Regan Dewa - Portfolio",
  description: "Portfolio of Regan Dewa Dzulfikar - Independent Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${oswald.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="w-full overflow-x-hidden flex flex-col relative antialiased selection:bg-lightMain selection:text-lightBg dark:selection:bg-darkMain dark:selection:text-darkBg bg-lightBg text-lightMain dark:bg-darkBg dark:text-darkMain font-sans">
        <Providers>
          <ThemeToggle />
          <ScrollReveal />
          <ScrollUpButton />
          {children}
        </Providers>
      </body>
    </html>
  );
}
