import DropdownMenu from "./components/tagsSelectionList";

export default function Main() {
    return (
        <main className="grid grid-cols-12 gap-4 min-h-screen">
            <DropdownMenu />
            <Theme />
            <Details />
        </main>
    );
}