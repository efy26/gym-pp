"use client";
import React from 'react';
import SectionUniverselle from "@/components/home/SectionUniverselle";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'



export default function Contact() {
    const [result, setResult] = useState('');
    const [success, setSuccess] = useState(true);
     // Ininitialisation du formulaire avec react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm({
        defaultValues: {
            nom: "",
            email: "",
            sujet: "",
            message: "",
        },
        mode: "onBlur", // Validation on blur
    });

    const sendEmail = () => {
        const templateParams = {
            name: getValues().nom,
            email: getValues().email,
            subject: getValues().sujet,
            message: getValues().message,
        };
// ICI=============================================================
       
    return (
        <div  className='flex flex-col'>
            <SectionUniverselle/>
            <div id='container' className='flex justify-center'>
                <div id='contact-page'>
                    <h1 id='titre-page-contact'>CONTACT</h1>
                    <div id='contact-form'>
                        <span>
                            <p>400 rue normand</p>
                            <p>J8Y 5C5, Gatineau, QC</p>
                            <p>Tel : 819-765-8600</p>
                            <p>E-mail : gym-app@gmail.com</p>
                        </span>
                            <form 
                                onSubmit={handleSubmit(sendEmail)}
                                noValidate
                            >
                                <div id='block-form'>
                                    <div id='input-text'>
                                        <input
                                            {...register("nom", {
                                                required: "Champ obligatoire",
                                            })}
                                        type="text" placeholder='Nom'/>
                                        {errors.nom && (
                                        <div className="text-red-500 text-sm">
                                            {errors.nom.message}
                                        </div>
                                    )}
                                        <input 
                                        {...register("email", {
                                            required: "Champ obligatoire",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Adresse email invalide",
                                            },
                                        })}
                                        type="email" placeholder='Mail'/>
                                        {errors.email && (
                                            <div className="text-red-500 text-sm">
                                                {errors.email.message}
                                            </div>
                                        )}
                                        <input 
                                        {...register("sujet", {
                                            required: "Champ obligatoire",
                                        })}
                                        type="text" placeholder='sujet'/>
                                        {errors.sujet && (
                                            <div className="text-red-500 text-sm">
                                                {errors.sujet.message}
                                            </div>
                                        )}
                                    </div>
                                    {/* <textarea 
                                    {...register("message", {
                                        required: "Champ obligatoire",
                                    })}
                                    name="" id="textarea" placeholder='Redigez votre message ici...'></textarea> */}

                                    <textarea
                        {...register("message", {
                            required: "Champ obligatoire",
                        })}
                        id="textarea"
                        rows="4"
                        
                    ></textarea>
                                    {errors.message && (
                                        <div className="text-red-500 text-sm">
                                            {errors.message.message}
                                        </div>
                                    )}
                                </div>
                                <input id="btn-contact" type="submit" value="Envoyer" />
                            </form>
                    </div>
                </div>
            </div>
        </div>
    
    );
}