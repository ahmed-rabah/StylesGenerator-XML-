import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import tags from "./tags"
export default function DropdownMenu() {
    // const [open, setOpen] = useState(false);
    console.log(tags);

    return (
        <div className="relative inline-block">

            <ul>
                {Object.entries(tags).map(([category, categoryItems]) => (
                    <MenuItem key={category} category={category} categoryItems={categoryItems} />
                ))}
            </ul>
        </div>
    );
}
function MenuItem({ category, categoryItems }) {
    const [open, setOpen] = useState(false);
    return (
        <li key={category}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center  bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                {category} {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>


        </li>)
}
