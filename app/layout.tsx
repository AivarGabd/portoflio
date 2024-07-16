import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NextUIProvider } from "@nextui-org/react";
import { headers } from "next/headers";
import { userAgent } from "next/server";
import LayoutClient from "./layoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aivar Gab",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const reqUserAgent = userAgent({ headers: headers() });

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={cn(
          "bg-[#111110] text-[#EEEEEC] min-h-screen dark",
          inter.className
        )}
      >
        <LayoutClient reqUserAgent={reqUserAgent}>
          <NextUIProvider>
            <main className="max-w-[644px] pt-12 mx-auto ">{children}</main>
          </NextUIProvider>
        </LayoutClient>
      </body>
    </html>
  );
}
