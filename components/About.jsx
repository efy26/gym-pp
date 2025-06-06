import React from 'react';
import SectionUniverselle from "@/components/home/SectionUniverselle";
import Image from "next/image";
import Timer1 from "@/public/img/bg-img.avif";

export default function About() {
    return (
        <div className='flex flex-col'>
            <SectionUniverselle/>
            <div id='about-container' className='flex justify-center'>
                    <div id='about-page'>
                        <h1 id='titre-page-about'>ABOUT</h1>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Consequuntur nulla provident 
                                itaque dolor omnis! Delectus corrupti 
                                magnam doloremque non praesentium quis 
                                fugit numquam aliquam quidem quia porro 
                                eaque, dignissimos tempore.
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Consequuntur nulla provident 
                                itaque dolor omnis! Delectus corrupti 
                                magnam doloremque non praesentium quis 
                                fugit numquam aliquam quidem quia porro 
                                eaque, dignissimos tempore.
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Consequuntur nulla provident.
                            </p>
                            <Image  src={Timer1} alt="image About" id="about-img"/>
                        </div>
                    </div>
            </div>
            
        </div>
    
    );
}