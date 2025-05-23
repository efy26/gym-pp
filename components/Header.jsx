import Image from "next/image";
import logo from "@/public/img/logos.webp";
import NavBar from "@/components/NavBar";
import BackGround from "@/public/img/image.webp";
export default function Header() {
    return (
        <header class="flex  h-15 items-center bg-green-900 text-white w-full gap-2">
            <Image src={logo} alt="Logo"  class="ml-2 size-7 rounded-sm"/>
            <NavBar  />
        </header>
    );
}
