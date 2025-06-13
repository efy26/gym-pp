import Image from "next/image";
import twitter from "@/public/img/twitter.webp";
import instagram from "@/public/img/instagram.webp";
import facebook from "@/public/img/facebook.jpg";

export default function Footer() {
    return (

        <footer className="flex justify-center flex-col h-35 items-center text-white mt-10">
            <div id="img-block" className="flex justify-between w-30">
                <a href="https://www.facebook.com/" target="_blank">
                    <Image src={facebook} alt="facebook" id="logo" className="size-7 cursor-pointer rounded-lg"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <Image src={instagram} alt="instagram" id="logo" className=" size-7 cursor-pointer rounded-lg"/>
                </a>
                <a href="https://www.x.com/" target="_blank">
                    <Image src={twitter} alt="x" id="logo" className=" size-7 cursor-pointer rounded-lg"/>
                </a>
            </div>
            <p className="mt-10">
                &copy; 2025 Gym-app, créer par le groupe gym-app.
            </p>
        </footer>
    );
}