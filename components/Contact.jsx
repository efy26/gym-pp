import React from 'react';
import SectionUniverselle from "@/components/home/SectionUniverselle";

export default function Contact() {
    return (
        <div  className='flex flex-col'>
            <SectionUniverselle/>
            <div id='container' className='flex justify-center'>
                <div id='contact-page'>
                    <h1 id='titre-page-contact'>CONTACT</h1>
                </div>
            </div>
        </div>
    
    );
}