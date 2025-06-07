import React from 'react';
import SectionUniverselle from "@/components/home/SectionUniverselle";

export default function Contact() {
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
                            <form>
                                <div id='block-form'>
                                    <div id='input-text'>
                                        <input type="text" placeholder='Nom'/>
                                        <input type="email" placeholder='Mail'/>
                                        <input type="tel" placeholder='Telephone'/>
                                    </div>
                                    <textarea name="" id="textarea" placeholder='Redigez votre message ici...'></textarea>
                                </div>
                                <input id="btn-contact" type="submit" value="Envoyer" />
                            </form>
                    </div>
                </div>
            </div>
        </div>
    
    );
}