import Image from "next/image";
import logo from "@/public/img/logos.webp";
import Link from "next/link";

export default function SectionUniverselle() {
    return (
        <section id="section-un" className="bg-[url('/img/image.webp')] bg-cover bg-start bg-no-repeat min-w-100 h-100 flex  flex-col items-center">
            <Link id="link-section-universelle" href="/" className="size-40 mt-80 cursor-pointer">
                <Image  src={logo} alt="Logo" id="logo" />
            </Link>
        </section>
    )
}
