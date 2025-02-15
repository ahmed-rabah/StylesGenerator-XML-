import { useState } from "react";
import DropdownMenu from "./components/tagsSelectionList";
import Theme from "./components/Theme";
import { v3 as uuidv1 } from "uuid";

export default function Main() {
    const [theme, setTheme] = useState([{ "id": uuidv1(), "tag": "h1" }, { "id": uuidv1(), "tag": "div" }, { "id": uuidv1(), "tag": "option" },])

    function handleDelete(id) {
        setTheme((prevElements) => prevElements.filter((item) => item.id !== id))
    }
    function handleAdd(tag) {
        let newElem = { "id": uuidv1(), "tag": tag }
        setTheme((prevElements) => [...prevElements, newElem])
    }
    return (
        <main className="grid grid-cols-12 gap-4 min-h-screen">
            <DropdownMenu handleAdd={handleAdd} />
            <Theme theme={theme} handleDelete={handleDelete} />
            <p className="col-span-4 bg-white shadow-lg p-4 rounded-lg hidden md:block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quidem id molestias accusantium voluptates, dolorem iusto cupiditate vero similique ipsum nulla, blanditiis dignissimos sapiente. Minus aliquam voluptatum quidem dolorum soluta.</p>
            {/* <Details /> */}
        </main>
    );
}