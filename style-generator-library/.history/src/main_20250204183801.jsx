import { useState } from "react";
import DropdownMenu from "./components/tagsSelectionList";
import Theme from "./components/Theme";
import { v4 as uuidv4 } from "uuid";

export default function Main() {
    const [theme, setTheme] = useState([])

    function handleDelete(id) {
        setTheme((prevElements) => prevElements.filter((item) => item.id !== id))
    }
    function handleAdd(tag) {
        let newElem = {
            "id": uuidv4(),
            "tag": tag,
            "textColor": "",
            "backgroundColor": "",
            "borderColor": "",
            "fontFamily": "",
            "fontStyle": "",
            "fontWeight": "",
            "fontSize": [null, "px"],
            "fontUnit": "px",
            "textAlign": "left",
            "width"

                    }
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