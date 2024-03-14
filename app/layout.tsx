import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SideBar } from "@/components/side-bar";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import TopBar from "@/components/top-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "flex flex-row")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SideBar className={""} />
          <main className={"flex flex-col min-h-screen w-full"}>
            <TopBar />
            <div className="flex p-4">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
