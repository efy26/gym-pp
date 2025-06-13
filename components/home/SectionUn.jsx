import Image from "next/image";
import logo from "@/public/img/logos.webp";
import Link from "next/link";

export default function SectionUn() {
    return (
        <section id="section-un" className="bg-[url(@/public/img/image.webp)] bg-cover bg-center bg-no-repeat min-w-100 h-200 flex  flex-col items-center">
            <Link id="link-home" href="/" className="size-40 mt-80 cursor-pointer">
                <Image src={logo} alt="Logo" id="logo" />
            </Link>
            <p id="citation-home" className="max-w-170 font-mono mt-10 text-shadow-lg/500">
                "Chez nous, le fitness ne se limite
                pas aux machines et aux haltères : 
                c’est une famille soudée, où chaque membre se 
                motive et se dépasse. Ici, on ne vient pas seulement 
                pour transpirer, mais pour grandir, ensemble. Warriors, 
                débutants ou confirmés, vous trouverez l’énergie et le soutien 
                pour repousser vos limites. Rejoignez-nous et faites partie d’une équipe qui ne lâche rien "
            </p>
        </section>
    )
}
