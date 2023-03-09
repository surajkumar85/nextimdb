"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className=" dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors min-h-screen select-none duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
