import { useState } from "react";
import DropdownMenu from "./components/tagsSelectionList";
import Theme from "./components/Theme";

export default function Main() {
    const [theme, setTheme] = useState([{ "id": 1, "tag": "h1" }, { "id": 2, "tag": "div" }, { "id": 3, "tag": "option" },])

    function handleDelete(id) {
        setTheme((oldTheme) => oldTheme.filter((item) => item.id != id))
    }
    return (
        <main className="grid grid-cols-12 gap-4 min-h-screen">
            <DropdownMenu />
            <Theme theme={theme} handleDelete={handleDelete} />
            <p className="col-span-4 bg-white shadow-lg p-4 rounded-lg hidden md:block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quidem id molestias accusantium voluptates, dolorem iusto cupiditate vero similique ipsum nulla, blanditiis dignissimos sapiente. Minus aliquam voluptatum quidem dolorum soluta.</p>
            {/* <Details /> */}
        </main>
    );
}