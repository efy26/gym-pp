"use client";

import Image from "next/image";
import Timer2 from "@/public/img/timer2.jpeg";
import { useEffect, useState } from 'react'

export default function Timer({ compte }) {
    const timerShow = new Date("2025-12-01T10:00:20").getTime();
    const dateNow = Date.now();
    const difference = dateNow - timerShow;
    const secondes = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const heures = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));

    const [decompte, setCompte] = useState(compte || timerShow);
    useEffect(() => {
        // Exécuté au chargement du composant dans la page
        const intervalID = setInterval(() => {
            if (decompte > 0) {
                setCompte(decompte - 1);
            } else {
                clearInterval(intervalID);
            }
        }, 1000);
        return () => {
            // Exécuté lorsque le composant est enlevé de la page
            clearInterval(intervalID);
        };
    }, [decompte]);
    return <div id='timer2-container'>

                <Image  src={Timer2} alt="Logo" id="timer2-img" className=""/>
                <div id='timer2'>
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
                    <div id="container-countTimer1">
                        <span>
                            {jours} 
                            <div>Jr(s)</div>
                        </span>
                        <span>
                            {heures}
                            <div>Hr(s)</div>
                        </span>
                        <span>
                            {minutes}
                            <div>Min(s)</div>
                        </span>
                        <span>
                            {secondes}
                            <div>Séc(s)</div>
                        </span>
                    </div>
                </div>
            </div>;
}