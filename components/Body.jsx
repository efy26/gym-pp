"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMyContext } from "@/Provider/MyContextProvider";

export default function Body({ children }) {
    const { theme } = useMyContext();
    return (
        <body className={`flex flex-col min-h-screen ${
                theme === "light"
                    ? "bg-white text-black"
                    : "bg-gray-900 text-white"
            }`}>
            <Header />
            <main
                className={`flex-1 `}
            >
                {children}
            </main>
            <Footer />
        </body>
    );
}
