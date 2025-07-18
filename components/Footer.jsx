"use client";
import { useMyContext } from "@/Provider/MyContextProvider";
export default function Footer() {
    const { theme } = useMyContext();
    return (
        <footer
            className={`flex  h-15 justify-center items-center ${
                theme === "light"
                    ? "bg-blue-600"
                    : "bg-gray-900 border-t-1 border-white"
            } text-white w-full`}
        >
            &copy; 2025 La Cité
        </footer>
    );
}
