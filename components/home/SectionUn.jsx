import Image from "next/image";
import logo from "@/public/img/logos.webp";
export default function SectionUn({changePage}) {
    return (
        <section className="bg-[url(@/public/img/strong.webp)] bg-cover bg-center bg-no-repeat min-w-100 min-h-170 flex  flex-col items-center">
            <Image onClick={() => {changePage('home')}} src={logo} alt="Logo" id="logo" className="ml-2 size-40 mt-15 cursor-pointer rounded-lg ring-3"/>
            <p id="citation-home" className="max-w-150 text-1xl font-mono mt-30">
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
