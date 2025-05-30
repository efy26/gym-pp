import { IoMdMenu } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
export default function NavBar({setPage}) {
    return (
        <nav className="flex text-center ">
            <IoMdMenu className="text-2xl sm:hidden" />
            <ul id="menu-liens" className=" flex justify-around space-x-40 hidden lg:flex">

                <li className="cursor-pointer" onClick={() => {setPage('home')}}>Home</li>
                <li className="cursor-pointer" onClick={() => {setPage('training')}}>Training</li>
                <li className="cursor-pointer" onClick={() => {setPage('about')}}>About</li>
                <li className="cursor-pointer" onClick={() => {setPage('contact')}}>Contact</li>
            </ul>
        </nav>
    );
}
