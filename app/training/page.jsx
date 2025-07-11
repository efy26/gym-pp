import Contact from "@/components/Training"

export const metadata = {
    title: 'training | gym-app',
    description: 'Page de training',
    openGraph: {
        title: 'training | gym-app',
        description: 'Page de trainig',
        images: ['./react.webp']
    }
}

export default function Page(){
    return <>
        <Contact/>
    </>
}