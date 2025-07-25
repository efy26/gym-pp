"use client";
import { useMyContext } from "@/Provider/MyContextProvider";
export default function Footer() {
    const { theme } = useMyContext();
    return (
        <footer
            className={`flex  h-15 justify-center items-center ${
                theme === "light"
                    ? "bg-white text-black"
                    : "bg-gray-900 text-white"
            } `}
        >
            &copy; 2025 La Cité
        </footer>
    );
}
