import { useState } from "react";
import DropdownMenu from "./components/tagsSelectionList";
import Theme from "./components/Theme";
import EditSide from "./components/editside";
import { v4 as uuidv4 } from "uuid";
import { TriangleAlert, OctagonX } from "lucide-react"
import Actions from "./components/action";
// import { Alert } from "@material-tailwind/react";

export default function Main() {
    const [theme, setTheme] = useState([])
    const [alert, setAlert] = useState(false)
    const [selectedElementId, setSelectedElementId] = useState(null)
    let selectedElement = theme.find(item => item.idEl == selectedElementId)
    console.log(selectedElement);

    function handleDelete(id) {
        setTheme((prevElements) => prevElements.filter((item) => item.idEl !== id))
    }
    function handleAdd(tag) {
        let newElem = {
            idEl: uuidv4(),
            tag: tag,
            class: "",
            id: "",
            textColor: "",
            backgroundColor: "",
            borderColor: "",
            fontFamily: "serif",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: ["auto", "px"],
            textAlign: "left",
            width: ["auto", "px"],
            height: ["auto", "px"],
            margin: [0, "px"],
            padding: [0, "px"],

        }
        let isAdded = (theme.filter(items => items.tag == tag).length == 0) ? false : true;
        if (isAdded) {
            setTimeout(() => {
                setAlert(false);
            }, 7000)
            setAlert(true);
            return;
        }

        setTheme((prevElements) => [...prevElements, newElem])

    }
    function handleEdit(id) {
        setSelectedElementId(id)
    }
    function EditFormHandler(property, value, arr = false, index = 0) {
        let newElement
        if (!arr) {
            newElement = { ...selectedElement, [property]: value }; // Corrected: Ensure you spread the selectedElement
        } else {
            let newVal = selectedElement[property]
            newVal[index] = value;
            newElement = { ...selectedElement, [property]: newVal }; // Corrected: Ensure you spread the selectedElement

        }
        setTheme((oldTheme) => {
            let newTheme = oldTheme.map((element) => {
                // Return the updated element if it matches the selectedElementId
                return element.idEl === selectedElementId ? newElement : element;
            });
            return newTheme;
        });
    }
    function tagAlreadyExistsAlert() {
        return <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-8/12 bg-orange-400 rounded-lg p-2 flex items-center justify-starts gap-2 text-white font-rubik text-xl `}>
            <TriangleAlert color="white" strokeWidth={2} size={30} />
            <p>you have already added the tag to your Theme</p>
            <OctagonX color="white" strokeWidth={2} size={30} className="cursor-pointer ml-auto transition-transform ease-in-out duration-150 hover:scale-110" onClick={() => setAlert(false)} />
        </div>;
    }
    return (
        <>
            <main className="grid grid-cols-12 gap-4 " >
                <DropdownMenu handleAdd={handleAdd} />
                <Theme theme={theme} handleDelete={handleDelete} handleEdit={handleEdit} selectedElement={selectedElementId} />
                <EditSide element={selectedElement} EditFormHandler={EditFormHandler} />
                {/* <p className="col-span-4 bg-white shadow-lg p-4 rounded-lg hidden md:block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quidem id molestias accusantium voluptates, dolorem iusto cupiditate vero similique ipsum nulla, blanditiis dignissimos sapiente. Minus aliquam voluptatum quidem dolorum soluta.</p> */}
                {alert && tagAlreadyExistsAlert()}
            </main >
            <Actions theme={theme} />
        </>
    );
}

