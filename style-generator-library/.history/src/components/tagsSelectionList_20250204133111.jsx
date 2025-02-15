import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import tags from "./tags"
export default function DropdownMenu() {
    const [open, setOpen] = useState(false);
    console.log(tags);

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center  bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Select an option {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {open && (
                <div className="absolute left-0  w-48 bg-white shadow-lg rounded-lg border border-gray-200">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Option 1
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Option 2
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Option 3
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
