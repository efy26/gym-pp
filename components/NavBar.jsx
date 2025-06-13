import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul id="menu-liens">
                <li className="cursor-pointer" >
                    <Link href="/">Home</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/training">Training</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/about">About</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
