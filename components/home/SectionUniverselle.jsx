import Image from "next/image";
import logo from "@/public/img/logos.webp";
import Link from "next/link";

export default function SectionUniverselle() {
    return (
        <section id="section-un" className="bg-[url(@/public/img/image.webp)] bg-cover bg-start bg-no-repeat min-w-100 h-100 flex  flex-col items-center">
            <Link href="/">
                <Image  src={logo} alt="Logo" id="logo" className="size-40 mt-80 cursor-pointer"/>
            </Link>
        </section>
    )
}
