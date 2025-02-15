import { useState } from "react";
import DropdownMenu from "./components/tagsSelectionList";
import Theme from "./components/Theme";
import { v4 as uuidv4 } from "uuid";
import { TriangleAlert } from "lucide-react"
// import { Alert } from "@material-tailwind/react";

export default function Main() {
    const [theme, setTheme] = useState([])
    const [alert, setAlert] = useState(false)

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
            "fontSize": ["auto", "px"],
            "textAlign": "left",
            "width": ["auto", "px"],
            "height": ["auto", "px"],
            "margin": [0, "px"],
            "padding": [0, "px"],

        }
        let isAdded = (theme.filter(items => items.tag == tag).length == 0) ? false : true;
        if (isAdded) {
            setAlert(true);
            return;
        }

        setTheme((prevElements) => [...prevElements, newElem])
    }
    return (
        <main className="grid grid-cols-12 gap-4 min-h-screen">
            <DropdownMenu handleAdd={handleAdd} />
            <Theme theme={theme} handleDelete={handleDelete} />
            <p className="col-span-4 bg-white shadow-lg p-4 rounded-lg hidden md:block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quidem id molestias accusantium voluptates, dolorem iusto cupiditate vero similique ipsum nulla, blanditiis dignissimos sapiente. Minus aliquam voluptatum quidem dolorum soluta.</p>
            {alert && tagAlreadyExistsAlert()}
        </main>
    );
}

function tagAlreadyExistsAlert() {
    return <p className="absolute left-[50%] top-[50%] bg-orange-400"> <TriangleAlert /> {`you have already added the tag to your Theme`}</p>;
}