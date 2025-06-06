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
<<<<<<< HEAD
                <Image  src={Timer2} alt="Logo" id="timer2-img" />
=======
                <Image  src={Timer2} alt="Logo" id="timer2-img" className=""/>
>>>>>>> mise a joue design page contact
                <div id='timer2'>
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
            </div>;
}