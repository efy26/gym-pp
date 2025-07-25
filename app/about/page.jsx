import About from "@/components/About";


export const metadata = {
    title: 'About | gym app ',
    description: 'Page About',
    openGraph: {
      title: 'About | gym app ',
      description: 'Objectif de la page ',
      images: ['./react.webp']
    },
};


export default function Page(){
    return <>
        <About/>
    </>
}