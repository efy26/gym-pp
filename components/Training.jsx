import React from 'react';
import SectionUniverselle from "@/components/home/SectionUniverselle";

export default function Training() {
    return (
        <div className='flex flex-col'>
            <SectionUniverselle/>
            <div id='container' className='flex justify-center'>
                <div id='training-page'>
                <h1 id='titre-page-training'>TRAINING</h1>
                </div>
            </div>
        </div>
    
    );
}