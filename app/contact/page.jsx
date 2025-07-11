import Contact from "@/components/Contact"

export const metadata = {
    title: 'Contact | gym-app',
    description: 'Page de Contact',
    openGraph: {
        title: 'Contact | gym-app',
        description: 'Page de Contact pour information',
        images: ['./react.webp']
    }
}

export default function Page(){
    return <>
        <Contact/>
    </>
}