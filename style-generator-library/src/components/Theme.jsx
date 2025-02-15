import { Edit, Trash2 } from "lucide-react";
import { names } from "./tags";

export default function Theme(props) {
    return (
        <div className="col-span-12 md:col-span-6 bg-white shadow-lg p-6 rounded-lg border-t-2 mt-1  max-h-[80vh] overflow-scroll hidden-scrollbar">
            <ul>
                {
                    props.theme.map(elem => (
                        <ThemeElement key={elem.idEl} elem={elem} handleDelete={props.handleDelete} handleEdit={props.handleEdit} selectedElement={props.selectedElement} />
                    ))
                }
            </ul>
        </div>
    )
}

function ThemeElement({ elem, handleDelete, handleEdit, selectedElement }) {

    let title = names[elem.tag];
    let selected = elem.idEl === selectedElement;
    return (
        <li key={elem.idEl}
            className={`border-2 p-2 rounded-xl flex justify-between items-center mb-2 ${selected ? "bg-sky-500/10 border-indigo-300" : ""}`}>
            <p className={` text-2xl ${selected ? "text-blue-900 font-semibold" : " text-emerald-600"}`}>
                {title} : <span className={`font-semibold ${selected ? "text-blue-700 " : "text-black"}`}>{` <${elem.tag}>`}</span>
            </p>
            <div className="flex justify-end items-center gap-x-1">
                <Edit onClick={() => handleEdit(elem.idEl)} className="cursor-pointer text-blue-600 transition-transform ease-in-out duration-150 hover:scale-110" strokeWidth={1.5} size={28} />
                <Trash2 onClick={() => handleDelete(elem.idEl)} className="cursor-pointer text-red-600 transition-transform ease-in-out duration-150 hover:scale-110" strokeWidth={1.5} size={28} />
            </div>
        </li>
    )
}


