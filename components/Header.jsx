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
                    ? "bg-white text-black"
                    : "bg-gray-900 border-white"
            } w-full`}
        >
            <NavBar />
            <button
                className="ml-auto mr-4 text-2xl cursor-pointer"
                onClick={toggleTheme}
            >
                {theme === "light" ? <FaMoon /> : <IoMdSunny />}
            </button>
            <select
                onChange={(e) => i18next.changeLanguage(e.target.value)}
                defaultValue={i18next.language}
                className="cursor-pointer ml-4 p-2 rounded"
            >
                <option className="cursor-pointer" value="en">EN</option>
                <option value="fr">FR</option>
            </select>
        </header>
    );
}
