import { Edit, Trash2 } from "lucide-react";
import { names } from "./tags";

export default function Theme(props) {
    return (
        <div className="col-span-12 md:col-span-6 bg-white shadow-lg p-6 rounded-lg">
            <ul>
                {
                    props.theme.map(elem => (
                        <ThemeElement key={elem.id} elem={elem} handleDelete={props.handleDelete} handleEdit={props.handleEdit} selectedElement={props.selectedElement} />
                    ))
                }
            </ul>
        </div>
    )
}

function ThemeElement({ elem, handleDelete, handleEdit, selectedElement }) {

    let title = names[elem.tag];
    let selected = elem.id === selectedElement;
    return (
        <li key={elem.id}
            className={`border p-2 rounded-xl flex justify-between items-center mb-2 ${selected ? "bg-green-300 border-gray-700" : ""}`}>
            <p className={`text-2xl ${selected ? "text-[#2973B2]" : "text-emerald-600"}`}>
                {title} : <span className="text-3xl font-semibold text-blue-950">{`<${elem.tag}>`}</span>
            </p>
            <div className="flex justify-end items-center gap-x-1">
                <Edit onClick={() => handleEdit(elem.id)} className="cursor-pointer text-blue-600 transition-transform ease-in-out duration-150 hover:scale-110" strokeWidth={1.5} size={28} />
                <Trash2 onClick={() => handleDelete(elem.id)} className="cursor-pointer text-red-600 transition-transform ease-in-out duration-150 hover:scale-110" strokeWidth={1.5} size={28} />
            </div>
        </li>
    )
}


