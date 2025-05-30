import React from 'react';
import SectionUn from "@/components/home/SectionUn";
import SectionDeux from "@/components/home/SectionDeux";
import Image from "next/image";
export default function Home() {
    return (
        <div className='flex flex-col'>
            <SectionUn/>
            {/* <SectionDeux/> */}
        </div>

    );
}
