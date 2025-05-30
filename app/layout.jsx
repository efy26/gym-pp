'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Training from "@/components/Training";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/app/page";

import { useState } from "react";


import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
// export const metadata = {
//     title: "Gym-app",
//     description: "Demo Cours Programmation web avancé",
// };
export default function RootLayout({ children }) {
    const [currentPage, setCurrentPage] = useState("home");
    return (
        <html lang="fr">
            <body className="flex flex-col min-h-screen">
                <Header changePage = {setCurrentPage}/>
                <main className="flex-1">
                     {/* {children} */}
                     {currentPage === "home" ? (
                        <Home />
                        
                    ) : currentPage === "training" ? (
                        <Training />
                    ) : currentPage === "about" ? (
                        <About />
                    ) : currentPage === "contact" ? (
                        <Contact />
                    ) : (
                        <div>404 : Page introuvable</div>
                    )}
                </main>
                <Footer />
            </body>
        </html>
    );
}
