import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function NavBar() {
    const { t } = useTranslation("common");
    const { t: tHeader } = useTranslation("header");
    return (
        <nav>
            <ul id="menu-liens">
                <li className="cursor-pointer" >
                    <Link href="/">{tHeader("header.home")}</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/training">{tHeader("header.training")}</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/about">{tHeader("header.about")}</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/contact">{tHeader("header.contact")}</Link>
                </li>
            </ul>
        </nav>
    );
}
