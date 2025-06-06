import NavBar from "@/components/NavBar";

export default function Header({changePage}) {
    return (
        <header className="flex justify-center sticky top-0 flex h-27 items-center bg-white text-black w-full gap-2 px-8">
            <NavBar setPage = {changePage} />
        </header>
    );
}
