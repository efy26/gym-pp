"use client";
import Body from "@/components/Body";

import { Inter } from "next/font/google";
import "./globals.css";

import MyContextProvider from "@/Provider/MyContextProvider";
import i18n from "@/i18next";
import { appWithTranslation } from "next-i18next";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <MyContextProvider>
                <Body children={children}  />
            </MyContextProvider>
        </html>
    );
}
