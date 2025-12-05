import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import { SmoothScroll } from "@/components/provider/smooth-scroll";
import { QueryProvider } from "@/lib/query-client";
import { Press_Start_2P, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const BowlbyOne = Press_Start_2P({
    variable: "--font-bowlby",
    subsets: ["latin"],
    weight: ["400"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Convivial Futures Institute",
    description:
        "Welcome to Convivial Futures: (Not) a Multidimensional Ninjas' Hideout",
    icons: "/assets/ninjas/2.png",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link
                rel="icon"
                href="/assets/ninjas/2.png>"
                type="image/<generated>"
                sizes="<generated>"
            />
            <body
                className={`${inter.className} ${BowlbyOne.variable} antialiased`}
            >
                <QueryProvider>
                    <Navbar />
                    {/* <SmoothScroll>{children}</SmoothScroll> */}
                    {children}
                    <Toaster />
                </QueryProvider>
            </body>
        </html>
    );
}
