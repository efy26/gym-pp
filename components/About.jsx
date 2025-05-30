import React from 'react';
import SectionUniverselle from "@/components/home/SectionUniverselle";

export default function About() {
    return (
        <div className='flex flex-col'>
            <SectionUniverselle/>
            <div id='container' className='flex justify-center'>
                <div id='about-page'>
                    <h1 id='titre-page-about'>ABOUT</h1>
                </div>
            </div>
            
        </div>
    
    );
}