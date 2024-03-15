'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SideBar } from "@/components/side-bar";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import TopBar from "@/components/top-bar";
import { Provider } from "react-redux";
import { store } from "@/features/store";
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Candy Factory",
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
       <Provider store={store}>

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
      </Provider>

      </body>
    </html>
  );
}
