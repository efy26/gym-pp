import { IoMdMenu } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
export default function NavBar() {
    return (
        <nav class="flex text-center ">
            <IoMdMenu className="text-2xl sm:hidden" />
            <ul className="flex space-x-4 hidden sm:flex">
                <li>Home</li>
                <li>Training</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
