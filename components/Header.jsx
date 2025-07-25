"use client";
import Image from "next/image";
import logo from "@/public/img/image.webp";
import NavBar from "@/components/NavBar";

import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

import { useMyContext } from "@/Provider/MyContextProvider";
import i18next from "i18next";

export default function Header() {
    const { theme, toggleTheme } = useMyContext();
    return (
        <header
            className={`flex  h-15 items-center ${
                theme === "light"
                    ? "bg-blue-600"
                    : "bg-gray-900 border-b-1 border-white"
            } text-white w-full`}
        >
            <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="cursor-pointer"
            />
            <NavBar />
            <button
                className="ml-auto mr-4 text-2xl cursor-pointer"
                onClick={toggleTheme}
                name="theme-toggle-button"
            >
                {theme === "light" ? <FaMoon /> : <IoMdSunny />}
            </button>
            <select
                onChange={(e) => i18next.changeLanguage(e.target.value)}
                defaultValue={i18next.language}
                className="bg-blue-700 text-white ml-4 p-2 rounded"
            >
                <option value="en">EN</option>
                <option value="fr">FR</option>
            </select>
        </header>
    );
}
