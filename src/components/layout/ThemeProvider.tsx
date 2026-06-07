"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider( { children } : { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute='class' defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <div className="w-full min-h-screen flex flex-col">{children}</div>
        </NextThemesProvider>
    );
}