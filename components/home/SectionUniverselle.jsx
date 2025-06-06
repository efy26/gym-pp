'use client';

import Image from "next/image";
import logo from "@/public/img/logos.webp";
import NavBar from "@/components/NavBar";


import { useState } from "react";


export default function SectionUniverselle() {
    return (
        <section id="section-un" className="bg-[url(@/public/img/image.webp)] bg-cover bg-start bg-no-repeat min-w-100 h-100 flex  flex-col items-center">
    
            <Image  src={logo} alt="Logo" id="logo" className="size-40 mt-80 cursor-pointer"/>
        </section>
    )
}
