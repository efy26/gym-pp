import React from 'react';
import SectionUniverselle from "@/components/home/SectionUniverselle";
import Timer from "@/components/Timer";
import Timer2 from "@/components/Timer2";
import Timer3 from "@/components/Timer3";

export default function Training() {
    return (
        <div className='flex flex-col'>
            <SectionUniverselle/>
            <div id='container' className='flex justify-center'>
                <div id='training-page'>
                    <h1 id='titre-page-training'>TRAINING</h1>
                    <Timer/>
                    <Timer2/>
                    <Timer3/>
                </div>
            </div>
        </div>
    
    );
}