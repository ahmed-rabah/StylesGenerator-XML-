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
        <li key={category} >
            <button
                onClick={() => setOpen(!open)}
                className="flex items-baseline justify-between w-48  px-4 py-2 rounded-sm"
            >
                <p className="font-rubik text-xl">{category}</p>
                {open ? <ChevronUp size={20} strokeWidth={3} /> : <ChevronDown size={20} strokeWidth={3} />}
            </button>

            {open && (
                <div className="bg-white shadow-lg rounded-sm border border-gray-200">
                    <ul className="py-2">
                        {
                            categoryItems.map((item, index) => (
                                <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    {item}
                                </li>

                            ))
                        }
                    </ul>
                </div>
            )}
        </li>)
}
