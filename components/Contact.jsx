"use client";
import React from 'react';
import SectionUniverselle from "@/components/home/SectionUniverselle";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'



export default function Contact() {
    const [result, setResult] = useState('');
    const [success, setSuccess] = useState(false);
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
        

emailjs
            .send(
                "service_y7ncq9e", // Service ID
                "template_079ibwf", // Template ID
                templateParams,
                "X1N170CkLqZC-0xe0" //USER PUBLIC KEY
            )
            .then(
                (result) => {
                    setResult("message envoye avec succes");
                    setSuccess(true);
                    // Reset the form after successful submission
                    reset();
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            );
    };
 
       
    return (
        <div className='flex flex-col bg-gray-50 min-h-screen'>
            <SectionUniverselle/>
            <div className='container mx-auto px-4 py-12 max-w-6xl'>
                <div className='bg-white rounded-lg shadow-xl overflow-hidden'>
                    <div className='md:flex'>
                        {/* Section Informations de contact */}
                        <div className='md:w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 p-8 text-white'>
                            <h2 className='text-2xl font-bold mb-6'>Nous contacter</h2>
                            
                            <div className='space-y-4'>
                                <div className='flex items-start'>
                                    <svg className='w-5 h-5 mt-1 mr-3 flex-shrink-0' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <div>
                                        <p>400 rue Normand</p>
                                        <p>J8Y 5C5, Gatineau, QC</p>
                                    </div>
                                </div>
                                
                                <div className='flex items-center'>
                                    <svg className='w-5 h-5 mr-3 flex-shrink-0' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <p>Tel : 819-765-8600</p>
                                </div>
                                
                                <div className='flex items-center'>
                                    <svg className='w-5 h-5 mr-3 flex-shrink-0' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <p>E-mail : gym-app@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className='mt-8'>
                                <h3 className='text-lg font-semibold mb-3'>Horaires d'ouverture</h3>
                                <div className='space-y-2'>
                                    <p className='flex justify-between'><span>Lundi - Vendredi</span> <span>6h - 22h</span></p>
                                    <p className='flex justify-between'><span>Samedi</span> <span>8h - 20h</span></p>
                                    <p className='flex justify-between'><span>Dimanche</span> <span>9h - 18h</span></p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Section Formulaire */}
                        <div className='md:w-2/3 p-8'>
                            <h1 className='text-3xl font-bold text-gray-800 mb-6'>Envoyez-nous un message</h1>
                            
                            {success && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                                    {result}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit(sendEmail)} noValidate>
                                <div className='space-y-6'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div>
                                            <label htmlFor="nom" className='block text-sm font-medium text-gray-700 mb-1'>Nom *</label>
                                            <input
                                                {...register("nom", { required: "Ce champ est obligatoire" })}
                                                id="nom"
                                                type="text"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${errors.nom ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder='Votre nom'
                                            />
                                            {errors.nom && (
                                                <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>
                                            )}
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email *</label>
                                            <input
                                                {...register("email", {
                                                    required: "Ce champ est obligatoire",
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: "Adresse email invalide",
                                                    },
                                                })}
                                                id="email"
                                                type="email"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder='Votre email'
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="sujet" className='block text-sm font-medium text-gray-700 mb-1'>Sujet *</label>
                                        <input
                                            {...register("sujet", { required: "Ce champ est obligatoire" })}
                                            id="sujet"
                                            type="text"
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${errors.sujet ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder='Objet de votre message'
                                        />
                                        {errors.sujet && (
                                            <p className="mt-1 text-sm text-red-600">{errors.sujet.message}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1'>Message *</label>
                                        <textarea
                                            {...register("message", { required: "Ce champ est obligatoire" })}
                                            id="message"
                                            rows={5}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder='Votre message...'
                                        ></textarea>
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                        )}
                                    </div>
                                    
                                    <div className='flex justify-end'>
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                        >
                                            Envoyer le message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}