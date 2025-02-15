import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import tags from "./tags"
export default function DropdownMenu({ handleAdd }) {
    // const [open, setOpen] = useState(false);
    console.log(tags);

    return (
        <div className="relative col-span-2 bg-white shadow-lg p-2 rounded-lg hidden md:block border-r">

            <ul>
                {Object.entries(tags).map(([category, categoryItems]) => (
                    <MenuItem key={category} category={category} categoryItems={categoryItems} handleAdd={handleAdd} />
                ))}
            </ul>
        </div>
    );
}
function MenuItem({ category, categoryItems, handleAdd }) {
    const [open, setOpen] = useState(false);
    let btnBg = open ? "bg-gray-100" : "";
    return (
        <li key={category} >
            <button
                onClick={() => setOpen(!open)}
                className={`flex items-center justify-between w-[100%]  rounded-sm px-4 py-2 ${btnBg}  border hover:bg-gray-100 cursor-pointer`}
            >
                <p className="font-rubik text-sm">{category}</p>
                {open ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronDown size={20} strokeWidth={2.5} />}
            </button>

            {open && (
                <div className="bg-white shadow-lg rounded-sm border border-gray-200">
                    <ul className="pt-2">
                        {
                            categoryItems.map((item, index) => (
                                <li key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b-2 text-center"
                                    onClick={() => { handleAdd(item) }}
                                >
                                    {item}
                                </li>

                            ))
                        }
                    </ul>
                </div>
            )}
        </li>)
}
