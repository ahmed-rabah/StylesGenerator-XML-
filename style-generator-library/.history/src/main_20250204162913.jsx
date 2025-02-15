import DropdownMenu from "./components/tagsSelectionList";

export default function Main() {
    return (
        <main className="grid grid-cols-12 gap-4 min-h-screen">
            <DropdownMenu />
            <p className="col-span-12 md:col-span-6 bg-white shadow-lg p-6 rounded-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum delectus voluptatem rerum? Architecto dolorum molestias eligendi doloribus eveniet vel alias minus. Itaque, esse! Molestias laboriosam provident necessitatibus aut dolorum. </p>
            <p className="col-span-4 bg-white shadow-lg p-4 rounded-lg hidden md:block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quidem id molestias accusantium voluptates, dolorem iusto cupiditate vero similique ipsum nulla, blanditiis dignissimos sapiente. Minus aliquam voluptatum quidem dolorum soluta.</p>
            {/* <Details /> */}
        </main>
    );
}