import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import { SmoothScroll } from "@/components/provider/smooth-scroll";
import { QueryProvider } from "@/lib/query-client";
import { Bowlby_One, Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

const BowlbyOne = Bowlby_One({
    variable: "--font-bowlby",
    subsets: ["latin"],
    weight: ["400"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const canelaText = localFont({
    variable: "--font-canela",
    src: [
        { path: "../../public/fonts/canela/CanelaText-Thin-Trial.otf", weight: "100", style: "normal" },
        { path: "../../public/fonts/canela/CanelaText-ThinItalic-Trial.otf", weight: "100", style: "italic" },
        { path: "../../public/fonts/canela/CanelaText-Light-Trial.otf", weight: "300", style: "normal" },
        { path: "../../public/fonts/canela/CanelaText-LightItalic-Trial.otf", weight: "300", style: "italic" },
        { path: "../../public/fonts/canela/CanelaText-Regular-Trial.otf", weight: "400", style: "normal" },
        { path: "../../public/fonts/canela/CanelaText-RegularItalic-Trial.otf", weight: "400", style: "italic" },
        { path: "../../public/fonts/canela/CanelaText-Medium-Trial.otf", weight: "500", style: "normal" },
        { path: "../../public/fonts/canela/CanelaText-MediumItalic-Trial.otf", weight: "500", style: "italic" },
        { path: "../../public/fonts/canela/CanelaText-Bold-Trial.otf", weight: "700", style: "normal" },
        { path: "../../public/fonts/canela/CanelaText-BoldItalic-Trial.otf", weight: "700", style: "italic" },
        { path: "../../public/fonts/canela/CanelaText-Black-Trial.otf", weight: "900", style: "normal" },
        { path: "../../public/fonts/canela/CanelaText-BlackItalic-Trial.otf", weight: "900", style: "italic" },
    ],
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
