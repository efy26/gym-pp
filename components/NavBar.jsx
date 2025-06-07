import { IoMdMenu } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
export default function NavBar({setPage}) {
    return (
        <nav id="">
            <ul id="menu-liens">

                <li className="cursor-pointer" onClick={() => {setPage('home')}}>Home</li>
                <li className="cursor-pointer" onClick={() => {setPage('training')}}>Training</li>
                <li className="cursor-pointer" onClick={() => {setPage('about')}}>About</li>
                <li className="cursor-pointer" onClick={() => {setPage('contact')}}>Contact</li>
            </ul>
        </nav>
    );
}
