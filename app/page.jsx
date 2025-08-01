import React from 'react';
import SectionUn from "@/components/home/SectionUn";

export const metadata = {
    title: 'gym-pp | Accueil',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
      title: 'gym-pp | Accueil',
      description: 'Site web présentant les fonctionnalités de React et Next.js.',
      images: ['/react.webp']
    }
}


export default function Home() {
    return (
        <div className='flex flex-col'>
            <SectionUn/>

        </div>

    );
}
