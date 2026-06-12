import type { Metadata } from "next";
import { QueryProvider } from "@/providers/query-provider";
import { CommandPalette } from "@/components/shared/command-palette";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme-provider";
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
  title: "NeuralOS",
  description: "AI Powered Learning Workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className="min-h-full flex flex-col">
      <TooltipProvider>
        <ThemeProvider>
          <QueryProvider>
            {children}
            <CommandPalette />
          </QueryProvider>
        </ThemeProvider>
      </TooltipProvider>
    </body>
    </html>
  );
}
