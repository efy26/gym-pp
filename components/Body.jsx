"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMyContext } from "@/Provider/MyContextProvider";

export default function Body({ children }) {
    const { theme } = useMyContext();
    return (
        <body className="flex flex-col min-h-screen">
            <Header />
            <main
                className={`flex-1 ${
                    theme === "light" ? "white" : "bg-gray-900 text-white"
                }`}
            >
                {children}
            </main>
            <Footer />
        </body>
    );
}
