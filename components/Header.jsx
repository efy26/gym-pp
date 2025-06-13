import NavBar from "@/components/NavBar";

export default function Header() {
    return (
        <header className="flex justify-center sticky top-0 flex h-27 items-center bg-white text-black w-full gap-2 px-8">
            <NavBar />
        </header>
    );
}
